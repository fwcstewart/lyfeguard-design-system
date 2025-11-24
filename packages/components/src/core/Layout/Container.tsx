import React from 'react';
import * as s from './Layout.css';
import { vars } from '../../globals.css';
import { ResponsiveValue } from './spacing';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Override the maximum width of the container. The default uses the
   * `layout.containerMaxWidth` token. Supports responsive values keyed by
   * breakpoint (sm, md, lg, xl, xxl, widescreen).
   */
  maxWidth?: string | ResponsiveValue<string>;
  /**
   * If true, the container spans the full width of its parent without a
   * maximum width constraint.
   */
  fluid?: boolean;
}

/**
 * Container centers its children and constrains the width of content to
 * improve readability on wide screens. Responsive max-width constraints
 * are applied at sm, md, and xl breakpoints by default. Use the `fluid`
 * prop to remove the max-width constraint when needed (for example,
 * full-width backgrounds).
 */
export const Container: React.FC<ContainerProps> = ({ maxWidth, fluid = false, style, children, ...props }) => {
  const baseMaxWidth = typeof maxWidth === 'string' ? maxWidth : maxWidth?.base || vars.layout.containerMaxWidth;
  
  const computedStyle: React.CSSProperties = {
    ...(!fluid && {
      maxWidth: baseMaxWidth,
    }),
    ...(typeof maxWidth === 'object' && !fluid && {
      '--container-max-width-sm': maxWidth.sm || baseMaxWidth,
      '--container-max-width-md': maxWidth.md || maxWidth.sm || baseMaxWidth,
      '--container-max-width-lg': maxWidth.lg || maxWidth.md || maxWidth.sm || baseMaxWidth,
      '--container-max-width-xl': maxWidth.xl || maxWidth.lg || maxWidth.md || maxWidth.sm || baseMaxWidth,
      '--container-max-width-xxl': maxWidth.xxl || maxWidth.xl || maxWidth.lg || maxWidth.md || maxWidth.sm || baseMaxWidth,
      '--container-max-width-widescreen': maxWidth.widescreen || maxWidth.xxl || maxWidth.xl || maxWidth.lg || maxWidth.md || maxWidth.sm || baseMaxWidth,
    } as React.CSSProperties),
    ...style,
  };

  const containerClassName = fluid
    ? s.container
    : typeof maxWidth === 'object' && maxWidth
    ? s.containerResponsive
    : s.container;

  return (
    <div
      className={containerClassName}
      style={computedStyle}
      data-lyfeguard="Container"
      data-fluid={fluid ? 'true' : undefined}
      {...props}
    >
      {children}
    </div>
  );
};