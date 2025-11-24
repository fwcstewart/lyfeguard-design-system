import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { CurrencyInput } from './CurrencyInput';

describe('CurrencyInput', () => {
  it('renders with label and currency symbol', () => {
    render(<CurrencyInput label="Amount" currency="£" />);
    expect(screen.getByLabelText('Amount')).toBeInTheDocument();
    expect(screen.getByText('£')).toBeInTheDocument();
  });

  it('displays default currency symbol', () => {
    render(<CurrencyInput label="Amount" />);
    expect(screen.getByText('£')).toBeInTheDocument();
  });

  it('displays custom currency symbol', () => {
    render(<CurrencyInput label="Amount" currency="$" />);
    expect(screen.getByText('$')).toBeInTheDocument();
  });

  it('displays error message', () => {
    render(<CurrencyInput error="Invalid amount" />);
    expect(screen.getByText('Invalid amount')).toBeInTheDocument();
  });

  it('displays helper text', () => {
    render(<CurrencyInput helperText="Enter amount in pounds" />);
    expect(screen.getByText('Enter amount in pounds')).toBeInTheDocument();
  });
});

