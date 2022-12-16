import { Money } from "../stocks/Money";
import { Portfolio } from "../stocks/Portfolio";

describe("testing Portfolio.", () => {
  it("USD + USD", () => {
    let fiveUSD = new Money(5, "USD");
    let tenUSD = new Money(10, "USD");
    let expectValue = new Money(15, "USD");
    let portfolio = new Portfolio();
    portfolio.add(fiveUSD, tenUSD);
    expect(portfolio.evaluate("USD")).toEqual(expectValue);
  });

  it("USD + ERU", () => {
    let fiveUSD = new Money(5, "USD");
    let tenEUR = new Money(10, "EUR");
    let expectValue = new Money(17, "USD");
    let portfolio = new Portfolio();
    portfolio.add(fiveUSD, tenEUR);
    expect(portfolio.evaluate("USD")).toEqual(expectValue);
  });
});
