import React from 'react';
import * as s from './Card.css';
import { CARD_TONES, CardTone } from './constants';

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
  /**
   * Visual tone for the card shell. Defaults to `neutral`.
   */
  tone?: CardTone;
}

const CARD_SECTION = Symbol('CardSection');

interface CardSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: keyof JSX.IntrinsicElements;
}

const createSection = (className: string, displayName: string) => {
  const Section = React.forwardRef<HTMLElement, CardSectionProps>(({ children, as: Component = 'div', ...props }, ref) => {
    // Type assertion needed because Component is dynamic
    const ComponentWithRef = Component as React.ElementType;
    return (
      <ComponentWithRef ref={ref} className={className} data-lyfeguard={`Card.${displayName}`} {...props}>
        {children}
      </ComponentWithRef>
    );
  });
  Section.displayName = `Card${displayName}`;
  (Section as unknown as { [CARD_SECTION]: boolean })[CARD_SECTION] = true;
  return Section;
};

export const CardHeader = createSection(s.header, 'Header');
export const CardContent = createSection(s.body, 'Content');
export const CardFooter = createSection(s.footer, 'Footer');

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
  tone = 'neutral',
  children,
  className,
  onKeyDown,
  onClick,
  ...props
}) => {
  const toneClass = s.tone[tone] ?? s.tone.neutral;
  const isInteractive = clickable || Boolean(onClick);
  const variantClass = variant === 'compact' ? s.compact : '';
  const cardClassName = `${s.card} ${toneClass} ${variantClass} ${clickable ? s.clickable : ''} ${className || ''}`.trim();

  const childArray = React.Children.toArray(children);
  const hasStructuredChildren = childArray.some(
    (child) => React.isValidElement(child) && Boolean((child.type as { [CARD_SECTION]?: boolean })?.[CARD_SECTION])
  );

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (isInteractive && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      onClick?.(event as unknown as React.MouseEvent<HTMLDivElement>);
    }

    onKeyDown?.(event);
  };

  const sections = hasStructuredChildren
    ? [
        header ? <CardHeader key="header-slot">{header}</CardHeader> : null,
        ...childArray,
        footer ? <CardFooter key="footer-slot">{footer}</CardFooter> : null,
      ].filter(Boolean)
    : [
        header ? <CardHeader key="header">{header}</CardHeader> : null,
        <CardContent key="content">{children}</CardContent>,
        footer ? <CardFooter key="footer">{footer}</CardFooter> : null,
      ].filter(Boolean);

  return (
    <div
      className={cardClassName.trim()}
      data-lyfeguard="Card"
      data-tone={tone}
      {...props}
      role={isInteractive ? 'button' : props.role}
      tabIndex={isInteractive ? props.tabIndex ?? 0 : props.tabIndex}
      onKeyDown={handleKeyDown}
      onClick={onClick}
    >
      {sections}
    </div>
  );
};
