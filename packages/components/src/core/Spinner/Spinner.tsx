import React from 'react';
import { vars } from '../../globals.css';
import * as s from './Spinner.css';

const SIZE_MAP = {
  sm: {
    size: vars.spacing[6],
    strokeWidth: `calc(${vars.spacing[1]} * 0.5)`,
  },
  md: {
    size: vars.spacing[7],
    strokeWidth: `calc(${vars.spacing[1]} * 0.75)`,
  },
  lg: {
    size: vars.spacing[9],
    strokeWidth: `calc(${vars.spacing[2]} * 0.5)`,
  },
};

export type SpinnerSize = keyof typeof SIZE_MAP;

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
  const { size: diameter, strokeWidth } = SIZE_MAP[size];

  return (
    <span
      className={s.spinner}
      style={{
        ['--spinner-size' as string]: diameter,
        ['--spinner-stroke-width' as string]: strokeWidth,
      }}
      role="status"
      aria-label={ariaLabel}
      data-lyfeguard="Spinner"
    />
  );
};