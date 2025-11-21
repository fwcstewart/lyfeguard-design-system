import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';
import { vars } from '../../globals.css';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    onChange: { action: 'changed' }
  }
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: () => (
    <div
      style={{
        background: vars.color.theme.background,
        color: vars.color.theme.text.primary,
        padding: vars.spacing[5] as unknown as string,
        display: 'inline-flex',
        gap: vars.spacing[3],
      }}
    >
      <Select label="Country">
        <option value="">Select a country</option>
        <option value="uk">United Kingdom</option>
        <option value="us">United States</option>
        <option value="ie">Ireland</option>
      </Select>
      <Select label="Disabled" disabled>
        <option value="">Select a country</option>
        <option value="uk">United Kingdom</option>
        <option value="us">United States</option>
        <option value="ie">Ireland</option>
      </Select>
    </div>
  ),
};
