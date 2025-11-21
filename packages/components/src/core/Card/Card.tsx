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
  children,
  className,
  ...props
}) => {
  const cardClassName = clickable
    ? `${s.card} ${s.clickable} ${className || ''}`
    : `${s.card} ${className || ''}`;

  return (
    <div className={cardClassName.trim()} data-lyfeguard="Card" {...props}>
      {header && <div className={s.header}>{header}</div>}
      <div className={s.body}>{children}</div>
      {footer && <div className={s.footer}>{footer}</div>}
    </div>
  );
};
