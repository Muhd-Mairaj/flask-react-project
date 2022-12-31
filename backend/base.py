from flask import Flask, jsonify, make_response, request, session
from flask_session import Session
from flask_httpauth import HTTPBasicAuth, HTTPTokenAuth
from secrets import token_urlsafe
from werkzeug.security import check_password_hash, generate_password_hash
from cs50 import SQL
from datetime import datetime



basic_auth = HTTPBasicAuth()
token_auth = HTTPTokenAuth()


# configure app
app = Flask(__name__)

# configure secret_key
app.config["SECRET_KEY"] = "192b9bdd22ab9ed4d12e236c78afcb9a393ec15f71bbf5dc987d54727823bcbf"

# configure session to use filesystem
app.config["SESSION_COOKIE_NAME"] = "session"
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

# configure database
db = SQL("sqlite:///database.db")


@basic_auth.verify_password
def verify_password(username, password):
  rows = db.execute("SELECT id, username, hash FROM users WHERE username = ?", username)

  if len(rows) == 1 and check_password_hash(rows[0]["hash"], password):
    session["user_id"] = rows[0]["id"]
    return session["user_id"]


@basic_auth.error_handler
def unauthorized():
    return make_response(jsonify({'error': 'Unauthorized access'}), 401, {'WWW-Authenticate': 'Form'})


@token_auth.verify_token
def verify_token(token):
  if "access_token" in session and token == session["access_token"]:
    return session["user_id"]


@token_auth.error_handler
def unauthorized():
    return make_response(jsonify({'error': 'Unauthorized access'}), 401)


@app.after_request
def after_request(response):
    """Ensure responses aren't cached"""
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response


@app.route("/profile", methods=["GET"])
@token_auth.login_required
def profile():
    current_date = datetime.now()

    user_id = 1
    items = db.execute("SELECT item, expiry FROM test WHERE id=?", user_id)

    for i, item in enumerate(items, 1):
      expiry_date = datetime.strptime(item["expiry"], "%Y-%m-%d")
      item["key"] = i
      item["bg"] = "red" if expiry_date < current_date else ""

    return jsonify({"items": items})


@app.route("/add", methods=["POST"])
@token_auth.login_required
def add():
    item = request.json.get("item")
    expiry = request.json.get("expiry")
    errors = {}

    # check item exists
    if not item:
      error["item"] = "This field must be filled"
    # check expiry exists
    if not expiry:
      error["item"] = "This field must be filled"

    #
    if errors:
      return errors, 400

    return {}, 204


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
