import React from 'react';
import * as styles from './Button.css';
import { Spinner } from '../Spinner/Spinner';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'dark' | 'danger' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonState = 'hover' | 'focus' | 'active' | 'disabled' | 'loading';

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
  /**
   * Optional state attribute to surface button pseudo states in stories or testing
   */
  'data-state'?: ButtonState;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      children,
      iconLeft,
      iconRight,
      isLoading = false,
      disabled,
      'data-state': dataState,
      ...props
    },
    ref
  ) => {
    const variantClass =
      variant === 'secondary'
        ? styles.secondary
        : variant === 'tertiary'
        ? styles.tertiary
        : variant === 'dark'
        ? styles.dark
        : variant === 'danger'
        ? styles.danger
        : variant === 'ghost'
        ? styles.ghost
        : styles.primary;

    const sizeClass =
      size === 'sm'
        ? styles.small
        : size === 'lg'
        ? styles.large
        : styles.medium;

    const className = `${variantClass} ${sizeClass}`;
    const isDisabled = disabled || isLoading;
    const resolvedState = isDisabled ? (isLoading ? 'loading' : 'disabled') : dataState;

    return (
      <button
        ref={ref}
        className={className}
        data-lyfeguard="Button"
        data-variant={variant}
        data-size={size}
        data-state={resolvedState}
        disabled={isDisabled}
        {...props}
      >
        {isLoading ? (
          <>
            <Spinner size={size} />
            {children && <span style={{ opacity: 0 }}>{children}</span>}
          </>
        ) : (
          <>
            {iconLeft && <span style={{ display: 'inline-flex', alignItems: 'center', lineHeight: 1 }}>{iconLeft}</span>}
            {children}
            {iconRight && <span style={{ display: 'inline-flex', alignItems: 'center', lineHeight: 1 }}>{iconRight}</span>}
          </>
        )}
      </button>
    );
  }
);
Button.displayName = 'Button';
