from flask import Flask

app = Flask(__name__)


@app.route("/")
def index():
    return "Hello, World"


@app.route("/profile")
def profile():
    response_body = {
        "name": "test",
        "about": "Hello!"
    }

    return response_body
