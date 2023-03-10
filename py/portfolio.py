
import functools
import operator
from money import Money

class Portfolio:
  def __init__(self):
      self.moneys = []
      self.eur_to_usd = 1.2

  def add(self, *moneys):
      self.moneys.extend(moneys)
  
  def __convert(self, aMoney, aCurrency):
    if aMoney.currency == aCurrency:
      return aMoney.amount
    else:
      return aMoney.amount * self.eur_to_usd

  def evaluate(self, currency):
      total = functools.reduce(operator.add, map(lambda m: self.__convert(m, currency), self.moneys), 0)
      return Money(total, currency)