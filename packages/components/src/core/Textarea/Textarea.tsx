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

    const [internalValue, setInternalValue] = React.useState<string>(
      (defaultValue ?? '')?.toString() ?? '',
    );

    React.useEffect(() => {
      if (value !== undefined) {
        setInternalValue(value?.toString() ?? '');
      }
    }, [value]);

    const describedBy = [errorId, helperId, counterId]
      .filter(Boolean)
      .join(' ');

    const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (
      event,
    ) => {
      if (value === undefined) {
        setInternalValue(event.target.value);
      }
      onChange?.(event);
    };

    const currentLength = (value ?? internalValue)?.toString().length ?? 0;
    const textareaClass = error
      ? `${s.textarea} ${s.textareaError}${className ? ` ${className}` : ''}`
      : `${s.textarea}${className ? ` ${className}` : ''}`;

    const controlProps =
      value !== undefined ? { value } : { defaultValue };

    return (
      <div className={s.wrapper} data-lyfeguard="Textarea">
        {label && (
          <label className={s.label} htmlFor={textareaId}>
            {label}
          </label>
        )}
        <textarea
          id={textareaId}
          ref={ref}
          className={textareaClass}
          aria-invalid={!!error}
          aria-describedby={describedBy || undefined}
          maxLength={maxLength}
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
