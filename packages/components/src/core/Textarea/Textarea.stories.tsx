import type { Meta, StoryObj } from '@storybook/react';
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

export const Default: Story = {
  args: {
    label: 'Message',
    placeholder: 'Enter your message here'
  }
};
