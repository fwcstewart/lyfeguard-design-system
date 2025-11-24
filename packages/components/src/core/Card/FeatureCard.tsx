import React from 'react';
import { Card, CardProps } from './Card';
import { Button } from '../Button/Button';
import { Stack } from '../Layout/Stack';
import * as s from './FeatureCard.css';

export interface FeatureCardProps extends Omit<CardProps, 'children'> {
  /**
   * Optional icon displayed at the top of the card.
   */
  icon?: React.ReactNode;
  /**
   * Title of the card.
   */
  title: string;
  /**
   * Optional description text displayed below the title.
   */
  description?: string;
  /**
   * Optional additional content (e.g., count, custom elements).
   */
  children?: React.ReactNode;
  /**
   * Optional primary action button configuration.
   */
  primaryAction?: {
    text: string;
    href?: string;
    onClick?: () => void;
    icon?: React.ReactNode;
  };
  /**
   * Optional secondary action button configuration.
   */
  secondaryAction?: {
    text: string;
    href?: string;
    onClick?: () => void;
    icon?: React.ReactNode;
  };
}

/**
 * FeatureCard is a flexible card component for displaying features, links, or information
 * with optional icon, title, description, and action buttons. Use this for useful links,
 * feature highlights, or any content that needs a structured card layout.
 */
export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  children,
  primaryAction,
  secondaryAction,
  variant = 'compact',
  ...cardProps
}) => {
  return (
    <Card variant={variant} className={s.card} data-lyfeguard="FeatureCard" {...cardProps}>
      <Stack gap="sm">
        <div className={s.header}>
          {icon && <div className={s.icon}>{icon}</div>}
          <div className={s.headerContent}>
            <h3 className={s.title}>{title}</h3>
            {primaryAction && (
              primaryAction.href ? (
                <a
                  href={primaryAction.href}
                  onClick={primaryAction.onClick}
                  className={s.actionButton}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  {primaryAction.icon || (
                    <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>
                      arrow_forward_ios
                    </span>
                  )}
                </a>
              ) : (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={primaryAction.onClick}
                  className={s.actionButton}
                >
                  {primaryAction.icon || (
                    <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>
                      arrow_forward_ios
                    </span>
                  )}
                </Button>
              )
            )}
          </div>
        </div>
        {description && <p className={s.description}>{description}</p>}
        {children && <div className={s.content}>{children}</div>}
        {secondaryAction && (
          <div className={s.secondaryAction}>
            {secondaryAction.href ? (
              <a
                href={secondaryAction.href}
                onClick={secondaryAction.onClick}
                className={s.secondaryActionLink}
              >
                {secondaryAction.icon || (
                  <span className="material-symbols-outlined" style={{ fontSize: '1.25rem' }}>
                    add
                  </span>
                )}
                <span>{secondaryAction.text}</span>
              </a>
            ) : (
              <Button
                variant="secondary"
                size="sm"
                onClick={secondaryAction.onClick}
              >
                {secondaryAction.icon || (
                  <span className="material-symbols-outlined" style={{ fontSize: '1.25rem' }}>
                    add
                  </span>
                )}
                <span>{secondaryAction.text}</span>
              </Button>
            )}
          </div>
        )}
      </Stack>
    </Card>
  );
};

FeatureCard.displayName = 'FeatureCard';

