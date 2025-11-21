import React, { useState } from 'react';
import { DateInput } from './DateInput';

export default {
  title: 'Core/DateInput',
  component: DateInput,
};

export const Default = () => <DateInput label="Date of birth" />;

export const Controlled = () => {
  const [value, setValue] = useState('');
  return (
    <DateInput
      label="Select date"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};