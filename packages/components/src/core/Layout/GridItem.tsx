import React from 'react';
import { ResponsiveValue } from './spacing';

export interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * How many columns this item spans. Must be between 1 and the total
   * number of columns defined on the parent Grid. Defaults to 1.
   * Supports responsive values keyed by breakpoint (sm, md, lg, xl, xxl, widescreen).
   */
  span?: number | ResponsiveValue<number>;
}

/**
 * GridItem defines how many columns a child of Grid should span. It applies
 * responsive `gridColumn` styles so you can nest complex layouts without
 * needing additional wrapper styles. Use responsive span values to adapt
 * column spans at different breakpoints.
 */
export const GridItem: React.FC<GridItemProps> = ({ span = 1, style, children, ...props }) => {
  const baseSpan = typeof span === 'number' ? span : span.base || 1;
  
  const itemStyle: React.CSSProperties = {
    gridColumn: `span ${baseSpan} / span ${baseSpan}`,
    ...(typeof span === 'object' && {
      '--grid-item-span-sm': span.sm || baseSpan,
      '--grid-item-span-md': span.md || span.sm || baseSpan,
      '--grid-item-span-lg': span.lg || span.md || span.sm || baseSpan,
      '--grid-item-span-xl': span.xl || span.lg || span.md || span.sm || baseSpan,
      '--grid-item-span-xxl': span.xxl || span.xl || span.lg || span.md || span.sm || baseSpan,
      '--grid-item-span-widescreen': span.widescreen || span.xxl || span.xl || span.lg || span.md || span.sm || baseSpan,
    } as React.CSSProperties),
    ...style,
  };

  const className = typeof span === 'object' ? 'grid-item-responsive' : undefined;

  return (
    <div
      className={className}
      style={itemStyle}
      data-lyfeguard="GridItem"
      data-span={baseSpan}
      {...props}
    >
      {children}
    </div>
  );
};