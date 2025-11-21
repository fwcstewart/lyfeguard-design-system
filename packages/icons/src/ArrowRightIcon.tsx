import React from 'react';

/**
 * ArrowRightIcon is a simple right‑pointing arrow.  Use this icon for
 * navigation or call‑to‑action indicators.  It inherits its colour from
 * the current text colour by default and accepts an optional custom
 * colour via the `color` prop.
 */
export interface ArrowRightIconProps {
  /**
   * Accessible title for screen readers.  If omitted, the SVG will be
   * marked `aria-hidden` and ignored by assistive technologies.
   */
  title?: string;
  /**
   * Width and height of the icon.  Defaults to 16px.
   */
  size?: number;
  /**
   * Stroke colour of the icon.  Defaults to `currentColor` so it
   * inherits from its parent.
   */
  color?: string;
}

export const ArrowRightIcon: React.FC<ArrowRightIconProps> = ({ title, size = 16, color = 'currentColor' }) => (
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
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 7l5 5m0 0l-5 5m5-5H6"
    />
  </svg>
);

ArrowRightIcon.displayName = 'ArrowRightIcon';