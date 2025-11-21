import * as React from 'react';

/**
 * MinusIcon renders a simple horizontal line symbolising a minus sign.
 * It accepts `size` and `color` props for customisation. Use it for
 * subtract actions, collapsing sections or representing negative values.
 */
export interface MinusIconProps extends React.SVGProps<SVGSVGElement> {
  /** The size of the icon in pixels. Defaults to 24. */
  size?: number;
  /**
   * The stroke colour of the icon. Defaults to `currentColor` so it
   * inherits from the parent text colour.
   */
  color?: string;
}

export const MinusIcon: React.FC<MinusIconProps> = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
};