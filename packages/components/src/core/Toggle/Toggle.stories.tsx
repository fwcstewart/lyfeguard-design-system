import React, { useState } from 'react';
import { Toggle } from './Toggle';
import { vars } from '../../globals.css';

export default {
  title: 'Core/Toggle',
  component: Toggle,
};

export const LightTheme = () => {
  const [value, setValue] = useState(false);
  return (
    <div
      style={{
        background: vars.color.theme.surface,
        color: vars.color.theme.text.primary,
        padding: vars.spacing[6] as unknown as string,
        display: 'inline-flex',
        flexDirection: 'column',
        gap: vars.spacing[3],
      }}
    >
      <Toggle label={value ? 'Notifications on' : 'Notifications off'} checked={value} onChange={setValue} />
      <Toggle label="Light surface unchecked" />
      <Toggle label="Disabled toggle" disabled />
    </div>
  );
};

export const DarkTheme = () => {
  const [value, setValue] = useState(true);
  return (
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
      <Toggle label={value ? 'Notifications on' : 'Notifications off'} checked={value} onChange={setValue} />
      <Toggle label="Dark surface unchecked" />
      <Toggle label="Disabled toggle" disabled />
    </div>
  );
};
