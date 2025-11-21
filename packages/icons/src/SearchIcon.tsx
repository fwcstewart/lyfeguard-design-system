import React from 'react';

/**
 * SearchIcon represents a magnifying glass, commonly used for search
 * functionality.  It inherits the current text colour by default and
 * accepts optional size and colour overrides.
 */
export interface SearchIconProps {
  /**
   * Accessible title for screen readers.  If omitted, the icon will be
   * hidden from assistive technologies.
   */
  title?: string;
  /**
   * Diameter of the icon in pixels.  Defaults to 16.
   */
  size?: number;
  /**
   * Stroke colour.  Defaults to `currentColor`.
   */
  color?: string;
}

export const SearchIcon: React.FC<SearchIconProps> = ({ title, size = 16, color = 'currentColor' }) => (
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
      d="M21 21l-4.35-4.35M16.65 17.65A7 7 0 1017 10a7 7 0 00-7 7"
    />
  </svg>
);

SearchIcon.displayName = 'SearchIcon';