import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Checkbox } from './Checkbox';
import { vars } from '../../globals.css';

const meta: Meta<typeof Checkbox> = {
  title: 'Core/Checkbox',
  component: Checkbox,
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const LightSurface: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: vars.spacing[3] as unknown as string,
      }}
    >
      <Checkbox label="Unchecked" />
      <Checkbox label="Checked" defaultChecked />
      <Checkbox label="Disabled" disabled />
    </div>
  ),
};

export const DarkSurface: Story = {
  render: () => (
    <div
      className="dark"
      style={{
        background: vars.color.theme.background,
        color: vars.color.theme.text.primary,
        padding: vars.spacing[6] as unknown as string,
        display: 'inline-flex',
        flexDirection: 'column',
        gap: vars.spacing[3] as unknown as string,
        borderRadius: vars.radius.md,
      }}
    >
      <Checkbox label="Checked on dark" defaultChecked />
      <Checkbox label="Unchecked on dark" />
      <Checkbox label="Disabled on dark" disabled />
    </div>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: vars.spacing[2] as unknown as string,
          maxWidth: '240px',
        }}
      >
        <Checkbox
          label={checked ? 'Checked' : 'Unchecked'}
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <p
          style={{
            margin: 0,
            fontFamily: vars.font.sans,
            fontSize: vars.font.size.body.sm,
            lineHeight: vars.font.lineHeight.body.sm,
          }}
        >
          Use the checkbox or keyboard (Space) to toggle state.
        </p>
      </div>
    );
  },
};
