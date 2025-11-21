import React from 'react';
import { generateId } from '../../helpers/aria';
import * as s from './Select.css';

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, children, id, ...props }, ref) => {
    const selectId = id ?? generateId('select');

    return (
      <div className={s.wrapper} data-lyfeguard="Select">
        {label && (
          <label className={s.label} htmlFor={selectId}>
            {label}
          </label>
        )}
        <select id={selectId} ref={ref} className={s.select} {...props}>
          {children}
        </select>
      </div>
    );
  }
);
Select.displayName = 'Select';
