import React, { useState } from 'react';
import { Toggle } from './Toggle';

export default {
  title: 'Core/Toggle',
  component: Toggle,
};

export const Uncontrolled = () => <Toggle label="Enable notifications" />;

export const Controlled = () => {
  const [value, setValue] = useState(false);
  return (
    <Toggle
      label={value ? 'On' : 'Off'}
      checked={value}
      onChange={setValue}
    />
  );
};