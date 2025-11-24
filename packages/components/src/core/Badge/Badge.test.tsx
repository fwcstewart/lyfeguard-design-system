import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import { badgeVars, appearance, badgeStatusTokens, status } from './Badge.css';
import { Badge } from './Badge';

const getVarName = (variable: string) => variable.replace('var(', '').replace(')', '');

describe('Badge', () => {
  it('renders the provided children', () => {
    render(<Badge>Active</Badge>);
    expect(screen.getByText('Active')).toBeInTheDocument();
  });

  it('applies tokenised colours for contrast in light and dark themes', () => {
    render(<Badge variant="success">Success</Badge>);
    const badge = screen.getByText('Success');
    const tokenSet = badgeStatusTokens.success;

    expect(badge.style.getPropertyValue(getVarName(badgeVars.surface))).toBe(tokenSet.surface);
    expect(badge.style.getPropertyValue(getVarName(badgeVars.text))).toBe(tokenSet.text);
    expect(badge.style.getPropertyValue(getVarName(badgeVars.darkText))).toBe(tokenSet.darkText);
    expect(badge.style.getPropertyValue(getVarName(badgeVars.darkOutline))).toBe(tokenSet.darkOutline);
  });

  it('aligns legacy badge variants with tokenised styles', () => {
    render(
      <>
        <Badge variant="active">Active</Badge>
        <Badge variant="pending">Pending</Badge>
        <Badge variant="secondary">Secondary</Badge>
      </>,
    );

    const cases = [
      ['Active', 'active'] as const,
      ['Pending', 'pending'] as const,
      ['Secondary', 'secondary'] as const,
    ];

    cases.forEach(([label, variantKey]) => {
      const badge = screen.getByText(label);
      const tokenSet = badgeStatusTokens[variantKey];

      expect(badge.className).toContain(status[variantKey]);
      expect(badge.style.getPropertyValue(getVarName(badgeVars.surface))).toBe(tokenSet.surface);
      expect(badge.style.getPropertyValue(getVarName(badgeVars.text))).toBe(tokenSet.text);
      expect(badge.style.getPropertyValue(getVarName(badgeVars.outline))).toBe(tokenSet.outline);
    });
  });

  it('supports appearance variants', () => {
    const { rerender } = render(<Badge appearance="solid">Solid</Badge>);
    const solidBadge = screen.getByText('Solid');

    expect(solidBadge.className).toContain(status.primary);
    expect(solidBadge.className).toContain(appearance.solid);

    rerender(
      <Badge appearance="outline" variant="error">
        Outline
      </Badge>,
    );

    const outlineBadge = screen.getByText('Outline');
    expect(outlineBadge.className).toContain(status.error);
    expect(outlineBadge.className).toContain(appearance.outline);
  });

  it('renders screen reader only context when provided', () => {
    render(
      <Badge srText="Sync status: updated" variant="info">
        Synced
      </Badge>,
    );

    expect(screen.getByText('Sync status: updated')).toBeInTheDocument();
  });
});
