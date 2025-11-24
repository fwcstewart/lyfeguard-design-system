import { describe, it, expect, vi, afterEach } from 'vitest';
import { act, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Modal } from './Modal';

const focusableSelectors = [
  'a[href]',
  'button:not([disabled])',
  'textarea:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(', ');

describe('Modal accessibility', () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it('applies labelledby and describedby when title and description are provided', () => {
    render(
      <Modal open onClose={() => undefined} title="Security check" description="We keep your data protected.">
        <p>Body content</p>
      </Modal>,
    );

    const dialog = screen.getByRole('dialog', { name: 'Security check' });
    const title = screen.getByText('Security check');
    const description = screen.getByText('We keep your data protected.');

    expect(dialog.getAttribute('aria-labelledby')).toBe(title.id);
    expect(dialog.getAttribute('aria-describedby')).toBe(description.id);
  });

  it('keeps focus trapped within the modal when tabbing', () => {
    vi.useFakeTimers();

    render(
      <Modal open onClose={() => undefined} title="Focus trap" description="Keyboard users stay inside.">
        <button type="button">First action</button>
        <button type="button">Second action</button>
      </Modal>,
    );

    act(() => {
      vi.runAllTimers();
    });

    const dialog = screen.getByRole('dialog');
    const focusableElements = Array.from(dialog.querySelectorAll<HTMLElement>(focusableSelectors));
    const first = focusableElements[0];
    const last = focusableElements[focusableElements.length - 1];

    first.focus();
    fireEvent.keyDown(document, { key: 'Tab', shiftKey: true });
    expect(document.activeElement).toBe(last);

    last.focus();
    fireEvent.keyDown(document, { key: 'Tab' });
    expect(document.activeElement).toBe(first);
  });

  it('respects reduced motion preference by skipping exit timers', async () => {
    vi.useFakeTimers();
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    const matchMediaSpy = vi.spyOn(window, 'matchMedia').mockImplementation((query) => ({
      matches: query === '(prefers-reduced-motion: reduce)',
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    }) as unknown as MediaQueryList);

    const onClose = vi.fn();
    render(
      <Modal open onClose={onClose} title="Reduced motion">
        <p>Body</p>
      </Modal>,
    );

    const overlay = document.querySelector('[data-lyfeguard="Modal"]');
    await user.click(overlay as HTMLElement);

    expect(onClose).toHaveBeenCalledTimes(1);
    expect(vi.getTimerCount()).toBe(0);
    matchMediaSpy.mockRestore();
  });

  it('only closes on overlay click when allowed', async () => {
    vi.useFakeTimers();
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime });
    const onClose = vi.fn();
    render(
      <Modal open onClose={onClose} title="Overlay control" disableOverlayClick>
        <button type="button">Close inside</button>
      </Modal>,
    );

    const overlay = document.querySelector('[data-lyfeguard="Modal"]');
    await user.click(overlay as HTMLElement);
    expect(onClose).not.toHaveBeenCalled();

    await user.keyboard('{Escape}');
    act(() => {
      vi.runAllTimers();
    });
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
