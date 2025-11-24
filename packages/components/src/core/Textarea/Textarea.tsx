import React from 'react';
import * as s from './Textarea.css';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * Optional label for the textarea
   */
  label?: string;
  /**
   * Helper text displayed beneath the textarea
   */
  helperText?: string;
  /**
   * Error message; when provided the textarea is marked invalid
   */
  error?: string;
  /**
   * When true and maxLength is provided, displays a live character count
   */
  showCharacterCount?: boolean;
  /**
   * Visual variant of the textarea
   * @default 'default'
   */
  variant?: 'default' | 'white';
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      helperText,
      error,
      className,
      id,
      maxLength,
      defaultValue,
      value,
      onChange,
      showCharacterCount = false,
      variant = 'default',
      readOnly = false,
      ...props
    },
    ref,
  ) => {
    const generatedId = React.useId();
    const textareaId = id ?? `textarea-${generatedId}`;
    const helperId = helperText && !error ? `${textareaId}-helper` : undefined;
    const errorId = error ? `${textareaId}-error` : undefined;
    const counterId =
      showCharacterCount && maxLength ? `${textareaId}-counter` : undefined;
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

    const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (
      event,
    ) => {
      if (value === undefined) {
        setInternalValue(event.target.value);
      }
      onChange?.(event);
    };

    const currentLength = (value ?? internalValue)?.toString().length ?? 0;
    const textareaClass = [
      s.textarea,
      variant === 'white' ? s.textareaWhite : '',
      error ? s.textareaError : '',
      props.disabled ? s.textareaDisabled : '',
      readOnly ? s.textareaReadOnly : '',
    ]
      .filter(Boolean)
      .join(' ');

    const controlProps =
      value !== undefined ? { value } : { defaultValue };

    return (
      <div className={wrapperClassName} data-lyfeguard="Textarea">
        {label && (
          <label className={s.label} htmlFor={textareaId}>
            {label}
          </label>
        )}
        <textarea
          id={textareaId}
          ref={ref}
          className={textareaClass}
          data-variant={variant}
          data-readonly={readOnly ? 'true' : undefined}
          data-has-error={error ? 'true' : undefined}
          data-disabled={props.disabled ? 'true' : undefined}
          aria-invalid={error ? true : props['aria-invalid']}
          aria-describedby={describedBy || undefined}
          maxLength={maxLength}
          readOnly={readOnly}
          onChange={handleChange}
          {...controlProps}
          {...props}
        />
        {(helperText || error || (showCharacterCount && maxLength)) && (
          <div className={s.footer}>
            {error ? (
              <span className={s.errorText} id={errorId}>
                {error}
              </span>
            ) : (
              helperText && (
                <span className={s.helperText} id={helperId}>
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
  },
);
Textarea.displayName = 'Textarea';
