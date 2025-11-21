import React from 'react';
import * as s from './Spinner.css';

export interface SpinnerProps {
  /** Diameter of the spinner in pixels */
  size?: number;
}

/**
 * Spinner component
 *
 * A simple loading indicator. Uses a border-based spinner with the top
 * segment coloured using the brand colour token. The size can be
 * customised.
 */
export const Spinner: React.FC<SpinnerProps> = ({ size = 24 }) => {
  return <span className={s.spinner} style={{ width: size, height: size }} data-lyfeguard="Spinner" />;
};