from flask import Flask, jsonify
from cs50 import SQL

app = Flask(__name__)
db = SQL("sqlite:///database.db")

@app.route("/profile")
def profile():
    user_id = 1
    items = db.execute("SELECT item, expiry FROM test WHERE id=?", user_id)

    for enumerateitem in items:
      item["key"] = 
    return jsonify({"items": items})
