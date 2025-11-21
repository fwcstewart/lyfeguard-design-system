import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DateInput } from './DateInput';

describe('DateInput', () => {
  it('provides aria labels for calendar days', async () => {
    render(<DateInput label="Start date" defaultValue="2024-06-15" />);

    const input = screen.getByLabelText('Start date');
    await userEvent.click(input);

    expect(screen.getByRole('dialog', { name: 'Calendar' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'June 15, 2024' })).toBeInTheDocument();
  });

  it('supports keyboard navigation between days', async () => {
    render(<DateInput label="Keyboard date" defaultValue="2024-06-15" />);

    const input = screen.getByLabelText('Keyboard date');
    await userEvent.click(input);

    const selectedDay = screen.getByRole('button', { name: 'June 15, 2024' });
    selectedDay.focus();

    await userEvent.keyboard('{ArrowRight}');
    expect(screen.getByRole('button', { name: 'June 16, 2024' })).toHaveFocus();

    await userEvent.keyboard('{ArrowLeft}');
    expect(screen.getByRole('button', { name: 'June 15, 2024' })).toHaveFocus();
  });
});
