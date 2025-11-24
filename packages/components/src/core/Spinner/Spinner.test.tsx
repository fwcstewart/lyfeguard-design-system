import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { Spinner } from './Spinner';
import { SPINNER_SIZES } from './constants';

describe('Spinner', () => {
  beforeEach(() => {
    vi.stubGlobal('matchMedia', (query: string) => ({
      matches: false,
      media: query,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('applies a default aria-label for accessibility', () => {
    render(<Spinner />);
    expect(screen.getByRole('status')).toHaveAttribute('aria-label', 'Loading');
  });

  it('allows a custom aria-label to be provided', () => {
    render(<Spinner ariaLabel="Fetching data" />);
    expect(screen.getByRole('status')).toHaveAttribute('aria-label', 'Fetching data');
  });

  it('maps size tokens to CSS variables', () => {
    render(<Spinner size="lg" />);
    const spinner = screen.getByRole('status');
    expect(spinner.style.getPropertyValue('--spinner-size')).toBe(SPINNER_SIZES.lg.size);
    expect(spinner.style.getPropertyValue('--spinner-stroke-width')).toBe(SPINNER_SIZES.lg.strokeWidth);
  });

  it('pauses animation when reduced motion is requested', () => {
    vi.stubGlobal('matchMedia', (query: string) => ({
      matches: query === '(prefers-reduced-motion: reduce)',
      media: query,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    render(<Spinner ariaLabel="Reduced" />);
    const spinner = screen.getByRole('status');
    expect(spinner.style.getPropertyValue('--spinner-animation-state')).toBe('paused');
  });
});
