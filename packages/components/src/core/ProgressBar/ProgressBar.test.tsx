import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';

vi.mock('./ProgressBar.css', () => ({
  container: 'container',
  labels: 'labels',
  value: 'value',
  bar: 'bar',
  sizes: { sm: 'sm', md: 'md', lg: 'lg' },
  fill: 'fill',
}));

import { ProgressBar } from './ProgressBar';

describe('ProgressBar', () => {
  it('applies aria values for progress state', () => {
    render(<ProgressBar progress={45} label="Uploading" />);
    const bar = screen.getByRole('progressbar');

    expect(bar.getAttribute('aria-valuenow')).toBe('45');
    expect(bar.getAttribute('aria-valuemin')).toBe('0');
    expect(bar.getAttribute('aria-valuemax')).toBe('100');
  });

  it('clamps progress within range and displays the value', () => {
    render(<ProgressBar progress={140} />);
    const bar = screen.getByRole('progressbar');

    expect(bar.getAttribute('aria-valuenow')).toBe('100');
    expect(screen.getByText('100%')).toBeTruthy();
  });
});
