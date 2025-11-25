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

  it('renders helper text and links it for accessibility when no error', () => {
    render(
      <Select label="Fruits" helperText="Shown below the control">
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
      </Select>
    );

    const helper = screen.getByText('Shown below the control');
    const selectElement = screen.getByRole('combobox', { name: 'Fruits' });

    expect(helper).toBeInTheDocument();
    expect(selectElement).toHaveAttribute('aria-describedby', helper.id);
  });

  it('prefers error messaging and marks the control invalid', () => {
    render(
      <Select label="Fruits" helperText="Helper" error="Something went wrong">
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
      </Select>
    );

    const error = screen.getByText('Something went wrong');
    const selectElement = screen.getByRole('combobox', { name: 'Fruits' });

    expect(error).toBeInTheDocument();
    expect(selectElement).toHaveAttribute('aria-describedby', error.id);
    expect(selectElement).toHaveAttribute('aria-invalid', 'true');
  });

  it('prevents selection changes when readOnly', () => {
    const handleChange = vi.fn();
    render(
      <Select label="Fruits" readOnly onChange={handleChange} defaultValue="apple">
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
      </Select>
    );

    const selectElement = screen.getByRole('combobox', { name: 'Fruits' }) as HTMLSelectElement;

    fireEvent.change(selectElement, { target: { value: 'banana' } });

    expect(handleChange).not.toHaveBeenCalled();
    expect(selectElement).toHaveAttribute('aria-readonly', 'true');
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
