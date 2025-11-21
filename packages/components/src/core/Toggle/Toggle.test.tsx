import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Toggle } from './Toggle';

describe('Toggle', () => {
  it('updates aria-checked when clicked', () => {
    render(<Toggle label="Email alerts" />);

    const toggle = screen.getByRole('switch');
    expect(toggle).toHaveAttribute('aria-checked', 'false');

    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute('aria-checked', 'true');
  });

  it('supports keyboard toggling with space and enter', () => {
    render(<Toggle label="Keyboard toggle" />);

    const toggle = screen.getByRole('switch');

    fireEvent.keyDown(toggle, { key: ' ' });
    expect(toggle).toHaveAttribute('aria-checked', 'true');

    fireEvent.keyDown(toggle, { key: 'Enter' });
    expect(toggle).toHaveAttribute('aria-checked', 'false');
  });

  it('calls onChange with the next state', () => {
    const handleChange = vi.fn();
    render(<Toggle label="Controlled" checked={false} onChange={handleChange} />);

    const toggle = screen.getByRole('switch');
    fireEvent.click(toggle);

    expect(handleChange).toHaveBeenCalledWith(true);
  });
});
