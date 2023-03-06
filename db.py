from cs50 import SQL

# configure database
db = SQL("sqlite:///backend/database.db")

query = db.execute("SELECT * FROM items")

items = []
d = {}
for item in query:
  user_id = item["user_id"]
  d[user_id] = d.get(user_id, 0) + 1

  item_id = d[user_id]
  item = item["item"]
  expiry = item["expiry"]
  items.append({
    "user_id": user_id,
    "item_id": item_id,
    
  })