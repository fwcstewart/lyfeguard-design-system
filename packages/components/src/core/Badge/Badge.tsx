import React from 'react';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { VisuallyHidden } from '../Accessibility/VisuallyHidden';
import * as s from './Badge.css';

type BadgeVariant = keyof typeof s.status;
type BadgeAppearance = keyof typeof s.appearance;

export interface BadgeProps {
  /**
   * The badge variant which controls the colour scheme
   */
  variant?: BadgeVariant;
  /**
   * Visual style of the badge surface
   */
  appearance?: BadgeAppearance;
  /**
   * Additional screen reader text to give more context than the visible label
   */
  srText?: string;
  /**
   * The content displayed inside the badge
   */
  children: React.ReactNode;
}

/**
 * Badge component
 *
 * Displays a small, coloured pill for status indicators, tags and metadata.
 * Provides clear visual hierarchy with refined styling and smooth transitions.
 */
export const Badge: React.FC<BadgeProps> = ({
  variant = 'primary',
  appearance = 'pill',
  srText,
  children,
}) => {
  const tokenSet = s.badgeStatusTokens[variant];

  const customProperties = assignInlineVars({
    [s.badgeVars.surface]: tokenSet.surface,
    [s.badgeVars.text]: tokenSet.text,
    [s.badgeVars.outline]: tokenSet.outline,
    [s.badgeVars.solid]: tokenSet.solid,
    [s.badgeVars.onSolid]: tokenSet.onSolid,
    [s.badgeVars.darkText]: tokenSet.darkText,
    [s.badgeVars.darkOutline]: tokenSet.darkOutline,
  });

  return (
    <span
      className={`${s.status[variant]} ${s.appearance[appearance]}`}
      data-lyfeguard="Badge"
      style={customProperties}
    >
      {srText ? <VisuallyHidden>{srText}</VisuallyHidden> : null}
      {children}
    </span>
  );
};