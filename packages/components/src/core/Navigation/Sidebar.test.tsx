import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  it('marks the active item with aria-current', () => {
    render(<Sidebar items={[{ label: 'Home' }, { label: 'Documents' }]} activeIndex={1} />);

    expect(screen.getByRole('button', { name: 'Documents' })).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('button', { name: 'Home' })).not.toHaveAttribute('aria-current');
  });

  it('supports keyboard navigation with arrow keys', async () => {
    const user = userEvent.setup();
    render(
      <Sidebar
        items={[
          { label: 'Home' },
          { label: 'Documents' },
          { label: 'Contacts' },
        ]}
      />
    );

    const home = screen.getByRole('button', { name: 'Home' });
    const documents = screen.getByRole('button', { name: 'Documents' });
    const contacts = screen.getByRole('button', { name: 'Contacts' });

    await user.tab();
    await user.keyboard('{ArrowDown}');
    expect(documents).toHaveFocus();

    await user.keyboard('{ArrowDown}');
    expect(contacts).toHaveFocus();

    await user.keyboard('{ArrowUp}');
    expect(documents).toHaveFocus();

    await user.keyboard('{End}');
    expect(contacts).toHaveFocus();

    await user.keyboard('{Home}');
    expect(home).toHaveFocus();
  });

  it('keeps a single tabbable item using roving tabindex', async () => {
    const user = userEvent.setup();
    render(
      <Sidebar
        items={[
          { label: 'Home' },
          { label: 'Documents' },
          { label: 'Contacts' },
        ]}
      />,
    );

    await user.tab();

    const home = screen.getByRole('button', { name: 'Home' });
    const documents = screen.getByRole('button', { name: 'Documents' });

    expect(home).toHaveFocus();
    expect(documents).toHaveAttribute('tabIndex', '-1');

    await user.keyboard('{ArrowDown}');
    expect(documents).toHaveFocus();
    expect(documents).toHaveAttribute('tabIndex', '0');
  });

  it('invokes onSelect when activating items', async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    render(<Sidebar items={[{ label: 'Home' }, { label: 'Documents' }]} onSelect={onSelect} />);

    const documents = screen.getByText('Documents');
    await user.click(documents);

    expect(onSelect).toHaveBeenCalledWith(1);
  });
});
