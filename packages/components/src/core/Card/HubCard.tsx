import React from 'react';
import { Card, CardProps } from './Card';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import { Button } from '../Button/Button';
import { Stack } from '../Layout/Stack';
import * as s from './HubCard.css';

export interface HubCardProps extends Omit<CardProps, 'children'> {
  /**
   * Optional icon displayed at the top of the card
   */
  icon?: React.ReactNode;
  /**
   * Card title/name
   */
  title: string;
  /**
   * Optional description text
   */
  description?: string;
  /**
   * Optional progress value (0-100) to display a progress bar
   */
  progress?: number;
  /**
   * Optional label for the progress bar
   */
  progressLabel?: string;
  /**
   * Optional completed count (displayed prominently)
   */
  completed?: number;
  /**
   * Optional total count (displayed next to completed)
   */
  total?: number;
  /**
   * Optional text for the view info button. If provided, button is shown.
   */
  viewInfoText?: string;
  /**
   * Optional click handler for the view info button
   */
  onViewInfo?: () => void;
}

/**
 * HubCard is a specialized card component for displaying hub information
 * with optional icon, title, description, progress bar, and view info button.
 */
export const HubCard: React.FC<HubCardProps> = ({
  icon,
  title,
  description,
  progress,
  progressLabel,
  completed,
  total,
  viewInfoText,
  onViewInfo,
  clickable = false,
  ...cardProps
}) => {
  return (
    <Card clickable={clickable} variant="compact" {...cardProps}>
      <Stack gap="sm" className={s.content}>
        {/* Icon and Title */}
        {(icon || title) && (
          <div className={s.header}>
            {icon && <div className={s.icon}>{icon}</div>}
            {title && (
              <h3 className={s.title} style={{ margin: 0 }}>
                {title}
              </h3>
            )}
          </div>
        )}

        {/* Completed/Total Count */}
        {(completed !== undefined || total !== undefined) && (
          <div className={s.counts}>
            {completed !== undefined && (
              <span className={s.completed}>{completed}</span>
            )}
            {total !== undefined && (
              <span className={s.total}>/ {total}</span>
            )}
          </div>
        )}

        {/* Description */}
        {description && <p className={s.description}>{description}</p>}

        {/* Progress Bar */}
        {progress !== undefined && (
          <div className={s.progress}>
            <ProgressBar progress={progress} label={progressLabel} />
          </div>
        )}

        {/* View Info Button */}
        {viewInfoText && (
          <div className={s.actions}>
            <Button variant="ghost" size="sm" onClick={onViewInfo}>
              {viewInfoText} →
            </Button>
          </div>
        )}
      </Stack>
    </Card>
  );
};

HubCard.displayName = 'HubCard';

