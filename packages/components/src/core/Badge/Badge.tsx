import React from 'react';
import * as s from './Badge.css';

export interface BadgeProps {
  /**
   * The badge variant which controls the colour scheme
   */
  variant?: 'primary' | 'success' | 'warning' | 'error' | 'info';
  /**
   * The content displayed inside the badge
   */
  children: React.ReactNode;
}

/**
 * Badge component
 *
 * Displays a small, coloured pill for status indicators, tags and metadata.
 * Provides clear visual hierarchy with refined styling and smooth transitions.
 */
export const Badge: React.FC<BadgeProps> = ({ variant = 'primary', children }) => {
  return (
    <span className={s.variants[variant]} data-lyfeguard="Badge">
      {children}
    </span>
  );
};