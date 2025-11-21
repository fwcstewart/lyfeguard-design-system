import React, { useState } from 'react';
import { DateInput } from './DateInput';

export default {
  title: 'Components/DateInput',
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

export const WithCalendar = () => (
  <div style={{ padding: 24, background: 'var(--color-theme-background)' }}>
    <DateInput label="Pick a date" defaultValue="2024-06-15" />
  </div>
);
