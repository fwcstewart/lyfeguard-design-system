import React from 'react';
import * as s from './Select.css';

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, children, ...props }, ref) => {
    return (
      <div className={s.wrapper} data-lyfeguard="Select">
        {label && <label className={s.label}>{label}</label>}
        <select ref={ref} className={s.select} {...props}>
          {children}
        </select>
      </div>
    );
  }
);
Select.displayName = 'Select';
