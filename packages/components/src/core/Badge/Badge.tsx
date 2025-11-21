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
 */
export const Badge: React.FC<BadgeProps> = ({ variant = 'primary', children }) => {
  let className: string;
  switch (variant) {
    case 'success':
      className = s.success;
      break;
    case 'warning':
      className = s.warning;
      break;
    case 'error':
      className = s.error;
      break;
    case 'info':
      className = s.info;
      break;
    default:
      className = s.primary;
  }
  return <span className={className}>{children}</span>;
};