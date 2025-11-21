import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Select } from './Select';

describe('Select', () => {
  it('renders label and options', () => {
    render(
      <Select label="Fruits">
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
      </Select>
    );
    // The label should be present
    expect(screen.getByText('Fruits')).toBeInTheDocument();
    // The options should render within the select element
    expect(screen.getByRole('option', { name: 'Apple' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Banana' })).toBeInTheDocument();
  });

  it('calls onChange when selection changes', () => {
    const handleChange = vi.fn();
    render(
      <Select label="Fruits" onChange={handleChange} data-testid="select">
        <option value="">Please select</option>
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
      </Select>
    );
    const selectElement = screen.getByTestId('select') as HTMLSelectElement;
    // Change the value of the select element
    fireEvent.change(selectElement, { target: { value: 'banana' } });
    // The onChange handler should have been called exactly once
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});