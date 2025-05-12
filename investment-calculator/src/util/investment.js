
export function calculateInvestmentResults(
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
) {
  const annualData = [];
  let investmentValue = initialInvestment;
  let totalInterest = 0;
  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    totalInterest += interestEarnedInYear;
    annualData.push({
      year: i + 1, // year identifier
      interest: formatter.format(interestEarnedInYear), // the amount of interest earned in this year
      valueEndOfYear: formatter.format(investmentValue), // investment value at end of year
      annualInvestment: formatter.format(annualInvestment), // investment added in this year
      totalInterest:formatter.format(totalInterest),
      investedCapital:formatter.format(investmentValue-totalInterest)
    });
  }

  return annualData;
}

// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage: formatter.format(1000) => yields "$1,000"
export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
