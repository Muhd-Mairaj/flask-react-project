from cs50 import SQL

# configure database
db = SQL("sqlite:///backend/database.db")

query = db.execute("SELECT * FROM items")

items = []
d = {}
for item in query:
  user_id = item["user_id"]
  item_id = d.get(user_id,)