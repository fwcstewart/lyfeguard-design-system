import React from 'react';
import { cx } from '../../helpers/cx';
import * as s from './Layout.css';
import { buildSpacingVars, defaultSpacing, ResponsiveSpacing } from './spacing';

export interface StackProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Render the stack as a semantic element. Defaults to `div`.
   */
  as?: keyof JSX.IntrinsicElements;
  /**
   * Direction of the stack. Use `row` for horizontal layouts and `column`
   * for vertical layouts.
   */
  direction?: 'row' | 'column';
  /**
   * Gap between items using semantic spacing tokens. Supports responsive
   * values keyed by breakpoint (sm, md, lg, xl, xxl, widescreen).
   */
  gap?: ResponsiveSpacing;
  /**
   * Padding applied to the stack container using spacing tokens. Supports
   * responsive values to adjust spacing at breakpoints.
   */
  padding?: ResponsiveSpacing;
  /**
   * Margin applied to the stack container using spacing tokens. Supports
   * responsive values to adjust spacing at breakpoints.
   */
  margin?: ResponsiveSpacing;
  /**
   * Display dividers between items. Divider colours use theme-aware tokens
   * with dark mode overrides.
   */
  dividers?: boolean;
  /**
   * Control horizontal alignment of children.
   */
  align?: React.CSSProperties['alignItems'];
  /**
   * Control distribution of available space along the main axis.
   */
  justify?: React.CSSProperties['justifyContent'];
  /**
   * Allow items to wrap when using a row direction.
   */
  wrap?: React.CSSProperties['flexWrap'];
}

export const Stack = React.forwardRef<HTMLElement, StackProps>(
  (
    {
      as: Component = 'div',
      direction = 'column',
      gap = defaultSpacing,
      padding,
      margin,
      dividers = false,
      align,
      justify,
      wrap,
      style,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const gapVars = buildSpacingVars('stack-gap', gap, defaultSpacing);
    const paddingVars = buildSpacingVars('stack-padding', padding);
    const marginVars = buildSpacingVars('stack-margin', margin);

    const dividerClass =
      direction === 'row' ? s.stackWithRowDividers : s.stackWithColumnDividers;

    const shouldRenderDividers = dividers && !(direction === 'row' && wrap && wrap !== 'nowrap');

    const stackClassName = cx(
      s.stack,
      direction === 'row' && s.stackRow,
      shouldRenderDividers && dividerClass,
      className,
    );

    const composedStyle: React.CSSProperties = {
      alignItems: align,
      justifyContent: justify,
      flexWrap: wrap,
      ...gapVars,
      ...paddingVars,
      ...marginVars,
      ...style,
    };

    // Type assertion needed because Component is dynamic
    const ComponentWithRef = Component as React.ElementType;
    
    return (
      <ComponentWithRef ref={ref} className={stackClassName} style={composedStyle} data-lyfeguard="Stack" {...props}>
        {children}
      </ComponentWithRef>
    );
  },
);

Stack.displayName = 'Stack';
