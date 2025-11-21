import type { Meta, StoryObj } from '@storybook/react';
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

export const Default: Story = {
  args: {
    label: 'Name',
    placeholder: 'Enter your name'
  }
};

export const WithHelper: Story = {
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    helperText: 'We’ll never share your email.'
  }
};

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    error: 'Please enter a valid email address'
  }
};
