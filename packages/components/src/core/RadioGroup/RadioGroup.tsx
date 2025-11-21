import React from 'react';
import * as s from './RadioGroup.css';

export interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  /**
   * Name applied to each radio input. Required for grouping semantics.
   */
  name: string;
  /**
   * Array of options for the radio group.
   */
  options: RadioOption[];
  /**
   * Currently selected value (for controlled usage).
   */
  value?: string;
  /**
   * Change handler called when user selects a different option.
   */
  onChange?: (value: string) => void;
  /**
   * Optional label for the entire group (e.g. field title).
   */
  label?: string;
  /**
   * Optional helper text displayed beneath the group.
   */
  helperText?: string;
  /**
   * Set to true to lay out radios horizontally rather than vertically.
   */
  inline?: boolean;
  /**
   * Default selected option for uncontrolled usage.
   */
  defaultValue?: string;
}

/**
 * RadioGroup component
 *
 * Renders a list of radio buttons based on an array of options. Supports
 * controlled and uncontrolled usage. Uses design-system tokens for styling.
 */
export const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  options,
  value,
  onChange,
  label,
  helperText,
  inline = false,
  defaultValue,
}) => {
  const helperId = helperText ? `radio-helper-${React.useId()}` : undefined;
  const [internalValue, setInternalValue] = React.useState<string | undefined>(defaultValue);
  const selectedValue = value ?? internalValue;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInternalValue(event.target.value);
    onChange?.(event.target.value);
  };

  const handleKeyboardNavigation = (
    event: React.KeyboardEvent<HTMLInputElement>,
    currentValue: string,
  ) => {
    const isForward = event.key === 'ArrowRight' || event.key === 'ArrowDown';
    const isBackward = event.key === 'ArrowLeft' || event.key === 'ArrowUp';
    if (!isForward && !isBackward) {
      return;
    }

    event.preventDefault();
    const enabledOptions = options.filter((option) => !option.disabled);
    if (!enabledOptions.length) {
      return;
    }

    const currentSelection = selectedValue ?? currentValue;
    const currentIndex = enabledOptions.findIndex((option) => option.value === currentSelection);
    const fallbackIndex = Math.max(currentIndex, 0);
    const delta = isForward ? 1 : -1;
    const nextIndex = (fallbackIndex + delta + enabledOptions.length) % enabledOptions.length;
    const nextValue = enabledOptions[nextIndex].value;

    setInternalValue(nextValue);
    onChange?.(nextValue);
  };

  return (
    <fieldset
      className={s.group}
      style={{ flexDirection: inline ? 'row' : 'column' }}
      data-lyfeguard="RadioGroup"
      role="radiogroup"
      aria-describedby={helperId}
    >
      {label && <legend className={s.legend}>{label}</legend>}
      {options.map((opt) => (
        <label
          className={s.option}
          key={opt.value}
          data-disabled={opt.disabled ? 'true' : 'false'}
          style={inline ? { flexDirection: 'row' } : undefined}
          aria-disabled={opt.disabled}
        >
          <input
            type="radio"
            name={name}
            value={opt.value}
            checked={selectedValue === undefined ? undefined : selectedValue === opt.value}
            onChange={handleChange}
            className={s.radio}
            disabled={opt.disabled}
            aria-checked={selectedValue === opt.value}
            aria-describedby={helperId}
            onKeyDown={(event) => handleKeyboardNavigation(event, opt.value)}
          />
          <span className={s.optionLabel}>{opt.label}</span>
        </label>
      ))}
      {helperText && (
        <span className={s.helperText} id={helperId} role="note">
          {helperText}
        </span>
      )}
    </fieldset>
  );
};