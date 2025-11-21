import React, { useState } from 'react';
import { RadioGroup, RadioOption } from './RadioGroup';
import { vars } from '../../globals.css';

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

export const DarkMode = () => (
  <div
    className="dark"
    style={{
      background: vars.color.theme.background,
      color: vars.color.theme.text.primary,
      padding: vars.spacing[6] as unknown as string,
      display: 'inline-flex',
      flexDirection: 'column',
      gap: vars.spacing[3],
    }}
  >
    <RadioGroup
      name="cards-dark"
      label="Payment Method"
      options={options}
      defaultValue="mastercard"
    />
    <RadioGroup
      name="cards-dark-disabled"
      label="Disabled group"
      options={options.map((option) => ({ ...option, disabled: true }))}
      defaultValue="visa"
    />
  </div>
);