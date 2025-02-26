export const getCSSVariable = (variable: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
