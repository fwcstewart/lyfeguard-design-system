import React from 'react';
import * as styles from './Button.css';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual style of the button
   */
  variant?: ButtonVariant;
  /**
   * Optional icon to render on the left side
   */
  iconLeft?: React.ReactNode;
  /**
   * Optional icon to render on the right side
   */
  iconRight?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = 'primary', children, iconLeft, iconRight, ...props },
    ref
  ) => {
    const className =
      variant === 'secondary'
        ? styles.secondary
        : variant === 'tertiary'
        ? styles.tertiary
        : styles.primary;

    return (
      <button ref={ref} className={className} {...props}>
        {iconLeft && <span>{iconLeft}</span>}
        {children}
        {iconRight && <span>{iconRight}</span>}
      </button>
    );
  }
);
Button.displayName = 'Button';
