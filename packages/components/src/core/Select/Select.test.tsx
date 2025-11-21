import '@vanilla-extract/css/disableRuntimeStyles';
import '@testing-library/jest-dom/vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Select } from './Select';

describe('Select', () => {
  it('renders label and options', () => {
    render(
      <Select label="Fruits">
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
      </Select>
    );

    expect(screen.getByText('Fruits')).toBeInTheDocument();
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

    fireEvent.change(selectElement, { target: { value: 'banana' } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('exposes the combobox role with an associated label', () => {
    render(
      <Select label="Fruits" aria-describedby="select-help">
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
      </Select>
    );

    const selectElement = screen.getByRole('combobox', { name: 'Fruits' });

    expect(selectElement).toBeInTheDocument();
    expect(selectElement).toHaveAccessibleName('Fruits');
    expect(selectElement).toHaveAttribute('aria-describedby', 'select-help');
  });

  it('supports keyboard interaction to change selection', () => {
    const handleChange = vi.fn();
    render(
      <Select label="Fruits" onChange={handleChange} defaultValue="apple">
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="cherry">Cherry</option>
      </Select>
    );

    const selectElement = screen.getByRole('combobox', { name: 'Fruits' }) as HTMLSelectElement;

    selectElement.focus();
    expect(selectElement).toHaveFocus();

    fireEvent.keyDown(selectElement, { key: 'ArrowDown' });
    fireEvent.change(selectElement, { target: { value: 'banana' } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(selectElement.value).toBe('banana');
  });
});
