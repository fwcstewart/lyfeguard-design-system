import React, { useState } from 'react';
import * as s from './Toggle.css';

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
export const Toggle: React.FC<ToggleProps> = ({
  checked,
  onChange,
  label,
  onKeyDown,
  ...props
}) => {
  const [internal, setInternal] = useState(false);
  const isControlled = checked !== undefined;
  const isOn = isControlled ? checked : internal;

  const handleToggle = () => {
    const newState = !isOn;
    if (!isControlled) setInternal(newState);
    onChange?.(newState);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    onKeyDown?.(event);
    if (event.defaultPrevented) return;

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleToggle();
    }
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      onKeyDown={handleKeyDown}
      className={s.container}
      data-lyfeguard="Toggle"
      role="switch"
      aria-checked={isOn}
      {...props}
    >
      <span className={s.track}>
        <span className={s.handle} />
      </span>
      {label && <span className={s.label}>{label}</span>}
    </button>
  );
};
