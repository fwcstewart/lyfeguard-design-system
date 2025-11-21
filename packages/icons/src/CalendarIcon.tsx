import React from 'react';

/**
 * CalendarIcon displays a simple calendar outline with header and grid
 * indicators.  It is useful for date pickers or scheduling features.
 */
export interface CalendarIconProps {
  /** Accessible title.  When provided, the icon is announced by screen readers. */
  title?: string;
  /** Width and height of the icon.  Defaults to 16px. */
  size?: number;
  /** Stroke colour.  Defaults to `currentColor`. */
  color?: string;
}

export const CalendarIcon: React.FC<CalendarIconProps> = ({ title, size = 16, color = 'currentColor' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 24 24"
    stroke={color}
    aria-hidden={title ? undefined : true}
    role={title ? 'img' : undefined}
  >
    {title ? <title>{title}</title> : null}
    <rect x="3" y="4" width="18" height="17" rx="2" ry="2" strokeWidth={2} />
    <path d="M16 2v4" strokeWidth={2} strokeLinecap="round" />
    <path d="M8 2v4" strokeWidth={2} strokeLinecap="round" />
    <path d="M3 10h18" strokeWidth={2} strokeLinecap="round" />
    <line x1="7" y1="14" x2="7" y2="14" strokeWidth={2} strokeLinecap="round" />
    <line x1="12" y1="14" x2="12" y2="14" strokeWidth={2} strokeLinecap="round" />
    <line x1="17" y1="14" x2="17" y2="14" strokeWidth={2} strokeLinecap="round" />
    <line x1="7" y1="18" x2="7" y2="18" strokeWidth={2} strokeLinecap="round" />
    <line x1="12" y1="18" x2="12" y2="18" strokeWidth={2} strokeLinecap="round" />
    <line x1="17" y1="18" x2="17" y2="18" strokeWidth={2} strokeLinecap="round" />
  </svg>
);

CalendarIcon.displayName = 'CalendarIcon';