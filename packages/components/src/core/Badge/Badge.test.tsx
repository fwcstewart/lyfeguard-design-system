import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import { vars } from '../../globals.css';
import { badgeVars, appearance, status } from './Badge.css';
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

    expect(badge.style.getPropertyValue(getVarName(badgeVars.surface))).toBe(vars.color.success500_15);
    expect(badge.style.getPropertyValue(getVarName(badgeVars.text))).toBe(vars.color.success600);
    expect(badge.style.getPropertyValue(getVarName(badgeVars.darkText))).toBe(vars.color.success500);
    expect(badge.style.getPropertyValue(getVarName(badgeVars.darkOutline))).toBe(vars.color.success500_15);
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
