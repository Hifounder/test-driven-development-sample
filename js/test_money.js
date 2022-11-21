const assert = require("assert");

class Money {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }
  times(multiplier) {
    return new Money(this.amount * multiplier, this.currency);
  }

  divide(divisor) {
    return new Money(this.amount / divisor, this.currency);
  }
}

class Portfolio {
  constructor(){
    this.moneys = []
  }
  add(...moneys) {
    this.moneys = this.moneys.concat(moneys)
  }
  evaluate(currency) {
    let total = this.moneys.reduce((sum, money) => {
      return sum + money.amount;
    }, 0);
    return new Money(total, currency);
  }
}

let fiveDollars = new Money(5, "USD");
let tenDollars = new Money(10, "USD");
assert.deepStrictEqual(fiveDollars.times(2), tenDollars);

let originalMoney = new Money(4002, "KRW");
let actualResult = originalMoney.divide(4);
let expectResult = new Money(1000.5, "KRW");
assert.deepStrictEqual(actualResult, expectResult);

let fifteenDollars = new Money(15, "USD");
let portfolio = new Portfolio();
portfolio.add(fiveDollars, tenDollars);
assert.deepStrictEqual(portfolio.evaluate("USD"), fifteenDollars);
