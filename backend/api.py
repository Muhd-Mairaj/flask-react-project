from flask import Flask, jsonify, make_response, request, session
from flask_session import Session
from flask_httpauth import HTTPBasicAuth, HTTPTokenAuth
from secrets import token_urlsafe
from werkzeug.security import check_password_hash, generate_password_hash
from cs50 import SQL

from helpers import get_current_date, get_date, check_password_strength

import secrets
import os


basic_auth = HTTPBasicAuth()
token_auth = HTTPTokenAuth()


# configure app
app = Flask(__name__)

# Make sure SECRET KEY is set
# if not os.environ.get("SECRET_KEY"):
#     raise RuntimeError("SECRET_KEY not set. Run \"export SECRET_KEY='your key here'\"")

# configure secret_key
# app.config["SECRET_KEY"] = os.environ.get("SECRET_KEY")
app.config["SECRET_KEY"] = secrets.token_hex()

# configure session to use filesystem
app.config["SESSION_COOKIE_NAME"] = "session"
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

# configure database
db = SQL("sqlite:///database.db")

#
## Set up authentication
#

# Basic Auth
@basic_auth.verify_password
def verify_password(username, password):
  rows = db.execute("SELECT id, username, hash FROM users WHERE username = ?", username)

  if len(rows) == 1 and check_password_hash(rows[0]["hash"], password):
    session["user"] = {
        "id": rows[0]["id"],
        "username": username,
    }
    return session["user"]


@basic_auth.error_handler
def unauthorized():
    return make_response(jsonify({'error': 'Unauthorized access'}), 401, {'WWW-Authenticate': 'Form'})


# Token Auth
@token_auth.verify_token
def verify_token(token):
  if "access_token" in session and token == session["access_token"]:
    return session["user"]


@token_auth.error_handler
def unauthorized():
    return make_response(jsonify({'error': 'Unauthorized access'}), 401)
#
## End set-up
#


@app.after_request
def after_request(response):
    """Ensure responses aren't cached"""
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response


@app.route("/user", methods=["GET"])
@token_auth.login_required
def get_user():
  return token_auth.current_user(), 200


@app.route("/profile", methods=["GET"])
@token_auth.login_required
def profile():
    current_date = get_current_date()

    # items = db.execute("SELECT item, expiry FROM items WHERE user_id=?", session["user"]["id"])
    items = db.execute("SELECT * FROM items WHERE user_id = ? ORDER BY expiry DESC", session["user"]["id"])
    session["key_count"] = len(items)

    for i, item in enumerate(items, 1):
      expiry_date = get_date(item["expiry"])
      item["bg"] = "red" if expiry_date < current_date else ""
      item["key"] = i

    session["items"] = items
    return jsonify({"items": items}), 200


@app.route("/add", methods=["POST"])
@token_auth.login_required
def add():
    item = request.json.get("item")
    expiry = request.json.get("expiry")
    errors = {}

    # check item exists
    if not item:
      errors["item"] = "This field must be filled"
    # check expiry exists
    if not expiry:
      errors["expiry"] = "This field must be filled"

    # return errors before proceeding
    if errors:
      return errors, 400

    # add item to db
    db.execute("INSERT INTO items (user_id, item, expiry) VALUES(?, ?, ?)", session["user"]["id"], item, expiry)

    item = {
      "item": item,
      "expiry": expiry,
      "bg": "red" if get_date(expiry) < get_current_date() else "",
      "key": session["key_count"],
    }
    session["key_count"] += 1

    session["items"].append(item)
    return item, 200



@app.route("/profile", METHODS=["DELETE"])
@token_auth.login_required
def remove(key):
  for i, item in session["items"]:
    if key == item["key"]:
      session["items"].
      pass

  return 200


@app.route("/register", methods=["POST"])
def register():
  username = request.json.get("username")
  password = request.json.get("password")
  confirm = request.json.get("confirm")
  errors = {}

  # check username exists
  if not username:
    errors["username"] = "This field must be filled"

  # check password exists
  if not password:
    errors["password"] = "This field must be filled"

  # check confirm exists
  if not confirm:
    errors["confirm"] = "This field must be filled"

  # return errors before checking validity
  if errors:
    return errors, 400

  # validate username
  db_query = db.execute("SELECT username FROM users WHERE username = ?", username)
  if len(db_query) > 0:
    errors["username"] = "Username is unavailable"

  # validate passwords
  if password != confirm:
    errors["password"] = "Passwords dont match"
    errors["confirm"] = "Passwords dont match"

  # return errors before registering user
  if errors:
    return errors, 401

  # check password strength
  if not check_password_strength(password):
    errors["password"] = "Password must be 8 characters, including upper, lower, digits and symbols (!&()*,-./;=?@[\\]_{|})"
    errors["confirm"] = "Password must be 8 characters, including upper, lower, digits and symbols (!&()*,-./;=?@[\\]_{|})"
    return errors, 401

  #
  ### Register user

  # generate password hash
  password_hash = generate_password_hash(password)

  # add user to db
  db.execute("INSERT INTO users (username, hash) VALUES(?, ?)", username, password_hash)

  return {}, 204


@app.route("/login", methods=["POST"])
@basic_auth.login_required
def login():
  token = token_urlsafe()
  session["access_token"] = token
  return {"access_token": token}, 200


@app.route("/logout", methods=["DELETE"])
@token_auth.login_required
def logout():
  session.clear()
  return {}, 204
