import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, test, vi } from 'vitest';
import { Textarea } from './Textarea';

describe('Textarea component', () => {
  test('applies aria attributes and helper associations', () => {
    render(
      <Textarea
        label="Description"
        helperText="Provide more details"
        aria-required="true"
      />,
    );

    const textarea = screen.getByLabelText('Description');
    expect(textarea).toHaveAttribute('aria-required', 'true');
    const helper = screen.getByText('Provide more details');
    expect(textarea).toHaveAttribute('aria-describedby', helper.id);
    expect(helper.id).toContain('helper');
  });

  test('marks textarea invalid and references error text', () => {
    render(<Textarea label="Feedback" error="Feedback is required" />);

    const textarea = screen.getByLabelText('Feedback');
    const errorText = screen.getByText('Feedback is required');
    expect(textarea).toHaveAttribute('aria-invalid', 'true');
    expect(textarea).toHaveAttribute('aria-describedby', errorText.id);
    expect(errorText.id).toContain('error');
  });

  test('renders and updates character count when enabled', () => {
    const handleChange = vi.fn();
    render(
      <Textarea
        label="Notes"
        maxLength={10}
        showCharacterCount
        defaultValue="Hi"
        onChange={handleChange}
      />,
    );

    const textarea = screen.getByLabelText('Notes');
    expect(screen.getByText('2/10')).toBeInTheDocument();

    fireEvent.change(textarea, { target: { value: 'Hello' } });
    expect(handleChange).toHaveBeenCalled();
    expect(screen.getByText('5/10')).toBeInTheDocument();
  });
});
