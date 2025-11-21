import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { vars } from '../../globals.css';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Core/Input',
  component: Input,
  argTypes: {
    onChange: { action: 'changed' }
  }
};

export default meta;
type Story = StoryObj<typeof Input>;

const lightStackStyles = {
  display: 'grid',
  gap: vars.spacing[4],
  width: 'min(100%, 360px)',
};

const darkStackStyles = {
  ...lightStackStyles,
  padding: vars.spacing[5],
  borderRadius: vars.radius.md,
  background: vars.color.theme.surface,
  color: vars.color.theme.text.primary,
};

export const LightStates: Story = {
  render: () => (
    <div style={lightStackStyles}>
      <Input label="Name" placeholder="Enter your name" />
      <Input
        label="Email"
        placeholder="you@example.com"
        helperText="We’ll never share your email."
      />
      <Input
        label="Email"
        placeholder="you@example.com"
        error="Please enter a valid email address"
      />
      <Input label="Disabled" placeholder="Disabled input" disabled />
    </div>
  ),
};

export const DarkStates: Story = {
  render: () => (
    <div className="dark" style={darkStackStyles}>
      <Input label="Name" placeholder="Enter your name" />
      <Input
        label="Email"
        placeholder="you@example.com"
        helperText="We’ll never share your email."
      />
      <Input
        label="Email"
        placeholder="you@example.com"
        error="Please enter a valid email address"
      />
      <Input label="Disabled" placeholder="Disabled input" disabled />
    </div>
  ),
};
