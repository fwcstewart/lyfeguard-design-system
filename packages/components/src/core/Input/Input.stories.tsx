import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { vars } from '../../globals.css';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    onChange: { action: 'changed' }
  }
};

export default meta;
type Story = StoryObj<typeof Input>;

export const States: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gap: vars.spacing[4],
        width: 'min(100%, 360px)',
        padding: vars.spacing[5],
        borderRadius: vars.radius.md,
        background: vars.color.neutral100,
        color: vars.color.theme.text.primary,
      }}
    >
      <Input label="Name" placeholder="Enter your name" />
      <Input
        label="Email"
        placeholder="you@example.com"
        helperText="We'll never share your email."
      />
      <Input
        label="Email"
        placeholder="you@example.com"
        error="Please enter a valid email address"
      />
      <Input label="Read only" placeholder="Fixed value" readOnly defaultValue="Static" />
      <Input label="White" placeholder="Lighter surface" variant="white" />
      <Input label="Disabled" placeholder="Disabled input" disabled variant="white" />
      <Input
        label="Amount"
        prefix="£"
        suffix="GBP"
        placeholder="0.00"
        helperText="Currency is locked to GBP"
      />
      <Input
        label="Referral code"
        placeholder="Add code"
        maxLength={12}
        showCharacterCount
        helperText="Optional"
      />
    </div>
  ),
};
