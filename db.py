from cs50 import SQL

# configure database
db = SQL("sqlite:///backend/database.db")

query = db.execute("SELECT * FROM items")

items = []
d = {}
for row in query:
  user_id = row["user_id"]
  d[user_id] = d.get(user_id, 0) + 1

  item_id = d[user_id]
  item = row["item"]
  expiry = row["expiry"]
  items.append({
    "user_id": user_id,
    "item_id": item_id,
    "item": item,
    "expiry": expiry,
  })


db.execute("CREATE TABLE items (user_id INTEGER, item_id INTEGER, item TEXT NOT NULL, expiry TEXT NOT NULL, FOREIGN KEY(user_id) REFERENCES users(id))")

for row in items:
  db.execute("INSERT INTO")