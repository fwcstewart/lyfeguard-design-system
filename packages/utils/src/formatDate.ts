/**
 * Formats a date into a human‑readable string.
 *
 * This utility accepts a `Date` instance, a timestamp or an ISO 8601
 * string and returns a formatted date string using the Intl.DateTimeFormat
 * API.  By default it formats as `DD MMM YYYY` in the en‑GB locale.
 * You can override the locale and formatting options if you need a
 * different output.  See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
 * for all available options.
 *
 * @example
 * formatDate(new Date(2024, 0, 15)) // "15 Jan 2024"
 * formatDate('2023-12-31', 'en-US', { month: 'long', day: 'numeric' }) // "December 31"
 *
 * @param date - A Date object, timestamp or ISO 8601 string.
 * @param locale - Optional locale string.  Defaults to 'en-GB'.
 * @param options - Optional Intl.DateTimeFormatOptions to customise the output.
 * @returns A formatted date string.
 */
export function formatDate(
  date: Date | number | string,
  locale: string = 'en-GB',
  options?: Intl.DateTimeFormatOptions,
): string {
  const d =
    typeof date === 'string' || typeof date === 'number' ? new Date(date) : date;
  const fmt = new Intl.DateTimeFormat(
    locale,
    options ?? { year: 'numeric', month: 'short', day: 'numeric' },
  );
  return fmt.format(d);
}