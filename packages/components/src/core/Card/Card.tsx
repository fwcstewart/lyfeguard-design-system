import React from 'react';
import * as s from './Card.css';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Optional header content rendered at the top of the card
   */
  header?: React.ReactNode;
  /**
   * Optional footer content rendered at the bottom of the card
   */
  footer?: React.ReactNode;
  /**
   * If true, adds hover styles and cursor pointer. Use with onClick for interactive cards.
   */
  clickable?: boolean;
  /**
   * Layout variant for the card. Defaults to `default`.
   * - `default`: Standard card with normal padding
   * - `compact`: Reduced padding suitable for grid layouts and account items
   */
  variant?: 'default' | 'compact';
}

/**
 * Card component for grouping related content.
 *
 * Supports optional header and footer sections, and can be made clickable
 * for interactive use cases.
 */
export const Card: React.FC<CardProps> = ({
  header,
  footer,
  clickable = false,
  variant = 'default',
  children,
  className,
  onKeyDown,
  onClick,
  ...props
}) => {
  const isInteractive = clickable || Boolean(onClick);
  const variantClass = variant === 'compact' ? s.compact : '';
  const cardClassName = `${s.card} ${variantClass} ${clickable ? s.clickable : ''} ${className || ''}`.trim();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (isInteractive && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      onClick?.(event as unknown as React.MouseEvent<HTMLDivElement>);
    }

    onKeyDown?.(event);
  };

  return (
    <div
      className={cardClassName.trim()}
      data-lyfeguard="Card"
      {...props}
      role={isInteractive ? 'button' : props.role}
      tabIndex={isInteractive ? props.tabIndex ?? 0 : props.tabIndex}
      onKeyDown={handleKeyDown}
      onClick={onClick}
    >
      {header && <div className={s.header}>{header}</div>}
      <div className={s.body}>{children}</div>
      {footer && <div className={s.footer}>{footer}</div>}
    </div>
  );
};
