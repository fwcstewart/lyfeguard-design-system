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
      <Select label="Country" helperText="Matches legacy neutral surface and mint focus ring">
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

export const HelperAndError: Story = {
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
      <Select label="Time zone" helperText="Used for scheduling notifications">
        <option value="">Select a time zone</option>
        <option value="gmt">GMT</option>
        <option value="est">EST</option>
        <option value="pst">PST</option>
      </Select>
      <Select label="Time zone" error="Selection required">
        <option value="">Select a time zone</option>
        <option value="gmt">GMT</option>
        <option value="est">EST</option>
        <option value="pst">PST</option>
      </Select>
    </div>
  ),
};

export const WhiteAndReadOnly: Story = {
  render: () => (
    <div
      style={{
        background: vars.color.theme.background,
        color: vars.color.theme.text.primary,
        padding: vars.spacing[5] as unknown as string,
        display: 'flex',
        flexDirection: 'column',
        gap: vars.spacing[3],
        maxWidth: '420px',
      }}
    >
      <Select label="White surface" variant="white">
        <option value="">Select an option</option>
        <option value="one">One</option>
        <option value="two">Two</option>
      </Select>
      <div className="dark" style={{ padding: vars.spacing[4] as unknown as string, borderRadius: vars.radius.md, background: vars.color.brand900 }}>
        <Select label="Readonly (mirrors legacy surface)" readOnly defaultValue="uk" helperText="Dark mode token mapping" variant="white">
          <option value="uk">United Kingdom</option>
          <option value="us">United States</option>
          <option value="ie">Ireland</option>
        </Select>
      </div>
    </div>
  ),
};
