import React from 'react';
import * as s from './Select.css';

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /**
   * Optional label for the select control
   */
  label?: string;
  /**
   * Optional helper text shown below the control
   */
  helperText?: string;
  /**
   * Error message; if provided the control will display in error state
   */
  error?: string;
  /**
   * Visual variant of the select field
   * @default 'default'
   */
  variant?: 'default' | 'white';
  /**
   * When true, prevents changing the selected option while showing a readonly appearance
   */
  readOnly?: boolean;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      helperText,
      error,
      children,
      className,
      id,
      variant = 'default',
      readOnly = false,
      onChange,
      onKeyDown,
      onMouseDown,
      ...props
    },
    ref,
  ) => {
    const generatedId = React.useId();
    const selectId = id ?? generatedId;
    const helperId = helperText && !error ? `${selectId}-helper` : undefined;
    const errorId = error ? `${selectId}-error` : undefined;
    const wrapperClassName = className ? `${s.wrapper} ${className}` : s.wrapper;
    const describedBy = [props['aria-describedby'], error ? errorId : helperId]
      .filter(Boolean)
      .join(' ')
      .trim();
    const ariaInvalid = error ? true : props['aria-invalid'];
    const fieldClassName = [
      s.select,
      variant === 'white' ? s.selectWhite : '',
      error ? s.selectError : '',
      props.disabled ? s.selectDisabled : '',
      readOnly ? s.selectReadOnly : '',
    ]
      .filter(Boolean)
      .join(' ');

    const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
      if (readOnly) {
        event.preventDefault();
        return;
      }
      onChange?.(event);
    };

    const handleKeyDown: React.KeyboardEventHandler<HTMLSelectElement> = (event) => {
      if (
        readOnly &&
        ['ArrowDown', 'ArrowUp', 'Home', 'End', 'PageUp', 'PageDown', ' ', 'Enter'].includes(
          event.key,
        )
      ) {
        event.preventDefault();
        return;
      }
      onKeyDown?.(event);
    };

    const handleMouseDown: React.MouseEventHandler<HTMLSelectElement> = (event) => {
      if (readOnly) {
        event.preventDefault();
        return;
      }
      onMouseDown?.(event);
    };

    return (
      <div className={wrapperClassName} data-lyfeguard="Select">
        {label && (
          <label className={s.label} htmlFor={selectId}>
            {label}
          </label>
        )}
        <select
          id={selectId}
          ref={ref}
          className={fieldClassName}
          {...props}
          aria-invalid={ariaInvalid}
          aria-describedby={describedBy || undefined}
          aria-readonly={readOnly || undefined}
          data-variant={variant}
          data-readonly={readOnly ? 'true' : undefined}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onMouseDown={handleMouseDown}
        >
          {children}
        </select>
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
  },
);
Select.displayName = 'Select';
