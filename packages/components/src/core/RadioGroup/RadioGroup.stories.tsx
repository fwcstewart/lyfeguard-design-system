import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { RadioGroup, RadioOption } from './RadioGroup';
import { vars } from '../../globals.css';

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
};

export default meta;

const options: RadioOption[] = [
  { value: 'visa', label: 'Visa' },
  { value: 'mastercard', label: 'MasterCard' },
  { value: 'amex', label: 'American Express' },
];

export const Default: StoryObj<typeof RadioGroup> = {
  render: () => (
    <div
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
        name="cards"
        label="Payment Method"
        helperText="Select the card you prefer to use for checkout."
        options={options}
        defaultValue="visa"
      />
      <RadioGroup
        name="cards-disabled"
        label="Disabled group"
        helperText="Disabled radios inherit theme styles."
        options={options.map((option) => ({ ...option, disabled: true }))}
        defaultValue="visa"
      />
    </div>
  ),
};

export const Controlled: StoryObj<typeof RadioGroup> = {
  render: () => {
    const [value, setValue] = useState('visa');
    return (
      <RadioGroup
        name="cards-controlled"
        label="Payment Method"
        helperText="Changes are synced with external state."
        options={options}
        value={value}
        onChange={(v) => setValue(v)}
      />
    );
  },
};