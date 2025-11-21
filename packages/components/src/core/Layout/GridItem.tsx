import React from 'react';

export interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * How many columns this item spans. Must be between 1 and the total
   * number of columns defined on the parent Grid. Defaults to 1.
   */
  span?: number;
}

/**
 * GridItem defines how many columns a child of Grid should span. It simply
 * applies a `gridColumn` style so you can nest complex layouts without
 * needing additional wrapper styles.
 */
export const GridItem: React.FC<GridItemProps> = ({ span = 1, style, children, ...props }) => {
  const itemStyle: React.CSSProperties = {
    gridColumn: `span ${span} / span ${span}`,
    ...style,
  };
  return (
    <div style={itemStyle} {...props}>
      {children}
    </div>
  );
};