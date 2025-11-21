import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { InfoIcon } from '@lyfeguard/icons';
import { Alert } from './Alert';

describe('Alert', () => {
  it('renders the title and message content', () => {
    render(
      <Alert variant="info" title="Heads up">
        Remember to save your progress.
      </Alert>,
    );

    expect(screen.getByText('Heads up')).toBeInTheDocument();
    expect(screen.getByText('Remember to save your progress.')).toBeInTheDocument();
  });

  it('exposes an alert role with assertive aria-live by default', () => {
    render(
      <Alert variant="success" title="Saved!">
        Your preferences were stored.
      </Alert>,
    );

    const alert = screen.getByRole('alert');
    expect(alert).toHaveAttribute('aria-live', 'assertive');
  });

  it('allows overriding the aria-live politeness setting', () => {
    render(
      <Alert variant="warning" ariaLive="polite">
        You can safely retry in a moment.
      </Alert>,
    );

    const alert = screen.getByRole('alert');
    expect(alert).toHaveAttribute('aria-live', 'polite');
  });

  it('renders an icon when provided', () => {
    const { container } = render(
      <Alert variant="error" icon={<InfoIcon />}>
        Something went wrong.
      </Alert>,
    );

    expect(container.querySelector('svg')).not.toBeNull();
  });
});
