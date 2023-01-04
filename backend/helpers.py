from datetime import datetime
from strings import ascii_lowercase, ascii_uppercase, digits

def get_current_date():
  return datetime.now()


def get_date(date: str):
  return datetime.strptime(date, "%Y-%m-%d")


def check_password_strength(password):
    """
    checks if :param password: meets the requirements
    - Length greater than 8
    - No invalid symbol (#$%'+<>^`~:)
    - Includes atleast 1 uppercase, lowercase, digit, symbol

    returns True if requirements met else False
    """
    symbols = r"""!&()*,-./;=?@[\]_{|}"""

    if len(password) < 8:
        return False

    # if any character is not valid, return false
    if any(c not in ascii_lowercase + ascii_uppercase + digits + symbols for c in password):
        return False

    # set requirement booleans to false
    lower_exists = False
    upper_exists = False
    digit_exists = False
    symbol_exists = False

    # check each character for meeting requirements
    for c in password:
        if c in ascii_lowercase:
            lower_exists = True
        elif c in ascii_uppercase:
            upper_exists = True
        elif c in digits:
            digit_exists = True
        elif c in symbols:
            symbol_exists = True

    # if not all requirements met, return false, else return true
    if not (lower_exists and upper_exists and digit_exists and symbol_exists):
        return False

    return True