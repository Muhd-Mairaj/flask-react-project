from flask import Flask, jsonify
from cs50 import SQL

app = Flask(__name__)
db = SQL("sqlite:///database.db")

@app.route("/profile")
def profile():
    user_id = 1
    query = db.execute("SELECT item, expiry FROM test WHERE id=?", user_id)
    items = query[0]
    print({query = })
    print({query = })
    return jsonify({
        "name": "testing",
        "about": "test"
    })
