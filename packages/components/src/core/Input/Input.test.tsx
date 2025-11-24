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

  test('renders prefix and suffix content inside the field', () => {
    render(<Input label="Amount" prefix="£" suffix="GBP" />);

    expect(screen.getByText('£')).toBeInTheDocument();
    expect(screen.getByText('GBP')).toBeInTheDocument();
    expect(screen.getByLabelText('Amount')).toBeInTheDocument();
  });

  test('applies the white variant styling', () => {
    render(<Input label="Account" variant="white" defaultValue="123" />);

    const input = screen.getByLabelText('Account');
    const field = input.parentElement as HTMLElement;

    expect(field.dataset.variant).toBe('white');
    expect(field.dataset.disabled).toBeUndefined();
  });

  test('applies readonly styling and attributes', () => {
    render(<Input label="Reference" readOnly defaultValue="Fixed" />);

    const input = screen.getByLabelText('Reference');
    const field = input.parentElement as HTMLElement;

    expect(input).toHaveAttribute('readonly');
    expect(field.dataset.readonly).toBe('true');
  });

  test('displays a live character counter when enabled', () => {
    render(
      <Input
        label="Code"
        maxLength={6}
        showCharacterCount
        defaultValue="ABC"
      />,
    );

    const input = screen.getByLabelText('Code');
    const counter = screen.getByText('3/6');

    expect(counter.id).toContain('counter');
    expect(input).toHaveAttribute('aria-describedby', counter.id);

    fireEvent.change(input, { target: { value: 'ABCDE' } });
    expect(screen.getByText('5/6')).toBeInTheDocument();
  });
});