from flask import Flask, jsonify, request, session
# from flask_session import Session
from werkzeug.security import check_password_hash, generate_password_hash
from cs50 import SQL

app = Flask(__name__)
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
  response = {}

  # validate username
  db_query = db.execute("SELECT username FROM users WHERE username = ?", username)
  if len(db_query) > 0:
    errors["username"] = "Username is unavailable"
    return errors, 401
    
  # check password exists 
  if not password:
    errors["passowrd"] = "This field must be filled"
    return errors, 401
  
  # generate password hash
  # add user to db
  db.execute("INSERT INTO users (username, passoword) VALUES(?, ?)")

  return {"yes": "nice"}

