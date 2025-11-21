import React, { useState } from 'react';
import { Checkbox } from './Checkbox';
import { vars } from '../../globals.css';

export default {
  title: 'Core/Checkbox',
  component: Checkbox,
};

export const Uncontrolled = () => <Checkbox label="Accept terms" defaultChecked />;

export const Controlled = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox
      label={checked ? 'Checked' : 'Unchecked'}
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  );
};

export const DarkMode = () => (
  <div
    className="dark"
    style={{
      background: vars.color.theme.background,
      color: vars.color.theme.text.primary,
      padding: vars.spacing[6] as unknown as string,
      display: 'inline-flex',
      flexDirection: 'column',
      gap: vars.spacing[3],
    }}
  >
    <Checkbox label="Dark surface primary" defaultChecked />
    <Checkbox label="Dark surface unchecked" />
    <Checkbox label="Disabled state" disabled />
  </div>
);