import React from 'react';
import * as s from './Checkbox.css';

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /**
   * Label displayed next to the checkbox
   */
  label?: string;
}

/**
 * Checkbox component
 *
 * A styled checkbox that pairs a native input with a text label. The checkbox
 * uses the design system tokens for its colours, spacing and typography. It
 * forwards any additional props to the underlying input element (excluding
 * type, which is always set to "checkbox").
 */
export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, ...props }, ref) => {
    return (
      <label className={s.container} data-lyfeguard="Checkbox">
        <input ref={ref} type="checkbox" className={s.checkbox} {...props} />
        {label && <span className={s.label}>{label}</span>}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';