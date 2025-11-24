import React, { useId } from 'react';
import * as s from './CurrencyInput.css';
import { Input, InputProps } from '../Input/Input';

export interface CurrencyInputProps
  extends Omit<InputProps, 'type' | 'prefix'> {
  /**
   * Currency symbol to display
   * @default '£'
   */
  currency?: string;
  /**
   * Minimum value allowed
   */
  min?: number;
  /**
   * Maximum value allowed
   */
  max?: number;
  /**
   * Number of decimal places
   * @default 2
   */
  decimals?: number;
}

/**
 * CurrencyInput component for entering monetary values with currency symbol prefix.
 * Formats the value and handles decimal places automatically.
 */
export const CurrencyInput = React.forwardRef<HTMLInputElement, CurrencyInputProps>(
  (
    {
      currency = '£',
      decimals = 2,
      min,
      max,
      value,
      defaultValue,
      onChange,
      onBlur,
      ...props
    },
    ref,
  ) => {
    const formatValue = (val: string | number | undefined): string => {
      if (val === undefined || val === null || val === '') return '';
      const num = typeof val === 'string' ? parseFloat(val.replace(/[^0-9.-]/g, '')) : val;
      if (isNaN(num)) return '';
      return num.toFixed(decimals);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value.replace(/[^0-9.-]/g, '');
      const numValue = parseFloat(inputValue);
      
      if (inputValue === '' || inputValue === '-') {
        onChange?.(e);
        return;
      }

      if (isNaN(numValue)) return;

      if (min !== undefined && numValue < min) return;
      if (max !== undefined && numValue > max) return;

      const formatted = formatValue(numValue);
      onChange?.({
        ...e,
        target: {
          ...e.target,
          value: formatted,
        },
      } as React.ChangeEvent<HTMLInputElement>);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      const formatted = formatValue(e.target.value);
      if (formatted !== e.target.value) {
        e.target.value = formatted;
      }
      onBlur?.(e);
    };

    return (
      <Input
        ref={ref}
        {...props}
        type="text"
        inputMode="decimal"
        prefix={<span className={s.currencySymbol}>{currency}</span>}
        value={value}
        defaultValue={defaultValue}
        onChange={handleChange}
        onBlur={handleBlur}
        data-lyfeguard="CurrencyInput"
      />
    );
  }
);
CurrencyInput.displayName = 'CurrencyInput';

