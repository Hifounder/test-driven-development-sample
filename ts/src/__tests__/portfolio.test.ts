import { Money } from "../stocks/Money";
import { Portfolio } from "../stocks/Portfolio";

describe("testing Portfolio.", () => {
  it("USD + USD", () => {
    let fiveDollars = new Money(5, "USD");
    let tenDollars = new Money(10, "USD");
    let fifteenDollars = new Money(15, "USD");
    let portfolio = new Portfolio();
    portfolio.add(fiveDollars, tenDollars)
    expect(portfolio.evaluate("USD")).toEqual(fifteenDollars);
  });
});