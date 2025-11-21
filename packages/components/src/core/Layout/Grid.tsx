import React from 'react';
import * as s from './Layout.css';
import { vars } from '../../globals.css';

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Number of equal-width columns in the grid. Defaults to 12. This value
   * should align with your layout tokens.
   */
  columns?: number;
  /**
   * Gap between grid items. Provide a spacing token (e.g. vars.spacing[4]) or
   * any valid CSS length. Defaults to the spacing-4 token (16px).
   */
  gap?: string;
}

/**
 * Grid provides a flexible CSS Grid container. Customize the number of
 * columns and the gap via props or inline styles. Each direct child of
 * Grid can specify how many columns it spans using the `GridItem` component.
 */
export const Grid: React.FC<GridProps> = ({ columns = 12, gap = vars.spacing[4], style, children, ...props }) => {
  const gridStyle: React.CSSProperties = {
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap,
    ...style,
  };
  return (
    <div className={s.grid} style={gridStyle} {...props}>
      {children}
    </div>
  );
};