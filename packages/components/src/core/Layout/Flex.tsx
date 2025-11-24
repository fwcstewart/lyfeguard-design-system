import React from 'react';
import { cx } from '../../helpers/cx';
import * as s from './Layout.css';
import { buildSpacingVars, ResponsiveSpacing } from './spacing';

export interface FlexProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Render the flex container as a semantic element. Defaults to `div`.
   */
  as?: keyof JSX.IntrinsicElements;
  /**
   * Direction of the flex container. Defaults to `row`.
   */
  direction?: React.CSSProperties['flexDirection'];
  /**
   * Gap between flex items using semantic spacing tokens. Supports responsive
   * values keyed by breakpoint (sm, md, lg, xl, xxl, widescreen).
   */
  gap?: ResponsiveSpacing;
  /**
   * Padding applied to the flex container using spacing tokens. Supports
   * responsive values to adjust spacing at breakpoints.
   */
  padding?: ResponsiveSpacing;
  /**
   * Margin applied to the flex container using spacing tokens. Supports
   * responsive values to adjust spacing at breakpoints.
   */
  margin?: ResponsiveSpacing;
  /**
   * Control alignment of items along the cross axis.
   */
  align?: React.CSSProperties['alignItems'];
  /**
   * Control alignment of items along the main axis.
   */
  justify?: React.CSSProperties['justifyContent'];
  /**
   * Control how items wrap when they exceed the container width.
   */
  wrap?: React.CSSProperties['flexWrap'];
  /**
   * Control how items grow to fill available space.
   */
  grow?: React.CSSProperties['flexGrow'];
  /**
   * Control how items shrink when space is limited.
   */
  shrink?: React.CSSProperties['flexShrink'];
  /**
   * Set the initial size of flex items.
   */
  basis?: React.CSSProperties['flexBasis'];
}

/**
 * Flex provides an explicit flexbox container with comprehensive control over
 * flex properties. Use it when you need fine-grained control over flexbox
 * behavior beyond what Stack offers. Flex is more explicit and allows setting
 * grow, shrink, and basis properties directly.
 */
export const Flex = React.forwardRef<HTMLElement, FlexProps>(
  (
    {
      as: Component = 'div',
      direction = 'row',
      gap,
      padding,
      margin,
      align,
      justify,
      wrap,
      grow,
      shrink,
      basis,
      style,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const gapVars = buildSpacingVars('flex-gap', gap);
    const paddingVars = buildSpacingVars('flex-padding', padding);
    const marginVars = buildSpacingVars('flex-margin', margin);

    const flexClassName = cx(s.flex, className);

    const composedStyle: React.CSSProperties = {
      flexDirection: direction,
      alignItems: align,
      justifyContent: justify,
      flexWrap: wrap,
      flexGrow: grow,
      flexShrink: shrink,
      flexBasis: basis,
      ...gapVars,
      ...paddingVars,
      ...marginVars,
      ...style,
    };

    // Type assertion needed because Component is dynamic
    const ComponentWithRef = Component as React.ElementType;

    return (
      <ComponentWithRef
        ref={ref}
        className={flexClassName}
        style={composedStyle}
        data-lyfeguard="Flex"
        data-direction={direction}
        {...props}
      >
        {children}
      </ComponentWithRef>
    );
  },
);

Flex.displayName = 'Flex';

