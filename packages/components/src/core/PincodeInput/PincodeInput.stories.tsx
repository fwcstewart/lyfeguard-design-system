import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { PincodeInput } from './PincodeInput';
import { vars } from '../../globals.css';

const meta: Meta<typeof PincodeInput> = {
  title: 'Components/PincodeInput',
  component: PincodeInput,
  argTypes: {
    length: {
      control: { type: 'number', min: 4, max: 8 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof PincodeInput>;

export const Default: Story = {
  args: {
    label: 'Enter PIN',
    length: 6,
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Enter PIN',
    length: 6,
    helperText: 'Enter the 6-digit PIN sent to your email',
  },
};

export const WithError: Story = {
  args: {
    label: 'Enter PIN',
    length: 6,
    error: 'Invalid PIN code',
  },
};

export const CustomLength: Story = {
  render: () => {
    const [value, setValue] = React.useState('');
    return (
      <div style={{ padding: vars.spacing[6] as unknown as string }}>
        <PincodeInput
          label="4-digit PIN"
          length={4}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onComplete={(val) => {
            console.log('PIN complete:', val);
          }}
        />
        <p style={{ marginTop: vars.spacing[4] as unknown as string }}>
          Value: {value || '(empty)'}
        </p>
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    label: 'Enter PIN',
    length: 6,
    disabled: true,
    defaultValue: '123456',
  },
};

