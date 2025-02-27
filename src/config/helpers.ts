export const getCSSVariable = (variable: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(variable).trim();

export function hexToRgba(hex: string, opacity = 1) {
  // Remove the hash (#) if present
  hex = hex.replace("#", "");

  // If the hex value is 3 characters, expand it to 6 characters
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map(function (char) {
        return char + char;
      })
      .join("");
  }

  // Convert hex to RGB values
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);

  // Return the RGBA value with the customizable opacity
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}
