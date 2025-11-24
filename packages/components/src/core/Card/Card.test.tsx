import '@testing-library/jest-dom/vitest';
import { describe, it, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from './Card';

describe('Card', () => {
  it('renders its children', () => {
    render(
      <Card>
        <p>Card content</p>
      </Card>
    );
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('renders header and footer content when provided', () => {
    render(
      <Card header="Header" footer="Footer">
        <p>Body</p>
      </Card>
    );

    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('Body')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });

  it('provides button semantics and keyboard activation when clickable', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(
      <Card clickable onClick={handleClick}>
        Actionable card
      </Card>
    );

    const card = screen.getByRole('button', { name: /actionable card/i });

    await user.tab();
    expect(card).toHaveFocus();

    await user.keyboard('{Enter}');
    await user.keyboard(' ');

    expect(handleClick).toHaveBeenCalledTimes(2);
  });

  it('exposes composable sections while keeping header/footer props', () => {
    render(
      <Card header="Header" footer="Footer">
        <CardHeader>Custom heading</CardHeader>
        <CardContent>Card content</CardContent>
        <CardFooter>Action</CardFooter>
      </Card>,
    );

    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('Custom heading')).toBeInTheDocument();
    expect(screen.getAllByText('Card content')).toHaveLength(1);
    expect(screen.getByText('Action')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });

  it('marks tone choice for accessibility tooling', () => {
    render(
      <Card tone="info" header="Tone header">
        Info tone
      </Card>,
    );

    const card = screen.getByText('Tone header').closest('[data-lyfeguard="Card"]');
    expect(card).not.toBeNull();
    expect(card).toHaveAttribute('data-tone', 'info');
  });
});