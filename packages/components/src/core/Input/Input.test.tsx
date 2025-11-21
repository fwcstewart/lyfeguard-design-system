import { render, screen, fireEvent } from '@testing-library/react';
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
});