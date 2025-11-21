import React, { useState } from 'react';
import { DateInput } from './DateInput';

export default {
  title: 'Core/DateInput',
  component: DateInput,
};

export const Default = () => <DateInput label="Date of birth" />;

export const Controlled = () => {
  const [value, setValue] = useState('2024-06-15');
  return (
    <DateInput
      label="Select date"
      value={value}
      onChange={(next) => setValue(next)}
      aria-label="Controlled date input"
    />
  );
};

export const LightCalendar = () => <DateInput label="Pick a date" defaultValue="2024-06-15" />;

export const DarkCalendar = () => (
  <div className="dark" style={{ padding: 24, background: 'var(--color-neutral-900)' }}>
    <DateInput label="Pick a date" defaultValue="2024-12-20" />
  </div>
);
