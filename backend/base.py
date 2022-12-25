from flask import Flask, jsonify
from cs50 import SQL

app = Flask(__name__)
db = SQL("sqlite:///database.db")

@app.route("/profile")
def profile():
    query = db.execute("SELECT item, expiry FROM test WHERE id=?", 1)
    return jsonify({
        "name": "testing",
        "about": "test"
    })
