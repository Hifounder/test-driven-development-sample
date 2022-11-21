package main

import "testing"

type Money struct {
	amount   float64
	currency string
}

func (m Money) Times(multiplier int) Money {
	return Money{amount: m.amount * float64(multiplier), currency: m.currency}
}

func (m Money) Divide(divisor int) Money {
	return Money{amount: m.amount / float64(divisor), currency: m.currency}
}

type Portfolio []Money

func (p Portfolio) Add(m Money) Portfolio {
	p = append(p, m)
	return p
}

func (p Portfolio) Evaluate(currency string) Money {
	total := 0.0
	for _, m := range p {
		total = total + m.amount
	}
	return Money{amount: total, currency: currency}
}

func assertEqual(t *testing.T, expected Money, actual Money) {
	if expected != actual {
		t.Errorf("Expected [%+v] Got [%+v]", expected, actual)
	}
}

func TestMultiplicationInDollars(t *testing.T) {
	fiver := Money{
		amount:   5,
		currency: "USD",
	}
	actual := fiver.Times(2)
	expected := fiver.Times(2)
	assertEqual(t, expected, actual)
}
func TestDivision(t *testing.T) {
	originalMoney := Money{amount: 4002, currency: "KRW"}
	actual := originalMoney.Divide(4)
	expected := Money{amount: 1000.5, currency: "KRW"}
	assertEqual(t, expected, actual)
}
func TestAddition(t *testing.T) {
	var portfolio Portfolio
	var portfolioInDollars Money

	fiveDollars := Money{amount: 5, currency: "USD"}
	tenDollars := Money{amount: 10, currency: "USD"}
	fifteenDollars := Money{amount: 15, currency: "USD"}

	portfolio = portfolio.Add(fiveDollars)
	portfolio = portfolio.Add(tenDollars)
	portfolioInDollars = portfolio.Evaluate("USD")

	assertEqual(t, fifteenDollars, portfolioInDollars)
}
