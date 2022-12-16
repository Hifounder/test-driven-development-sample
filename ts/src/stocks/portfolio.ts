import { Money } from "./Money";

export class Portfolio {
  private moneys: Money[];
  private eurToUsd: number
  constructor() {
    this.moneys = [];
    this.eurToUsd = 1.2
  }
  add(...moneys: Money[]) {
    this.moneys = this.moneys.concat(moneys);
  }
  convert(money: Money, currency: string) {
    if (money.currency === currency) {
      return money.amount;
    }
    return money.amount * this.eurToUsd;
  }
  evaluate(currency: string) {
    let total = this.moneys.reduce((sum, money) => {
      return sum + this.convert(money, currency);
    }, 0);
    return new Money(total, currency);
  }
}
