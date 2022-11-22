import { Money } from "../stocks/Money";

describe("testing Money.", () => {
  it("money + money", () => {
    let fiveDollars = new Money(5, "USD");
    let tenDollars = new Money(10, "USD");
    expect(fiveDollars.times(2)).toEqual(tenDollars);
  });
  it("money / money", () => {
    let originalMoney = new Money(4002, "KRW");
    let actualResult = originalMoney.divide(4);
    let expectResult = new Money(1000.5, "KRW");
    expect(actualResult).toEqual(expectResult);
  });
});
