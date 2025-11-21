import * as React from 'react';

/**
 * CheckIcon renders a simple checkmark symbol. It accepts `size` and `color`
 * props to customise its appearance.  Icons like this live in the
 * `@lyfeguard/icons` package so they can be used independently of the
 * component library.
 */
export interface CheckIconProps extends React.SVGProps<SVGSVGElement> {
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

export const CheckIcon: React.FC<CheckIconProps> = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
};