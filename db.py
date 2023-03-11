from cs50 import SQL

# configure database
db = SQL("sqlite:///backend/test.db")

query = db.execute("SELECT * FROM items")

# item_id = 0
items = []
# d = {}
for row in query:
  user_id = row["user_id"]
  # d[user_id] = d.get(user_id, 0) + 1

  # item_id = d[user_id]
  # item_id += 1
  item = row["item"]
  expiry = row["expiry"]
  items.append( {
    "user_id": user_id,
    # "item_id": item_id,
    "item": item,
    "expiry": expiry,
  })


# print(*query, sep="\n")
# print()
# print(*items, sep="\n")

db = SQL("sqlite:///backend/database.db")
db.execute("CREATE TABLE items (user_id INTEGER, item_id INTEGER PRIMARY KEY NOT NULL, item TEXT NOT NULL, expiry TEXT NOT NULL, FOREIGN KEY(user_id) REFERENCES users(id))")

for row in items:
  db.execute("INSERT INTO items (user_id, item_id, item, expiry) VALUES(?, ?, ?, ?)",
              row["user_id"],
              row["item_id"],
              row["item"],
              row["expiry"]
            )