from datetime import datetime


def get_date(date: str):
  return datetime.strptime(date, "%Y-%m-%d")