import * as React from 'react';

/**
 * InfoIcon renders a simple information symbol: an “i” inside a
 * circle. It accepts `size` and `color` props for customisation.
 * Use it to highlight helpful information or tips.
 */
export interface InfoIconProps extends React.SVGProps<SVGSVGElement> {
  /** The size of the icon in pixels. Defaults to 24. */
  size?: number;
  /**
   * The stroke colour of the icon. Defaults to `currentColor` so it
   * inherits from the parent text colour.
   */
  color?: string;
}

export const InfoIcon: React.FC<InfoIconProps> = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
};