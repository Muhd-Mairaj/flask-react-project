from flask import Flask, jsonify
from cs50 import SQL

app = Flask(__name__)
db = SQL("sqlite:///database.db")

@app.route("/profile")
def profile():
    ite
    return jsonify({
        "name": "testing",
        "about": "test"
    })
