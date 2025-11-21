import React, { useId } from 'react';
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
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const helperId = helperText ? `${inputId}-helper` : undefined;
    const errorId = error ? `${inputId}-error` : undefined;
    const inputClass = error ? `${s.input} ${s.inputError}` : s.input;
    const wrapperClassName = className ? `${s.wrapper} ${className}` : s.wrapper;
    const describedBy = [props['aria-describedby'], error ? errorId : helperId]
      .filter(Boolean)
      .join(' ')
      .trim();
    const ariaInvalid = error ? true : props['aria-invalid'];

    return (
      <div className={wrapperClassName} data-lyfeguard="Input">
        {label && (
          <label className={s.label} htmlFor={inputId}>
            {label}
          </label>
        )}
        <input
          id={inputId}
          ref={ref}
          className={inputClass}
          {...props}
          aria-invalid={ariaInvalid}
          aria-describedby={describedBy || undefined}
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
