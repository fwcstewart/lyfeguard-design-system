import React from 'react';
import { Spinner } from '../Spinner/Spinner';
import * as styles from './Button.css';
import { BUTTON_SIZES, BUTTON_VARIANTS, ButtonSize, ButtonVariant } from './constants';

export type ButtonState = 'hover' | 'focus' | 'active' | 'disabled' | 'loading';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style of the button */
  variant?: ButtonVariant;
  /** Size of the button */
  size?: ButtonSize;
  /** Optional icon to render on the left side */
  iconLeft?: React.ReactNode;
  /** Optional icon to render on the right side */
  iconRight?: React.ReactNode;
  /** Shows a loading spinner and disables the button */
  isLoading?: boolean;
  /** Optional state attribute to surface button pseudo states in stories or testing */
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
    const sizeTokens = BUTTON_SIZES[size];
    const variantTokens = BUTTON_VARIANTS[variant];
    const className = `${styles.base} ${styles.variants[variant]} ${styles.sizes[size]}`;
    const isDisabled = disabled || isLoading;
    const resolvedState = isDisabled ? (isLoading ? 'loading' : 'disabled') : dataState;

    const styleVars: React.CSSProperties = {
      ['--button-padding-x' as string]: sizeTokens.paddingX,
      ['--button-padding-y' as string]: sizeTokens.paddingY,
      ['--button-min-height' as string]: sizeTokens.minHeight,
      ['--button-gap' as string]: sizeTokens.gap,
      ['--button-font-size' as string]: sizeTokens.fontSize,
      ['--button-line-height' as string]: sizeTokens.lineHeight,
      ['--button-background' as string]: variantTokens.background,
      ['--button-color' as string]: variantTokens.color,
      ['--button-border' as string]: variantTokens.border,
      ['--button-shadow' as string]: variantTokens.shadow,
      ['--button-hover-background' as string]: variantTokens.hover.background,
      ['--button-hover-border' as string]: variantTokens.hover.border,
      ['--button-hover-shadow' as string]: variantTokens.hover.shadow,
      ['--button-active-background' as string]: variantTokens.active.background,
      ['--button-active-border' as string]: variantTokens.active.border,
      ['--button-active-shadow' as string]: variantTokens.active.shadow,
      ['--button-disabled-background' as string]: variantTokens.disabled.background,
      ['--button-disabled-border' as string]: variantTokens.disabled.border,
      ['--button-disabled-color' as string]: variantTokens.disabled.color,
      ['--button-focus-shadow' as string]: variantTokens.focusShadow,
    };

    return (
      <button
        ref={ref}
        className={className}
        style={styleVars}
        data-lyfeguard="Button"
        data-variant={variant}
        data-size={size}
        data-state={resolvedState}
        disabled={isDisabled}
        aria-disabled={isDisabled || undefined}
        {...props}
      >
        <span className={styles.content}>
          {isLoading ? (
            <>
              <Spinner size={size} />
              {children && <span className={styles.loadingLabel}>{children}</span>}
            </>
          ) : (
            <>
              {iconLeft && <span className={styles.icon}>{iconLeft}</span>}
              {children}
              {iconRight && <span className={styles.icon}>{iconRight}</span>}
            </>
          )}
        </span>
      </button>
    );
  }
);
Button.displayName = 'Button';
