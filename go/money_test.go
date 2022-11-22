package main

import (
	s "tdd/stocks"
	"testing"
)

func assertEqual(t *testing.T, expected s.Money, actual s.Money) {
	if expected != actual {
		t.Errorf("Expected [%+v] Got [%+v]", expected, actual)
	}
}

func TestMultiplicationInDollars(t *testing.T) {
	fiver := s.NewMoney(5, "USD")
	actual := fiver.Times(2)
	expected := fiver.Times(2)
	assertEqual(t, expected, actual)
}
func TestDivision(t *testing.T) {
	originalMoney := s.NewMoney(4002, "KRW")
	actual := originalMoney.Divide(4)
	expected := s.NewMoney(1000.5, "KRW")
	assertEqual(t, expected, actual)
}
func TestAddition(t *testing.T) {
	var portfolio s.Portfolio
	var portfolioInDollars s.Money

	fiveDollars := s.NewMoney(5, "USD")
	tenDollars := s.NewMoney(10, "USD")
	fifteenDollars := s.NewMoney(15, "USD")

	portfolio = portfolio.Add(fiveDollars)
	portfolio = portfolio.Add(tenDollars)
	portfolioInDollars = portfolio.Evaluate("USD")

	assertEqual(t, fifteenDollars, portfolioInDollars)
}
