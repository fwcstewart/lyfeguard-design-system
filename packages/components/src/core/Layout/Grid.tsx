import React from 'react';
import * as s from './Layout.css';
import { buildSpacingVars, defaultSpacing, ResponsiveSpacing } from './spacing';
import { cx } from '../../helpers/cx';

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Number of equal-width columns in the grid. Defaults to 12. This value
   * should align with your layout tokens.
   */
  columns?: number;
  /**
   * Gap between grid items. Provide a semantic spacing token (e.g. "md")
   * to ensure consistent rhythm across layouts. The gap supports responsive
   * values keyed by breakpoint (sm, md, lg, xl, xxl, widescreen).
   */
  gap?: ResponsiveSpacing;
}

/**
 * Grid provides a flexible CSS Grid container. Customize the number of
 * columns and the gap via props or inline styles. Each direct child of
 * Grid can specify how many columns it spans using the `GridItem` component.
 */
export const Grid: React.FC<GridProps> = ({
  columns = 12,
  gap = defaultSpacing,
  style,
  className,
  children,
  ...props
}) => {
  const spacingVars = buildSpacingVars('grid-gap', gap, defaultSpacing);
  const gridStyle: React.CSSProperties = {
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    ...spacingVars,
    ...style,
  };

  return (
    <div className={cx(s.grid, className)} style={gridStyle} data-lyfeguard="Grid" {...props}>
      {children}
    </div>
  );
};
