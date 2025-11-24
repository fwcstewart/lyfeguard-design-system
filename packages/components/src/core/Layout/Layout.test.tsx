import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Grid } from './Grid';
import { Stack } from './Stack';
import { spacingTokens } from './spacing';
import * as styles from './Layout.css';

describe('Layout spacing utilities', () => {
  it('maps semantic spacing tokens to design token values', () => {
    expect(spacingTokens.none).toContain('--spacing-0');
    expect(spacingTokens.sm).toContain('--spacing-2');
    expect(spacingTokens.md).toContain('--spacing-4');
    expect(spacingTokens.xl).toContain('--spacing-7');
  });

  it('applies responsive spacing variables to Stack', () => {
    render(
      <Stack
        data-testid="stack"
        gap={{ base: 'sm', lg: 'xl' }}
        padding="lg"
        margin={{ base: 'none', md: 'sm' }}
      >
        <div>Child</div>
      </Stack>,
    );

    const stack = screen.getByTestId('stack');

    expect(stack.style.getPropertyValue('--stack-gap')).toBe(spacingTokens.sm);
    expect(stack.style.getPropertyValue('--stack-gap-lg')).toBe(spacingTokens.xl);
    expect(stack.style.getPropertyValue('--stack-padding')).toBe(spacingTokens.lg);
    expect(stack.style.getPropertyValue('--stack-margin')).toBe(spacingTokens.none);
    expect(stack.style.getPropertyValue('--stack-margin-md')).toBe(spacingTokens.sm);
  });

  it('applies responsive gap to Grid', () => {
    render(<Grid data-testid="grid" gap={{ base: 'xs', md: 'lg' }} />);
    const grid = screen.getByTestId('grid');

    expect(grid.style.getPropertyValue('--grid-gap')).toBe(spacingTokens.xs);
    expect(grid.style.getPropertyValue('--grid-gap-md')).toBe(spacingTokens.lg);
  });

  it('omits row dividers when wrapping items to avoid broken layout', () => {
    render(
      <Stack data-testid="row-stack" direction="row" dividers wrap="wrap">
        <div>One</div>
        <div>Two</div>
      </Stack>,
    );

    const stack = screen.getByTestId('row-stack');

    expect(stack.className.includes(styles.stackWithRowDividers)).toBe(false);
  });
});
