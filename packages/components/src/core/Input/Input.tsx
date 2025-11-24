import React, { useId } from 'react';
import * as s from './Input.css';

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
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
  /**
   * Optional leading element displayed inside the field (icon, text or token)
   */
  prefix?: React.ReactNode;
  /**
   * Optional trailing element displayed inside the field (icon, text or token)
   */
  suffix?: React.ReactNode;
  /**
   * When true and `maxLength` is provided, renders a live character counter.
   */
  showCharacterCount?: boolean;
  /**
   * Visual variant of the input field
   * @default 'default'
   */
  variant?: 'default' | 'white';
  /**
   * When true, applies readonly styling (grayed out, non-interactive appearance)
   */
  readOnly?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error,
      className,
      id,
      prefix,
      suffix,
      showCharacterCount = false,
      variant = 'default',
      readOnly = false,
      value,
      defaultValue,
      onChange,
      maxLength,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const helperId = helperText ? `${inputId}-helper` : undefined;
    const errorId = error ? `${inputId}-error` : undefined;
    const counterId = showCharacterCount && maxLength ? `${inputId}-counter` : undefined;
    const wrapperClassName = className ? `${s.wrapper} ${className}` : s.wrapper;
    const [internalValue, setInternalValue] = React.useState<string>(
      (defaultValue ?? '')?.toString() ?? '',
    );

    React.useEffect(() => {
      if (value !== undefined) {
        setInternalValue(value?.toString() ?? '');
      }
    }, [value]);

    const describedBy = [props['aria-describedby'], error ? errorId : helperId, counterId]
      .filter(Boolean)
      .join(' ')
      .trim();
    const ariaInvalid = error ? true : props['aria-invalid'];
    const fieldStateClasses = [
      s.field,
      variant === 'white' ? s.fieldWhite : '',
      error ? s.fieldError : '',
      props.disabled ? s.fieldDisabled : '',
      readOnly ? s.fieldReadOnly : '',
    ]
      .filter(Boolean)
      .join(' ');

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
      if (value === undefined) {
        setInternalValue(event.target.value);
      }
      onChange?.(event);
    };

    const currentLength = (value ?? internalValue)?.toString().length ?? 0;
    const controlProps = value !== undefined ? { value } : { defaultValue };

    return (
      <div className={wrapperClassName} data-lyfeguard="Input">
        {label && (
          <label className={s.label} htmlFor={inputId}>
            {label}
          </label>
        )}
        <div className={fieldStateClasses} data-disabled={props.disabled ? 'true' : undefined}>
          {prefix && <span className={s.affix}>{prefix}</span>}
          <input
            id={inputId}
            ref={ref}
            className={s.input}
            {...controlProps}
            {...props}
            maxLength={maxLength}
            readOnly={readOnly}
            aria-invalid={ariaInvalid}
            aria-describedby={describedBy || undefined}
            onChange={handleChange}
          />
          {suffix && <span className={s.affix}>{suffix}</span>}
        </div>
        {(error || helperText || (showCharacterCount && maxLength)) && (
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
            {showCharacterCount && maxLength && (
              <span className={s.characterCount} id={counterId}>
                {currentLength}/{maxLength}
              </span>
            )}
          </div>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';
