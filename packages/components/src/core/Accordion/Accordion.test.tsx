import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { Accordion, AccordionItem } from './Accordion';

const items: AccordionItem[] = [
  { id: 'one', title: 'First', content: 'First content' },
  { id: 'two', title: 'Second', content: 'Second content' },
];

describe('Accordion', () => {
  it('renders items and toggles open state', () => {
    render(<Accordion items={items} />);

    expect(screen.queryByText('First content')).not.toBeVisible();

    fireEvent.click(screen.getByRole('button', { name: 'First' }));

    expect(screen.getByText('First content')).toBeVisible();
  });

  it('supports multiple open items', () => {
    render(<Accordion items={items} multiple defaultOpenItems={['one']} />);

    fireEvent.click(screen.getByRole('button', { name: 'Second' }));

    expect(screen.getByText('First content')).toBeVisible();
    expect(screen.getByText('Second content')).toBeVisible();
  });

  it('calls onChange when toggled', () => {
    const handleChange = vi.fn();
    render(<Accordion items={items} onChange={handleChange} />);

    fireEvent.click(screen.getByRole('button', { name: 'First' }));

    expect(handleChange).toHaveBeenCalledWith(['one']);
  });

  it('respects disabled items', () => {
    render(<Accordion items={[...items, { id: 'three', title: 'Disabled', content: 'x', disabled: true }]} />);

    fireEvent.click(screen.getByRole('button', { name: 'Disabled' }));

    expect(screen.queryByText('x')).not.toBeVisible();
  });
});
