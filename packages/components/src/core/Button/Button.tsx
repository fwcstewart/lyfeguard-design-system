import React from 'react';
import * as styles from './Button.css';
import { Spinner } from '../Spinner/Spinner';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual style of the button
   */
  variant?: ButtonVariant;
  /**
   * Size of the button
   */
  size?: ButtonSize;
  /**
   * Optional icon to render on the left side
   */
  iconLeft?: React.ReactNode;
  /**
   * Optional icon to render on the right side
   */
  iconRight?: React.ReactNode;
  /**
   * Shows a loading spinner and disables the button
   */
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = 'primary', size = 'md', children, iconLeft, iconRight, isLoading = false, disabled, ...props },
    ref
  ) => {
    const variantClass =
      variant === 'secondary'
        ? styles.secondary
        : variant === 'tertiary'
        ? styles.tertiary
        : styles.primary;

    const sizeClass =
      size === 'sm'
        ? styles.small
        : size === 'lg'
        ? styles.large
        : styles.medium;

    const className = `${variantClass} ${sizeClass}`;
    const isDisabled = disabled || isLoading;

    return (
      <button
        ref={ref}
        className={className}
        data-lyfeguard="Button"
        disabled={isDisabled}
        {...props}
      >
        {isLoading ? (
          <>
            <Spinner size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />
            {children && <span style={{ opacity: 0 }}>{children}</span>}
          </>
        ) : (
          <>
            {iconLeft && <span>{iconLeft}</span>}
            {children}
            {iconRight && <span>{iconRight}</span>}
          </>
        )}
      </button>
    );
  }
);
Button.displayName = 'Button';
