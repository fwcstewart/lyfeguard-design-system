import React from 'react';
import * as s from './RadioGroup.css';

export interface RadioOption {
  value: string;
  label: string;
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
   * Set to true to lay out radios horizontally rather than vertically.
   */
  inline?: boolean;
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
  inline = false,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };
  return (
    <fieldset className={s.group} style={{ flexDirection: inline ? 'row' : 'column' }}>
      {label && <legend className={s.label}>{label}</legend>}
      {options.map((opt) => (
        <label className={s.option} key={opt.value} style={{ flexDirection: inline ? 'row' : 'row' }}>
          <input
            type="radio"
            name={name}
            value={opt.value}
            checked={value === undefined ? undefined : value === opt.value}
            onChange={handleChange}
            className={s.radio}
          />
          <span className={s.label}>{opt.label}</span>
        </label>
      ))}
    </fieldset>
  );
};