import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { DateRange } from './DateRange';

const presets = [
  { label: 'Last 7 days', startDate: '2024-06-10', endDate: '2024-06-17' },
  { label: 'This month', startDate: '2024-06-01', endDate: '2024-06-30' },
];

describe('DateRange', () => {
  it('renders inputs with default values', () => {
    render(<DateRange defaultValue={{ startDate: '2024-06-01', endDate: '2024-06-15' }} />);

    expect(screen.getByLabelText('Start date')).toHaveValue('2024-06-01');
    expect(screen.getByLabelText('End date')).toHaveValue('2024-06-15');
  });

  it('calls onChange when values change', () => {
    const handleChange = vi.fn();
    render(<DateRange onChange={handleChange} presets={presets} />);

    fireEvent.change(screen.getByLabelText('Start date'), { target: { value: '2024-06-02' } });
    expect(handleChange).toHaveBeenCalledWith({ startDate: '2024-06-02', endDate: '' });
  });

  it('applies presets when clicked', () => {
    render(<DateRange presets={presets} />);

    fireEvent.click(screen.getByRole('button', { name: 'This month' }));

    expect(screen.getByLabelText('Start date')).toHaveValue('2024-06-01');
    expect(screen.getByLabelText('End date')).toHaveValue('2024-06-30');
  });
});
