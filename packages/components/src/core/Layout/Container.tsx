import React from 'react';
import * as s from './Layout.css';
import { vars } from '../../globals.css';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Override the maximum width of the container. The default uses the
   * `layout.containerMaxWidth` token.
   */
  maxWidth?: string;
  /**
   * If true, the container spans the full width of its parent without a
   * maximum width constraint.
   */
  fluid?: boolean;
}

/**
 * Container centers its children and constrains the width of content to
 * improve readability on wide screens. Use the `fluid` prop to remove the
 * max-width constraint when needed (for example, full-width backgrounds).
 */
export const Container: React.FC<ContainerProps> = ({ maxWidth, fluid = false, style, children, ...props }) => {
  const computedStyle: React.CSSProperties = {
    ...(!fluid && {
      maxWidth: maxWidth || vars.layout.containerMaxWidth,
    }),
    ...style,
  };
  return (
    <div className={s.container} style={computedStyle} {...props}>
      {children}
    </div>
  );
};