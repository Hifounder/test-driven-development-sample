import { Money } from "./Money";

export class Portfolio {
  private moneys: Money[]
  constructor(){
    this.moneys = []
  }
  add(...moneys: Money[]) {
    this.moneys = this.moneys.concat(moneys)
  }
  evaluate(currency: string) {
    let total = this.moneys.reduce((sum, money) => {
      return sum + money.amount;
    }, 0);
    return new Money(total, currency);
  }
}
