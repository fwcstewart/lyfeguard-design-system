import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { Button } from './Button';
import { BUTTON_VARIANTS } from './constants';

describe('Button component', () => {
  it('renders the provided children', () => {
    render(<Button>Click me</Button>);
    expect(screen.queryByText('Click me')).not.toBeNull();
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Press</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('provides data attributes for variant and size', () => {
    render(
      <Button variant="secondary" size="lg">
        Secondary Large
      </Button>
    );

    const button = screen.getByRole('button');
    expect(button.getAttribute('data-variant')).toBe('secondary');
    expect(button.getAttribute('data-size')).toBe('lg');
    expect(button.hasAttribute('data-state')).toBe(false);
  });

  it('sets loading as a disabled state', () => {
    render(<Button isLoading>Loading</Button>);
    const button = screen.getByRole('button');
    expect(button.disabled).toBe(true);
    expect(button.getAttribute('data-state')).toBe('loading');
    expect(button).toHaveAttribute('aria-disabled', 'true');
  });

  it('exposes focus ring token through CSS variable', () => {
    render(
      <Button data-state="focus" variant="primary">
        Focusable
      </Button>
    );

    const button = screen.getByRole('button');
    expect(button.style.getPropertyValue('--button-focus-shadow')).toBe(
      BUTTON_VARIANTS.primary.focusShadow
    );
  });

  it('supports explicit data-state overrides', () => {
    render(
      <Button data-state="active" variant="tertiary">
        Active
      </Button>
    );

    const button = screen.getByRole('button');
    expect(button.getAttribute('data-state')).toBe('active');
    expect(button.disabled).toBe(false);
  });

  it('marks disabled buttons with a disabled state attribute', () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByRole('button');
    expect(button.disabled).toBe(true);
    expect(button.getAttribute('data-state')).toBe('disabled');
    expect(button).toHaveAttribute('aria-disabled', 'true');
  });

  it('keeps icon and label alignment when loading', () => {
    const { container } = render(
      <Button isLoading iconLeft={<span aria-hidden>✓</span>}>
        Submit
      </Button>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
