import React, { useId, useRef, useState } from 'react';
import * as s from './PincodeInput.css';

export interface PincodeInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'maxLength'> {
  /**
   * Optional label for the input field
   */
  label?: string;
  /**
   * Number of digits in the PIN code
   * @default 6
   */
  length?: number;
  /**
   * Error message; if provided the input will display in error state
   */
  error?: string;
  /**
   * Optional helper text shown below the input
   */
  helperText?: string;
  /**
   * Callback fired when all digits are entered
   */
  onComplete?: (value: string) => void;
}

/**
 * PincodeInput component for entering PIN codes with individual digit inputs.
 * Automatically moves focus to the next input when a digit is entered.
 */
export const PincodeInput = React.forwardRef<HTMLDivElement, PincodeInputProps>(
  (
    {
      label,
      length = 6,
      error,
      helperText,
      onComplete,
      className,
      id,
      value,
      defaultValue,
      onChange,
      disabled,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const helperId = helperText ? `${inputId}-helper` : undefined;
    const errorId = error ? `${inputId}-error` : undefined;
    const wrapperClassName = className ? `${s.wrapper} ${className}` : s.wrapper;
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const [values, setValues] = useState<string[]>(() => {
      const val = (value ?? defaultValue)?.toString() ?? '';
      return Array(length)
        .fill('')
        .map((_, i) => val[i] ?? '');
    });

    React.useEffect(() => {
      if (value !== undefined) {
        const val = value.toString().padStart(length, ' ').slice(0, length);
        setValues(val.split(''));
      }
    }, [value, length]);

    const handleChange = (index: number, newValue: string) => {
      // Only allow single digit
      const digit = newValue.slice(-1).replace(/\D/g, '');
      if (!digit && newValue !== '') return;

      const newValues = [...values];
      newValues[index] = digit;
      setValues(newValues);

      const combinedValue = newValues.join('');
      onChange?.({
        target: { value: combinedValue },
      } as React.ChangeEvent<HTMLInputElement>);

      // Move to next input if digit entered
      if (digit && index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }

      // Call onComplete if all digits filled
      if (digit && index === length - 1 && newValues.every((v) => v !== '')) {
        onComplete?.(combinedValue);
      }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Backspace' && !values[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    };

    const handlePaste = (e: React.ClipboardEvent) => {
      e.preventDefault();
      const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, length);
      const newValues = Array(length).fill('').map((_, i) => pasted[i] ?? '');
      setValues(newValues);

      const combinedValue = newValues.join('');
      onChange?.({
        target: { value: combinedValue },
      } as React.ChangeEvent<HTMLInputElement>);

      // Focus the last filled input or first empty
      const focusIndex = Math.min(pasted.length, length - 1);
      inputRefs.current[focusIndex]?.focus();

      if (newValues.every((v) => v !== '')) {
        onComplete?.(combinedValue);
      }
    };

    const describedBy = [props['aria-describedby'], error ? errorId : helperId]
      .filter(Boolean)
      .join(' ')
      .trim();
    const ariaInvalid = error ? true : props['aria-invalid'];

    return (
      <div className={wrapperClassName} data-lyfeguard="PincodeInput" ref={ref}>
        {label && (
          <label className={s.label} htmlFor={`${inputId}-0`}>
            {label}
          </label>
        )}
        <div className={s.inputsContainer} data-error={error ? 'true' : undefined}>
          {Array.from({ length }).map((_, index) => (
            <input
              key={index}
              id={index === 0 ? inputId : `${inputId}-${index}`}
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              className={`${s.input} ${error ? s.inputError : ''}`}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={1}
              value={values[index] || ''}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={index === 0 ? handlePaste : undefined}
              disabled={disabled}
              aria-invalid={index === 0 ? ariaInvalid : undefined}
              aria-describedby={index === 0 ? describedBy || undefined : undefined}
              {...(index === 0 ? props : {})}
            />
          ))}
        </div>
        {(error || helperText) && (
          <div className={s.footer}>
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
        )}
      </div>
    );
  }
);
PincodeInput.displayName = 'PincodeInput';

