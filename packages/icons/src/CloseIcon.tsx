import * as React from 'react';

/**
 * CloseIcon renders a simple “X” or close symbol.  It accepts `size` and
 * `color` props to customise its appearance.  Icons like this live in the
 * `@lyfeguard/icons` package so they can be used independently of the
 * component library.
 */
export interface CloseIconProps extends React.SVGProps<SVGSVGElement> {
  /**
   * The size of the icon in pixels. Defaults to 24.
   */
  size?: number;
  /**
   * The stroke colour of the icon. Defaults to `currentColor` so it inherits
   * from the parent text colour.
   */
  color?: string;
}

export const CloseIcon: React.FC<CloseIconProps> = ({ size = 24, color = 'currentColor', ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
};