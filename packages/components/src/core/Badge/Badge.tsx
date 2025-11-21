import React from 'react';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { vars } from '../../globals.css';
import { VisuallyHidden } from '../Accessibility/VisuallyHidden';
import * as s from './Badge.css';

const STATUS_TOKENS = {
  primary: {
    surface: vars.color.brand500_20,
    text: vars.color.brand800,
    outline: vars.color.brand500_30,
    solid: vars.color.brand500,
    onSolid: vars.color.neutral0,
    darkText: vars.color.brand500,
    darkOutline: vars.color.brand500_40,
  },
  success: {
    surface: vars.color.success500_15,
    text: vars.color.success600,
    outline: vars.color.success500,
    solid: vars.color.success500,
    onSolid: vars.color.brand900,
    darkText: vars.color.success500,
    darkOutline: vars.color.success500_15,
  },
  warning: {
    surface: vars.color.warning100,
    text: vars.color.warning500,
    outline: vars.color.warning500,
    solid: vars.color.warning500,
    onSolid: vars.color.brand900,
    darkText: vars.color.warning500,
    darkOutline: vars.color.warning500_15,
  },
  error: {
    surface: vars.color.error100,
    text: vars.color.error500,
    outline: vars.color.error500,
    solid: vars.color.error500,
    onSolid: vars.color.neutral0,
    darkText: vars.color.error500,
    darkOutline: vars.color.error500_15,
  },
  info: {
    surface: vars.color.info100,
    text: vars.color.info500,
    outline: vars.color.info500,
    solid: vars.color.info500,
    onSolid: vars.color.brand900,
    darkText: vars.color.info500,
    darkOutline: vars.color.info500_15,
  },
};

export interface BadgeProps {
  /**
   * The badge variant which controls the colour scheme
   */
  variant?: keyof typeof STATUS_TOKENS;
  /**
   * Visual style of the badge surface
   */
  appearance?: 'pill' | 'solid' | 'outline';
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
  const tokenSet = STATUS_TOKENS[variant];

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