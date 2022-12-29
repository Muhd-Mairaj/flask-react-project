from flask import Flask, jsonify, request, session
from flask_httpauth import HTTPBasicAuth
# from flask_session import Session
from werkzeug.security import check_password_hash, generate_password_hash
from cs50 import SQL



app = Flask(__name__)
basic_auth = HTTPBasicAuth()
db = SQL("sqlite:///database.db")




@app.route("/profile")
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

