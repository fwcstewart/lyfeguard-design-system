import React from 'react';
import * as s from './Input.css';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Optional label for the input field
   */
  label?: string;
  /**
   * Optional helper text shown below the input
   */
  helperText?: string;
  /**
   * Error message; if provided the input will display in error state
   */
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, helperText, error, className, ...props }, ref) => {
    const inputClass = error ? `${s.input} ${s.inputError}` : s.input;

    return (
      <div className={s.wrapper} data-lyfeguard="Input">
        {label && <label className={s.label}>{label}</label>}
        <input ref={ref} className={inputClass} {...props} />
        {error ? (
          <span className={s.errorText}>{error}</span>
        ) : (
          helperText && <span className={s.helperText}>{helperText}</span>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';
