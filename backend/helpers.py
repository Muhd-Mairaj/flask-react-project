from datetime import datetime


def get_current_date():
  return datetime.now()


def get_date(date: str):
  return datetime.strptime(date, "%Y-%m-%d")