import * as React from 'react';

/**
 * A simple wrapper component that renders whatever HTML element you specify via the
 * `as` prop. This is useful for building more complex layout primitives while
 * preserving semantic markup.  The `style` prop allows inline styling for one‑off
 * layout tweaks; in most cases you should rely on design tokens and className
 * utilities instead.
 */
export type BoxProps<E extends React.ElementType = 'div'> = {
  /**
   * The HTML element or React component to render. Defaults to `div`.
   */
  as?: E;
  /**
   * Inline style overrides. Use sparingly; prefer design tokens and classes.
   */
  style?: React.CSSProperties;
  /**
   * Additional class names to apply to the element.
   */
  className?: string;
} & Omit<React.ComponentPropsWithoutRef<E>, 'as' | 'style' | 'className'>;

export function Box<E extends React.ElementType = 'div'>({
  as,
  style,
  className,
  children,
  ...rest
}: BoxProps<E>) {
  const Component = as || 'div';
  return (
    <Component style={style} className={className} {...(rest as any)}>
      {children}
    </Component>
  );
}