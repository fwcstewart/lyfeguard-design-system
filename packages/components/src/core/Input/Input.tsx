import React from 'react';
import { generateId } from '../../helpers/aria';
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
  ({ label, helperText, error, className, id, ...props }, ref) => {
    const inputId = id ?? generateId('input');
    const inputClass = error ? `${s.input} ${s.inputError}` : s.input;
    const helperId = helperText ? `${inputId}-helper` : undefined;
    const errorId = error ? `${inputId}-error` : undefined;
    const describedBy = errorId ?? helperId;

    return (
      <div className={s.wrapper} data-lyfeguard="Input">
        {label && (
          <label className={s.label} htmlFor={inputId}>
            {label}
          </label>
        )}
        <input
          id={inputId}
          ref={ref}
          className={inputClass}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          {...props}
        />
        {error ? (
          <span id={errorId} className={s.errorText}>
            {error}
          </span>
        ) : (
          helperText && (
            <span id={helperId} className={s.helperText}>
              {helperText}
            </span>
          )
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';
