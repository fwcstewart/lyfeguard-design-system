import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { vars } from '../../globals.css';
import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  argTypes: {
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    label: 'Message',
    placeholder: 'Enter your message here',
    helperText: 'Share additional context if needed.',
    maxLength: 120,
    showCharacterCount: true,
  },
};

export const WithContainer: Story = {
  render: (args) => (
    <div
      style={{
        background: vars.color.theme.background,
        color: vars.color.theme.text.primary,
        padding: vars.spacing[6] as unknown as string,
        display: 'inline-flex',
        width: '100%',
        maxWidth: '600px'
      }}
    >
      <Textarea
        label="Message"
        placeholder="Enter your message here"
        helperText="Share additional context if needed."
        maxLength={120}
        showCharacterCount={true}
        {...args}
      />
    </div>
  ),
};

export const White: Story = {
  args: {
    label: 'Message',
    placeholder: 'Enter your message here',
    helperText: 'White surface textarea',
    variant: 'white',
  },
};

export const ReadonlyAndDisabled: Story = {
  render: (args) => (
    <div
      style={{
        display: 'grid',
        gap: vars.spacing[5] as unknown as string,
        maxWidth: '600px',
      }}
    >
      <Textarea
        label="Read only"
        defaultValue="This value cannot be edited"
        readOnly
        {...args}
      />
      <Textarea
        label="Disabled"
        placeholder="Disabled textarea"
        disabled
        helperText="Disabled state mirrors legacy surface"
        {...args}
      />
    </div>
  ),
};
