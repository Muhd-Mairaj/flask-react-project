from cs50 import SQL

# configure database
db = SQL("sqlite:///database.db")

query = db.execute("SELECT * FROM users")

items = {}
for item in query:
  print(item)