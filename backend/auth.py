basic_auth = HTTPBasicAuth()
token_auth = HTTPTokenAuth()


@basic_auth.verify_password
def verify_password(username, password):
  rows = db.execute("SELECT id, username, hash FROM users WHERE username = ?", username)

  if len(rows) == 1 and check_password_hash(rows[0]["hash"], password):
    session["user_id"] = rows[0]["id"]
    return session["user_id"]


@basic_auth.error_handler
def unauthorized():
    return make_response(jsonify({'error': 'Unauthorized access'}), 403)


@token_auth.verify_token
def verify_token(token):
  if token == session.get("access_token"):
    return session["user_id"]


@token_auth.error_handler
def unauthorized():
    return make_response(jsonify({'error': 'Unauthorized access'}), 403)