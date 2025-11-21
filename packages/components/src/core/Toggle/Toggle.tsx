import React, { useState } from 'react';
import * as s from './Toggle.css';
import { vars } from '../../globals.css';

export interface ToggleProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  /**
   * Whether the toggle is in the on (true) or off (false) position.
   * If not provided, the component will manage its own state.
   */
  checked?: boolean;
  /**
   * Handler called when the state changes. Receives the new boolean value.
   */
  onChange?: (checked: boolean) => void;
  /**
   * Optional label displayed next to the switch.
   */
  label?: string;
}

/**
 * Toggle component
 *
 * A simple on/off switch using a button element. It supports controlled and
 * uncontrolled usage. The track and handle colours are updated based on
 * whether the switch is on or off. Because this uses a button, it remains
 * accessible via keyboard navigation.
 */
export const Toggle: React.FC<ToggleProps> = ({ checked, onChange, label, ...props }) => {
  const [internal, setInternal] = useState(false);
  const isControlled = checked !== undefined;
  const isOn = isControlled ? checked : internal;
  const handleToggle = () => {
    const newState = !isOn;
    if (!isControlled) setInternal(newState);
    onChange?.(newState);
  };
  return (
    <button
      type="button"
      onClick={handleToggle}
      className={s.container}
      {...props}
    >
      <span
        className={s.track}
        style={{ backgroundColor: isOn ? vars.color.brand500 : vars.color.neutral400 }}
      >
        <span
          className={s.handle}
          style={{ transform: isOn ? 'translateX(20px)' : 'translateX(0)' }}
        />
      </span>
      {label && <span className={s.label}>{label}</span>}
    </button>
  );
};