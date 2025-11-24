import React from 'react';
import * as s from './Spinner.css';
import { SPINNER_SIZES, SpinnerSize } from './constants';

export interface SpinnerProps {
  /** Token-based size of the spinner */
  size?: SpinnerSize;
  /** Accessible label announced by screen readers */
  ariaLabel?: string;
}

/**
 * Spinner component
 *
 * A simple loading indicator. Uses a border-based spinner with the top
 * segment coloured using the brand colour token. The size is controlled
 * via design tokens to maintain consistency.
 */
export const Spinner: React.FC<SpinnerProps> = ({ size = 'md', ariaLabel = 'Loading' }) => {
  const { size: diameter, strokeWidth } = SPINNER_SIZES[size];
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = (event: MediaQueryListEvent | MediaQueryList) => {
      setPrefersReducedMotion(event.matches);
    };

    updatePreference(mediaQuery);

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', updatePreference);
    } else if (typeof mediaQuery.addListener === 'function') {
      mediaQuery.addListener(updatePreference);
    }

    return () => {
      if (typeof mediaQuery.removeEventListener === 'function') {
        mediaQuery.removeEventListener('change', updatePreference);
      } else if (typeof mediaQuery.removeListener === 'function') {
        mediaQuery.removeListener(updatePreference);
      }
    };
  }, []);

  return (
    <span
      className={s.spinner}
      style={{
        ['--spinner-size' as string]: diameter,
        ['--spinner-stroke-width' as string]: strokeWidth,
        ['--spinner-animation-state' as string]: prefersReducedMotion ? 'paused' : undefined,
      }}
      role="status"
      aria-live="polite"
      aria-label={ariaLabel}
      data-reduced-motion={prefersReducedMotion ? 'true' : undefined}
      data-lyfeguard="Spinner"
    />
  );
};
