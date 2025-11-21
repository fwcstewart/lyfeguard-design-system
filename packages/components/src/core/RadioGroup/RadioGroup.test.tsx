import React from 'react';
import { describe, expect, test, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { RadioGroup } from './RadioGroup';

const options = [
  { value: 'visa', label: 'Visa' },
  { value: 'mastercard', label: 'MasterCard' },
  { value: 'amex', label: 'American Express' },
];

describe('RadioGroup', () => {
  test('renders helper text with aria-describedby', () => {
    render(
      <RadioGroup
        name="cards"
        label="Payment Method"
        helperText="Choose the card to use during checkout."
        options={options}
        defaultValue="visa"
      />,
    );

    const helper = screen.getByRole('note', { name: /checkout/i });
    const fieldset = screen.getByRole('radiogroup');
    expect(helper).toBeInTheDocument();
    expect(fieldset).toHaveAttribute('aria-describedby', helper.id);

    const input = screen.getByLabelText('Visa');
    expect(input).toHaveAttribute('aria-describedby', helper.id);
  });

  test('supports keyboard navigation between options', () => {
    const handleChange = vi.fn();
    render(
      <RadioGroup
        name="cards"
        label="Payment Method"
        options={options}
        defaultValue="visa"
        onChange={handleChange}
      />,
    );

    const first = screen.getByLabelText('Visa') as HTMLInputElement;
    const second = screen.getByLabelText('MasterCard') as HTMLInputElement;

    first.focus();
    fireEvent.keyDown(first, { key: 'ArrowRight' });

    expect(second.checked).toBe(true);
    expect(handleChange).toHaveBeenCalledWith('mastercard');
  });
});
