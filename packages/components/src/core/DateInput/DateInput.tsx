import React from 'react';
import * as s from './DateInput.css';

export interface DateInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /**
   * Label displayed above the date field
   */
  label?: string;
}

/**
 * DateInput component
 *
 * Provides a styled wrapper around the native HTML5 date input. The component
 * forwards all props (other than type) to the input element.
 */
export const DateInput = React.forwardRef<HTMLInputElement, DateInputProps>(
  ({ label, ...props }, ref) => {
    return (
      <div className={s.wrapper}>
        {label && <label className={s.label}>{label}</label>}
        <input ref={ref} type="date" className={s.input} {...props} />
      </div>
    );
  }
);

DateInput.displayName = 'DateInput';