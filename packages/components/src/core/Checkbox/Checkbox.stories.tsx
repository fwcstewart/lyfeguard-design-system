import React, { useState } from 'react';
import { Checkbox } from './Checkbox';

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