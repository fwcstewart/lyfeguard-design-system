/**
 * Utility to concatenate class names conditionally.
 *
 * Pass any number of strings, undefined, null or false values.  Only truthy
 * strings are included in the final result.  This helper is useful when
 * building component className props based on conditional logic.
 *
 * @example
 * const classes = cx('btn', isActive && 'btn--active', isDisabled && 'btn--disabled');
 * // -> 'btn btn--active'
 */
export function cx(...classes: Array<string | undefined | null | false>): string {
  return classes.filter(Boolean).join(' ');
}