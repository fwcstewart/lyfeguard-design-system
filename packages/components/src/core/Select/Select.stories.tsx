import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Core/Select',
  component: Select,
  argTypes: {
    onChange: { action: 'changed' }
  }
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: () => (
    <Select label="Country">
      <option value="">Select a country</option>
      <option value="uk">United Kingdom</option>
      <option value="us">United States</option>
      <option value="ie">Ireland</option>
    </Select>
  )
};
