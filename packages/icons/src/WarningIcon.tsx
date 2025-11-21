import * as React from 'react';

/**
 * WarningIcon renders a triangular warning symbol with an exclamation
 * mark. It accepts `size` and `color` props to customise its
 * appearance. Use it to indicate caution or potential problems.
 */
export interface WarningIconProps extends React.SVGProps<SVGSVGElement> {
  /** The size of the icon in pixels. Defaults to 24. */
  size?: number;
  /**
   * The stroke colour of the icon. Defaults to `currentColor` so it
   * inherits from the parent text colour.
   */
  color?: string;
}

export const WarningIcon: React.FC<WarningIconProps> = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M10.29 3.86L1.82 18a1 1 0 0 0 .86 1.5h18.63a1 1 0 0 0 .86-1.5L13.71 3.86a1 1 0 0 0-1.71 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <circle cx="12" cy="17" r="1" />
    </svg>
  );
};