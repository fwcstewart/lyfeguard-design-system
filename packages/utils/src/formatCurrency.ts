/**
 * Formats a numeric value as a currency string.
 *
 * This helper uses the built‑in Intl.NumberFormat API to convert
 * a number into a properly formatted currency string.  It defaults to
 * British pounds (GBP) and the en‑GB locale but can be customised
 * per call.  You can use it throughout the Lyfeguard products to
 * display monetary values consistently.
 *
 * @example
 * formatCurrency(1234.56) // "£1,234.56"
 * formatCurrency(1000, 'en-US', 'USD') // "$1,000.00"
 *
 * @param value - The numeric value to format.
 * @param locale - Optional BCP 47 locale identifier.  Defaults to 'en-GB'.
 * @param currency - Optional ISO 4217 currency code.  Defaults to 'GBP'.
 * @returns The formatted currency string.
 */
export function formatCurrency(
  value: number,
  locale: string = 'en-GB',
  currency: string = 'GBP'
): string {
  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(
    value,
  );
}