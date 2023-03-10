package stocks

type Portfolio []Money

func convert(money Money, currency string) float64 {
	eurToUsd := 1.2
	if money.currency == currency {
		return money.amount
	}
	return money.amount * eurToUsd
}

func (p Portfolio) Add(m Money) Portfolio {
	p = append(p, m)
	return p
}

func (p Portfolio) Evaluate(currency string) Money {
	total := 0.0
	for _, m := range p {
		total = total + convert(m, currency)
	}
	return Money{amount: total, currency: currency}
}
