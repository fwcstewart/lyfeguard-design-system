import React, { useState } from 'react';
import { RadioGroup, RadioOption } from './RadioGroup';

export default {
  title: 'Core/RadioGroup',
  component: RadioGroup,
};

const options: RadioOption[] = [
  { value: 'visa', label: 'Visa' },
  { value: 'mastercard', label: 'MasterCard' },
  { value: 'amex', label: 'American Express' },
];

export const Uncontrolled = () => (
  <RadioGroup name="cards" label="Payment Method" options={options} />
);

export const Controlled = () => {
  const [value, setValue] = useState('visa');
  return (
    <RadioGroup
      name="cards"
      label="Payment Method"
      options={options}
      value={value}
      onChange={(v) => setValue(v)}
    />
  );
};