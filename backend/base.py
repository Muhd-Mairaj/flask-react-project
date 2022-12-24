from flask import Flask, jsonify


app = Flask(__name__)
db =

@app.route("/profile")
def profile():
    return jsonify({
        "name": "testing",
        "about": "test"
    })
