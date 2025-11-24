import React from 'react';
import { cx } from '../../helpers/cx';
import * as s from './Layout.css';
import { buildSpacingVars, ResponsiveSpacing } from './spacing';

export interface CenterProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Maximum width constraint for the centered content. If not provided,
   * content will be centered without width constraints.
   */
  maxWidth?: string;
  /**
   * Padding applied to the center container using spacing tokens. Supports
   * responsive values to adjust spacing at breakpoints.
   */
  padding?: ResponsiveSpacing;
  /**
   * If true, centers content both horizontally and vertically. Requires
   * the parent to have a defined height.
   */
  andText?: boolean;
}

/**
 * Center horizontally centers its children within the available space.
 * Optionally constrains the maximum width and applies padding. Use it
 * for quick centering of content blocks, buttons, or text without needing
 * to set up flexbox or grid layouts.
 */
export const Center = React.forwardRef<HTMLDivElement, CenterProps>(
  ({ maxWidth, padding, andText = false, style, className, children, ...props }, ref) => {
    const paddingVars = buildSpacingVars('center-padding', padding);

    const centerClassName = cx(s.center, andText && s.centerAndText, className);

    const composedStyle: React.CSSProperties = {
      ...(maxWidth && { maxWidth }),
      ...paddingVars,
      ...style,
    };

    return (
      <div
        ref={ref}
        className={centerClassName}
        style={composedStyle}
        data-lyfeguard="Center"
        data-and-text={andText ? 'true' : undefined}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Center.displayName = 'Center';

