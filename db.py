from cs50 import SQL

# configure database
db = SQL("sqlite:///backend/database.db")

query = db.execute("SELECT * FROM users")

items = []
d = {}
for item in query:
  print(item)