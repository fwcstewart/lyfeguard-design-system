import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { CurrencyInput } from './CurrencyInput';
import { vars } from '../../globals.css';

const meta: Meta<typeof CurrencyInput> = {
  title: 'Components/CurrencyInput',
  component: CurrencyInput,
  argTypes: {
    currency: {
      control: 'text',
    },
    decimals: {
      control: { type: 'number', min: 0, max: 4 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CurrencyInput>;

export const Default: Story = {
  args: {
    label: 'Amount',
    currency: '£',
    placeholder: '0.00',
  },
};

export const DifferentCurrencies: Story = {
  render: () => {
    const [gbp, setGbp] = React.useState('');
    const [usd, setUsd] = React.useState('');
    const [eur, setEur] = React.useState('');

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: vars.spacing[4] as unknown as string,
          padding: vars.spacing[6] as unknown as string,
        }}
      >
        <CurrencyInput
          label="British Pounds"
          currency="£"
          value={gbp}
          onChange={(e) => setGbp(e.target.value)}
        />
        <CurrencyInput
          label="US Dollars"
          currency="$"
          value={usd}
          onChange={(e) => setUsd(e.target.value)}
        />
        <CurrencyInput
          label="Euros"
          currency="€"
          value={eur}
          onChange={(e) => setEur(e.target.value)}
        />
      </div>
    );
  },
};

export const WithConstraints: Story = {
  args: {
    label: 'Amount',
    currency: '£',
    min: 0,
    max: 10000,
    helperText: 'Enter an amount between £0 and £10,000',
  },
};

export const WithError: Story = {
  args: {
    label: 'Amount',
    currency: '£',
    error: 'Amount exceeds maximum limit',
  },
};

export const CustomDecimals: Story = {
  args: {
    label: 'Amount (no decimals)',
    currency: '£',
    decimals: 0,
    placeholder: '0',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Amount',
    currency: '£',
    disabled: true,
    defaultValue: '1234.56',
  },
};

