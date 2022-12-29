from flask import Flask, jsonify, make_response, request, session
from flask_session import Session
from flask_httpauth import HTTPBasicAuth
from secrets import token_urlsafe
# from flask_session import Session
from werkzeug.security import check_password_hash, generate_password_hash
from cs50 import SQL


app = Flask(__name__)

app.config["SECRET_KEY"] = "192b9bdd22ab9ed4d12e236c78afcb9a393ec15f71bbf5dc987d54727823bcbf"
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_COOKIE_NAME"] = "session"
app.config["SESSION_TYPE"] = "filesystem"


Session(app)

basic_auth = HTTPBasicAuth()

db = SQL("sqlite:///database.db")


# app.config["SESSION_PERMANENT"] = False
# SESSION_COOKIE_SECURE

@basic_auth.verify_password
def verify_password(username, password):
  rows = db.execute("SELECT id, username, hash FROM users WHERE username = ?", username)

  if len(rows) == 1 and check_password_hash(rows[0]["hash"], password):
    session["user_id"] = rows[0]["id"]
    return rows[0]["id"]


@basic_auth.error_handler
def unauthorized():
    return make_response(jsonify({'error': 'Unauthorized access'}), 403)


@app.route("/profile")
@basic_auth.login_required
def profile():
    user_id = 1
    items = db.execute("SELECT item, expiry FROM test WHERE id=?", user_id)

    for i, item in enumerate(items, 1):
      item["key"] = i

    return jsonify({"items": items})


@app.route("/register", methods=["POST"])
def register():
  username = request.json.get("username")
  password = request.json.get("password")
  confirm = request.json.get("confirm")
  errors = {}
  code = 200


  # check username exists
  if not username:
    errors["username"] = "This field must be filled"
    return errors, 401
  
  # check password exists 
  if not password:
    errors["password"] = "This field must be filled"
    code = 401
      
  # check confirm exists 
  if not confirm:
    errors["confirm"] = "This field must be filled"
    code = 401
  
  # validate username
  db_query = db.execute("SELECT username FROM users WHERE username = ?", username)
  if len(db_query) > 0:
    errors["username"] = "Username is unavailable"
    code = 401
    
  # validate passwords
  if password and confirm and password != confirm:
    errors["password"] = "Passwords dont match"
    errors["confirm"] = "Passwords dont match"
    code = 401

  
  if code == 200:
    # generate password hash
    password_hash = generate_password_hash(password)
    # add user to db
    db.execute("INSERT INTO users (username, hash) VALUES(?, ?)", username, password_hash)

  if code == 401:
    return errors, code

  return errors, code


@app.route("/tokens", methods=["POST"])
@basic_auth.login_required
def tokens():
  token = token_urlsafe()
  session["access_token"] = token
  return {"access_token": token}, 200

@app.route("/logout", methods=["GET"])
def logout():
  session.clear()
