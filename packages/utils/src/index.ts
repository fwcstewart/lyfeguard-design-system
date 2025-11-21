/**
 * Shared utility functions for the Lyfeguard design system.
 *
 * This entry file exports helper functions that are independent of React
 * and the design tokens.  Utilities live in their own modules within
 * this package.  Import them as needed throughout your application.
 */

export { formatCurrency } from './formatCurrency';
export { formatDate } from './formatDate';

// Class name helper to conditionally join strings.
export { cx } from './cx';

// Accessibility helpers for generating unique IDs and building ARIA attrs.
export { generateId, mergeRefs } from './aria';