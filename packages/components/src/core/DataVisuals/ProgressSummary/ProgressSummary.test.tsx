import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { ProgressSummary, ProgressSummaryItem } from './ProgressSummary';

const items: ProgressSummaryItem[] = [
  { id: 'a', label: 'Documents', progress: 72 },
  { id: 'b', label: 'Reviews', progress: 130, helperText: 'Needs attention' },
];

describe('ProgressSummary', () => {
  it('renders heading and items', () => {
    render(<ProgressSummary heading="Portfolio" items={items} />);

    expect(screen.getByText('Portfolio')).toBeInTheDocument();
    expect(screen.getByText('Documents')).toBeInTheDocument();
    expect(screen.getByText('Reviews')).toBeInTheDocument();
  });

  it('clamps progress values and exposes aria attributes', () => {
    render(<ProgressSummary items={items} />);

    const bars = screen.getAllByRole('progressbar');
    expect(bars[1]).toHaveAttribute('aria-valuenow', '100');
  });

  it('invokes onItemClick when provided', () => {
    const handleClick = vi.fn();
    render(<ProgressSummary items={items} onItemClick={handleClick} />);

    fireEvent.click(screen.getByText('Documents'));
    expect(handleClick).toHaveBeenCalledWith('a');
  });
});
