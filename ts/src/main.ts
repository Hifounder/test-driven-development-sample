import { deepStrictEqual } from "assert";
import { Money } from "./stocks/Money";
import { Portfolio } from "./stocks/Portfolio";

let fiveDollars = new Money(5, "USD");
let tenDollars = new Money(10, "USD");
deepStrictEqual(fiveDollars.times(2), tenDollars);

let originalMoney = new Money(4002, "KRW");
let actualResult = originalMoney.divide(4);
let expectResult = new Money(1000.5, "KRW");
deepStrictEqual(actualResult, expectResult);

let fifteenDollars = new Money(15, "USD");
let portfolio = new Portfolio();
portfolio.add(fiveDollars, tenDollars);
deepStrictEqual(portfolio.evaluate("USD"), fifteenDollars);
