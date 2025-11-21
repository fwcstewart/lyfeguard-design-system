import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { Filters, FilterOption } from './Filters';

const options: FilterOption[] = [
  { id: 'all', label: 'All' },
  { id: 'active', label: 'Active' },
  { id: 'archived', label: 'Archived' },
];

describe('Filters', () => {
  it('selects and deselects filters in uncontrolled mode', () => {
    render(<Filters options={options} />);

    const active = screen.getByRole('button', { name: 'Active' });
    fireEvent.click(active);
    expect(active).toHaveAttribute('aria-pressed', 'true');

    fireEvent.click(active);
    expect(active).toHaveAttribute('aria-pressed', 'false');
  });

  it('supports single selection mode', () => {
    render(<Filters options={options} allowMultiple={false} defaultSelected={['all']} />);

    const active = screen.getByRole('button', { name: 'Active' });
    fireEvent.click(active);

    expect(active).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('button', { name: 'All' })).toHaveAttribute('aria-pressed', 'false');
  });

  it('invokes onChange with next selection', () => {
    const handleChange = vi.fn();
    render(<Filters options={options} onChange={handleChange} />);

    fireEvent.click(screen.getByRole('button', { name: 'Archived' }));

    expect(handleChange).toHaveBeenCalledWith(['archived']);
  });

  it('clears selections via the clear button', () => {
    render(<Filters options={options} defaultSelected={['all', 'active']} />);

    fireEvent.click(screen.getByRole('button', { name: 'Clear' }));

    expect(screen.getByRole('button', { name: 'All' })).toHaveAttribute('aria-pressed', 'false');
    expect(screen.getByRole('button', { name: 'Active' })).toHaveAttribute('aria-pressed', 'false');
  });

  it('ignores disabled options', () => {
    render(
      <Filters
        options={[
          ...options,
          {
            id: 'disabled',
            label: 'Disabled option',
            disabled: true,
          },
        ]}
      />,
    );

    const disabledButton = screen.getByRole('button', { name: 'Disabled option' });
    fireEvent.click(disabledButton);

    expect(disabledButton).toHaveAttribute('aria-pressed', 'false');
  });
});
