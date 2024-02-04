export const convertPLNToUSD = (PLN) => {
  if (PLN === undefined || typeof PLN === 'string') {
    return NaN;
  }

  if (typeof PLN !== 'number') {
    return "Error";
  }

  if (PLN < 0) {
    return "$0.00";
  }

  const conversionRate = 1 / 3.5;
  const PLNtoUSD = PLN * conversionRate;
  
  const roundedPLNtoUSD = Math.round(PLNtoUSD * 100) / 100;
  
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return formatter.format(roundedPLNtoUSD).replace(/\u00a0/g, ' ');
};
