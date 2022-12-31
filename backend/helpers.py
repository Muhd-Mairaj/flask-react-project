from datetime import datetime


def get_datez(date: str):
  return datetime.strptime(date, "%Y-%m-%d")