import functools
import operator
import unittest

class Money:
  def __init__(self, amount, currency):
    self.amount = amount
    self.currency = currency

  def __eq__(self, other):
    return self.amount == other.amount and self.currency == other.currency

  def divide(self, divisor):
    return Money(self.amount / divisor, self.currency)

  def times(self, multiplier):
    return Money(self.amount * multiplier, self.currency)

class Portfolio:
    def __init__(self):
        self.moneys = []

    def add(self, *moneys):
        self.moneys.extend(moneys)

    def evaluate(self, currency):
        total = functools.reduce(operator.add, map(lambda m: m.amount, self.moneys), 0)
        return Money(total, currency)

class TestMoney(unittest.TestCase):
  def testMultiplicationInDollars(self):
    fiver = Money(5, "USD")
    tenner = fiver.times(2)
    self.assertEqual(10, tenner.amount)
    self.assertEqual("USD", tenner.currency)

  def testMultiplicationInDollars(self):
    fiveDollars = Money(5, "USD")
    tenDollars = Money(10, "USD")
    self.assertEqual(tenDollars, fiveDollars.times(2))

  def testMultiplicationInEuros(self):
    tenEuros = Money(10, "EUR")
    twentyEuros = Money(20, "EUR")
    self.assertEqual(twentyEuros, tenEuros.times(2))

  def testDivision(self):
    originalMoney = Money(4002, "KRW")
    expectedMoneyAfterDivision = Money(1000.5, "KRW")
    self.assertEqual(expectedMoneyAfterDivision, originalMoney.divide(4))

  def testAddition(self):
    fiveDollars = Money(5, "USD")
    tenDollars = Money(10, "USD")
    fifteenDollars = Money(15, "USD")
    portfolio = Portfolio()
    portfolio.add(fiveDollars, tenDollars)
    self.assertEqual(fifteenDollars, portfolio.evaluate("USD"))
    
if __name__ == '__main__':
    unittest.main()