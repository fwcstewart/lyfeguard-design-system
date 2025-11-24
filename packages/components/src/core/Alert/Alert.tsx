import React from 'react';
import * as s from './Alert.css';
import type { StatusVariant } from '../statusTokens';

export type AlertVariant = StatusVariant;

export interface AlertProps {
  /**
   * The variant of the alert, affecting its colour scheme.
   */
  variant?: AlertVariant;
  /**
   * Optional title rendered in bold at the start of the alert.
   */
  title?: string;
  /**
   * Optional leading icon rendered before the alert content.
   * Icons should inherit `currentColor` to match the variant colour.
   */
  icon?: React.ReactNode;
  /**
   * The main content of the alert. Can be any React node.
   */
  children: React.ReactNode;
  /**
   * Controls how assertively screen readers announce the alert. Defaults to `assertive`.
   */
  ariaLive?: 'off' | 'polite' | 'assertive';
}

/**
 * Simple alert banner used to communicate status messages to the user. The
 * appearance is determined by the variant prop.
 */
export const Alert: React.FC<AlertProps> = ({
  variant = 'info',
  title,
  icon,
  children,
  ariaLive = 'assertive',
}) => {
  const variantClass = s.variants[variant];
  return (
    <div
      className={[s.base, variantClass].join(' ')}
      role="alert"
      aria-live={ariaLive}
      data-lyfeguard="Alert"
    >
      {icon && (
        <div className={s.icon} aria-hidden>
          {icon}
        </div>
      )}
      <div className={s.content}>
        {title && <div className={s.title}>{title}</div>}
        <div className={s.message}>{children}</div>
      </div>
    </div>
  );
};

Alert.displayName = 'Alert';