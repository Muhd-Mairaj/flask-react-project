<<<<<<< HEAD
from flask import Flask, jsonify
=======
from flask import Flask
>>>>>>> 07100e03d260f9d7bcc95c9b07a2a187affcd189

app = Flask(__name__)


<<<<<<< HEAD
@app.route("/profile")
def profile():
    return jsonify({
        "name": "testing",
        "about": "test"
    })
=======
@app.route("/")
def index():
    return "Hello, World"


@app.route("/profile")
def profile():
    response_body = {
        "name": "Nagato",
        "about": "Hello! I'm a full stack developer that loves python and javascript"
    }

    return response_body
>>>>>>> 07100e03d260f9d7bcc95c9b07a2a187affcd189
