import * as React from 'react';

/**
 * FileIcon renders a simple document/file symbol.  It accepts `size` and
 * `color` props to customise its appearance.  Icons like this live in the
 * `@lyfeguard/icons` package so they can be used independently of the
 * component library.
 */
export interface FileIconProps extends React.SVGProps<SVGSVGElement> {
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

export const FileIcon: React.FC<FileIconProps> = ({ size = 24, color = 'currentColor', ...props }) => {
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
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  );
};