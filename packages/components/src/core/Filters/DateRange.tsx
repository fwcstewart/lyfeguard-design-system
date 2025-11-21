import React from 'react';
import { cx } from '../../helpers/cx';
import * as s from './DateRange.css';

export interface DateRangeValue {
  /**
   * ISO formatted start date (YYYY-MM-DD).
   */
  startDate: string;
  /**
   * ISO formatted end date (YYYY-MM-DD).
   */
  endDate: string;
}

export interface DateRangePreset extends DateRangeValue {
  /**
   * Human-friendly preset label.
   */
  label: string;
}

export interface DateRangeProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /**
   * Controlled value for the date range.
   */
  value?: DateRangeValue;
  /**
   * Initial value when using the component uncontrolled.
   */
  defaultValue?: DateRangeValue;
  /**
   * Callback fired whenever the range changes.
   */
  onChange?(value: DateRangeValue): void;
  /**
   * Optional heading shown above the inputs.
   */
  label?: string;
  /**
   * Helper copy rendered below the heading.
   */
  helperText?: string;
  /**
   * Quick-select presets for common ranges.
   */
  presets?: DateRangePreset[];
}

const buildValue = (value?: DateRangeValue): DateRangeValue => ({
  startDate: value?.startDate ?? '',
  endDate: value?.endDate ?? '',
});

/**
 * Dual date input component tailored for filter bars and dashboards. Supports
 * controlled and uncontrolled usage with quick-select presets for common ranges.
 */
export const DateRange: React.FC<DateRangeProps> = ({
  value,
  defaultValue,
  onChange,
  label,
  helperText,
  presets,
  className,
  ...props
}) => {
  const [internalValue, setInternalValue] = React.useState<DateRangeValue>(buildValue(defaultValue));
  const resolvedValue = value ? buildValue(value) : internalValue;

  const updateValue = (next: DateRangeValue) => {
    onChange?.(next);
    if (!value) {
      setInternalValue(next);
    }
  };

  const handleDateChange = (key: keyof DateRangeValue) => (event: React.ChangeEvent<HTMLInputElement>) => {
    updateValue({ ...resolvedValue, [key]: event.target.value });
  };

  const handlePreset = (preset: DateRangePreset) => {
    updateValue({ startDate: preset.startDate, endDate: preset.endDate });
  };

  return (
    <div className={cx(s.wrapper, className)} data-lyfeguard="DateRange" {...props}>
      {(label || helperText) && (
        <div className={s.header}>
          <div>
            {label && <div className={s.label}>{label}</div>}
            {helperText && <div className={s.helper}>{helperText}</div>}
          </div>
        </div>
      )}

      <div className={s.fields}>
        <label className={s.inputLabel}>
          <span>Start date</span>
          <input
            className={s.input}
            type="date"
            value={resolvedValue.startDate}
            onChange={handleDateChange('startDate')}
          />
        </label>
        <label className={s.inputLabel}>
          <span>End date</span>
          <input
            className={s.input}
            type="date"
            value={resolvedValue.endDate}
            onChange={handleDateChange('endDate')}
          />
        </label>
      </div>

      {presets && presets.length > 0 && (
        <div className={s.presets} aria-label="Date presets">
          {presets.map((preset) => (
            <button
              key={preset.label}
              type="button"
              className={s.preset}
              onClick={() => handlePreset(preset)}
            >
              {preset.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
