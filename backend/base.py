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
  username = request.form.get("username")
  password = request.body.get("password")

  print(username, password)

  return {"yes": "nice"}

