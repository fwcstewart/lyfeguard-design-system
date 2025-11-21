import React from 'react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { Toast } from './Toast';

afterEach(() => {
  vi.useRealTimers();
});

describe('Toast', () => {
  it('announces toast messages politely', () => {
    render(
      <Toast open onClose={() => undefined}>
        Accessible notice
      </Toast>
    );

    const status = screen.getByRole('status');
    expect(status).toHaveAttribute('aria-live', 'polite');
    expect(status).toHaveAttribute('aria-atomic', 'true');
  });

  it('auto dismisses after the provided duration', () => {
    vi.useFakeTimers();
    const onClose = vi.fn();

    render(
      <Toast open onClose={onClose} duration={2000}>
        Timed toast
      </Toast>
    );

    act(() => {
      vi.advanceTimersByTime(1900);
    });
    expect(onClose).not.toHaveBeenCalled();

    act(() => {
      vi.advanceTimersByTime(400);
    });

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('does not auto dismiss when duration is zero', () => {
    vi.useFakeTimers();
    const onClose = vi.fn();

    render(
      <Toast open onClose={onClose} duration={0}>
        Persistent toast
      </Toast>
    );

    act(() => {
      vi.advanceTimersByTime(10000);
    });

    expect(onClose).not.toHaveBeenCalled();
    expect(screen.getByText('Persistent toast')).toBeInTheDocument();
  });
});
