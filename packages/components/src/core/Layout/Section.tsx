import React from 'react';
import { cx } from '../../helpers/cx';
import * as s from './Layout.css';
import { buildSpacingVars, ResponsiveSpacing } from './spacing';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Render the section as a semantic element. Defaults to `section`.
   * Use `div` if the sectioning is not semantically meaningful.
   */
  as?: keyof JSX.IntrinsicElements;
  /**
   * Vertical spacing applied to the section using spacing tokens. Supports
   * responsive values to adjust spacing at breakpoints. This creates visual
   * separation between sections.
   */
  spacing?: ResponsiveSpacing;
  /**
   * Padding applied to the section using spacing tokens. Supports responsive
   * values to adjust spacing at breakpoints.
   */
  padding?: ResponsiveSpacing;
  /**
   * If true, adds a visual divider at the bottom of the section using
   * theme-aware border tokens.
   */
  divider?: boolean;
}

/**
 * Section provides semantic sectioning with consistent spacing and optional
 * dividers. Use it to group related content and create visual hierarchy
 * throughout a page. The spacing prop controls vertical rhythm between
 * sections, while padding controls internal spacing.
 */
export const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    {
      as: Component = 'section',
      spacing,
      padding,
      divider = false,
      style,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const spacingVars = buildSpacingVars('section-spacing', spacing);
    const paddingVars = buildSpacingVars('section-padding', padding);

    const sectionClassName = cx(s.section, divider && s.sectionWithDivider, className);

    const composedStyle: React.CSSProperties = {
      ...spacingVars,
      ...paddingVars,
      ...style,
    };

    // Type assertion needed because Component is dynamic
    const ComponentWithRef = Component as React.ElementType;

    return (
      <ComponentWithRef
        ref={ref}
        className={sectionClassName}
        style={composedStyle}
        data-lyfeguard="Section"
        data-divider={divider ? 'true' : undefined}
        {...props}
      >
        {children}
      </ComponentWithRef>
    );
  },
);

Section.displayName = 'Section';

