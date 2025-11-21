import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { vars } from '../../globals.css';
import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Core/Textarea',
  component: Textarea,
  argTypes: {
    onChange: { action: 'changed' }
  }
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Light: Story = {
  args: {
    label: 'Message',
    placeholder: 'Enter your message here',
    helperText: 'Share additional context if needed.',
    maxLength: 120,
    showCharacterCount: true
  }
};

export const Dark: Story = {
  args: {
    label: 'Message',
    placeholder: 'Enter your message here',
    helperText: 'Share additional context if needed.',
    maxLength: 120,
    showCharacterCount: true,
    defaultValue: 'Dark mode feedback'
  },
  render: (args) => (
    <div
      className="dark"
      style={{
        background: vars.color.theme.background,
        color: vars.color.theme.text.primary,
        padding: vars.spacing[6] as unknown as string,
        display: 'inline-flex',
        width: '100%',
        maxWidth: '600px'
      }}
    >
      <Textarea {...args} />
    </div>
  )
};
