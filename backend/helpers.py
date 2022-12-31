from datetime import datetime


def current_date(date: str):
  return datetime.strptime(date, "%Y-%m-%d")