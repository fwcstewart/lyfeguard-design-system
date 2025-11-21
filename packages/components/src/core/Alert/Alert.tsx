import React from 'react';
import * as s from './Alert.css';

export type AlertVariant = 'info' | 'success' | 'warning' | 'error';

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
   * The main content of the alert. Can be any React node.
   */
  children: React.ReactNode;
}

/**
 * Simple alert banner used to communicate status messages to the user. The
 * appearance is determined by the variant prop.
 */
export const Alert: React.FC<AlertProps> = ({ variant = 'info', title, children }) => {
  const variantClass = s.variants[variant];
  return (
    <div className={[s.base, variantClass].join(' ')} role="alert" data-lyfeguard="Alert">
      <div>
        {title && <div className={s.title}>{title}</div>}
        <div className={s.message}>{children}</div>
      </div>
    </div>
  );
};

Alert.displayName = 'Alert';