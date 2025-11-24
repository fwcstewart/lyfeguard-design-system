import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { PincodeInput } from './PincodeInput';

describe('PincodeInput', () => {
  it('renders with label', () => {
    render(<PincodeInput label="Enter PIN" length={6} />);
    expect(screen.getByLabelText('Enter PIN')).toBeInTheDocument();
  });

  it('renders correct number of inputs', () => {
    const { container } = render(<PincodeInput length={4} />);
    const inputs = container.querySelectorAll('input');
    expect(inputs).toHaveLength(4);
  });

  it('calls onComplete when all digits are entered', () => {
    const onComplete = vi.fn();
    const { container } = render(
      <PincodeInput length={3} onComplete={onComplete} />
    );
    const inputs = container.querySelectorAll('input');

    // Enter digits
    inputs[0].value = '1';
    inputs[0].dispatchEvent(new Event('input', { bubbles: true }));
    inputs[1].value = '2';
    inputs[1].dispatchEvent(new Event('input', { bubbles: true }));
    inputs[2].value = '3';
    inputs[2].dispatchEvent(new Event('input', { bubbles: true }));

    expect(onComplete).toHaveBeenCalledWith('123');
  });

  it('displays error message', () => {
    render(<PincodeInput error="Invalid PIN" />);
    expect(screen.getByText('Invalid PIN')).toBeInTheDocument();
  });

  it('displays helper text', () => {
    render(<PincodeInput helperText="Enter 6 digits" />);
    expect(screen.getByText('Enter 6 digits')).toBeInTheDocument();
  });
});

