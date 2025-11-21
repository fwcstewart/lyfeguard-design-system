import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import React from 'react';
import { Input } from './Input';

describe('Input component', () => {
  test('renders label, placeholder and helper text', () => {
    render(<Input label="Email" placeholder="you@example.com" helperText="We'll never share your email." />);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('you@example.com')).toBeInTheDocument();
    expect(screen.getByText("We'll never share your email.")).toBeInTheDocument();
  });

  test('calls onChange when input value changes', () => {
    const handleChange = vi.fn();
    render(<Input label="Name" onChange={handleChange} />);
    const input = screen.getByLabelText('Name');
    fireEvent.change(input, { target: { value: 'Alice' } });
    expect(handleChange).toHaveBeenCalled();
    expect((input as HTMLInputElement).value).toBe('Alice');
  });

  test('displays error text when error prop is provided', () => {
    render(<Input label="Email" error="Invalid email" />);
    expect(screen.getByText('Invalid email')).toBeInTheDocument();
  });

  test('wires helper text to aria-describedby when provided', () => {
    render(<Input label="Username" helperText="Between 3 and 16 characters" />);
    const input = screen.getByLabelText('Username');
    const helper = screen.getByText('Between 3 and 16 characters');

    expect(input).toHaveAttribute('aria-describedby', helper.id);
    expect(helper.id).toContain('helper');
  });

  test('marks the field as invalid and prefers the error description', () => {
    render(
      <Input
        label="Password"
        helperText="Use at least 8 characters"
        error="Password is required"
        aria-describedby="custom"
      />
    );

    const input = screen.getByLabelText('Password');
    const error = screen.getByText('Password is required');
    const describedBy = input.getAttribute('aria-describedby');

    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(describedBy).toContain(error.id);
    expect(describedBy).toContain('custom');
    expect(describedBy).not.toContain('helper');
  });
});