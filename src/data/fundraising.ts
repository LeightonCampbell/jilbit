export const jamaicaFund = {
  goalAmount: 20000,
  raisedAmount: 4250,
  nextEventLabel: 'May 9 BBQ',
  locationShort: 'Crenshaw Blvd, LA',
} as const;

export const jamaicaFundProgress = {
  remainingAmount: jamaicaFund.goalAmount - jamaicaFund.raisedAmount,
  progressPercent: Math.round((jamaicaFund.raisedAmount / jamaicaFund.goalAmount) * 100),
} as const;
