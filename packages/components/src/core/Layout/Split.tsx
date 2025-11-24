import React from 'react';
import { cx } from '../../helpers/cx';
import * as s from './Layout.css';
import { buildSpacingVars, ResponsiveSpacing } from './spacing';

export interface SplitProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Content to render in the first (left/top) section of the split.
   */
  start: React.ReactNode;
  /**
   * Content to render in the second (right/bottom) section of the split.
   */
  end: React.ReactNode;
  /**
   * Direction of the split. Use `row` for side-by-side (default) or `column`
   * for stacked layout.
   */
  direction?: 'row' | 'column';
  /**
   * Fraction of space allocated to the start section. Must be between 0 and 1.
   * Defaults to 0.5 (equal split). The end section receives (1 - fraction).
   */
  fraction?: number;
  /**
   * Gap between the two sections using semantic spacing tokens. Supports
   * responsive values keyed by breakpoint (sm, md, lg, xl, xxl, widescreen).
   */
  gap?: ResponsiveSpacing;
  /**
   * Breakpoint at which the split switches from row to column layout on
   * smaller screens. If not provided, the split maintains its direction.
   */
  collapseAt?: 'sm' | 'md' | 'lg' | 'xl';
  /**
   * Minimum width for the start section before it collapses. Only applies
   * when collapseAt is set.
   */
  minStartWidth?: string;
  /**
   * Minimum width for the end section before it collapses. Only applies
   * when collapseAt is set.
   */
  minEndWidth?: string;
}

/**
 * Split divides space between two content areas. It's ideal for layouts like
 * sidebar/content, form labels/inputs, or any two-column/two-row arrangement.
 * The fraction prop controls how space is divided, and collapseAt enables
 * responsive stacking on smaller screens.
 */
export const Split = React.forwardRef<HTMLDivElement, SplitProps>(
  (
    {
      start,
      end,
      direction = 'row',
      fraction = 0.5,
      gap,
      collapseAt,
      minStartWidth,
      minEndWidth,
      style,
      className,
      ...props
    },
    ref,
  ) => {
    const gapVars = buildSpacingVars('split-gap', gap);
    const clampedFraction = Math.max(0, Math.min(1, fraction));

    const collapseClassMap: Record<string, string> = {
      sm: s.splitCollapseSm,
      md: s.splitCollapseMd,
      lg: s.splitCollapseLg,
      xl: s.splitCollapseXl,
    };

    const splitClassName = cx(
      s.split,
      direction === 'column' && s.splitColumn,
      collapseAt && collapseClassMap[collapseAt],
      className,
    );

    const composedStyle: React.CSSProperties = {
      ...gapVars,
      ...(minStartWidth && { '--split-min-start-width': minStartWidth }),
      ...(minEndWidth && { '--split-min-end-width': minEndWidth }),
      ...style,
    };

    const startStyle: React.CSSProperties = {
      flex: `${clampedFraction} 1 0%`,
      ...(minStartWidth && { minWidth: minStartWidth }),
    };

    const endStyle: React.CSSProperties = {
      flex: `${1 - clampedFraction} 1 0%`,
      ...(minEndWidth && { minWidth: minEndWidth }),
    };

    return (
      <div
        ref={ref}
        className={splitClassName}
        style={composedStyle}
        data-lyfeguard="Split"
        data-direction={direction}
        data-fraction={clampedFraction}
        data-collapse-at={collapseAt}
        {...props}
      >
        <div className={s.splitStart} style={startStyle} data-lyfeguard="Split.Start">
          {start}
        </div>
        <div className={s.splitEnd} style={endStyle} data-lyfeguard="Split.End">
          {end}
        </div>
      </div>
    );
  },
);

Split.displayName = 'Split';

