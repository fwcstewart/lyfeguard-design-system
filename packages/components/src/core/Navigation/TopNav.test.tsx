import userEvent from '@testing-library/user-event';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { TopNav } from './TopNav';

describe('TopNav', () => {
  it('renders brand name when no logo is provided', () => {
    render(<TopNav brandName="MyBrand" links={[]} />);
    // Should render the brand name
    expect(screen.getByText('MyBrand')).toBeInTheDocument();
  });

  it('renders brand logo instead of brand name when brand node is provided', () => {
    render(
      <TopNav
        brand={<div>Logo</div>}
        brandName="Fallback"
        links={[]}
      />
    );
    // Should render the custom logo
    expect(screen.getByText('Logo')).toBeInTheDocument();
    // Should not render the fallback brandName
    expect(screen.queryByText('Fallback')).not.toBeInTheDocument();
  });

  it('renders links and triggers onClick handler for links with onClick', () => {
    const clickHandler = vi.fn();
    render(
      <TopNav
        links={[
          { label: 'Home', href: '/' },
          { label: 'Dashboard', onClick: clickHandler }
        ]}
      />
    );
    // The first link should have the correct href attribute
    const homeAnchor = screen.getByText('Home').closest('a');
    expect(homeAnchor).toHaveAttribute('href', '/');
    // Clicking the second link should call the onClick handler
    fireEvent.click(screen.getByText('Dashboard'));
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });

  it('renders actions on the right side', () => {
    render(<TopNav actions={<button>Action</button>} links={[]} />);
    expect(screen.getByText('Action')).toBeInTheDocument();
  });

  it('sets aria-current on the active link', () => {
    render(
      <TopNav
        links={[
          { label: 'Home', href: '/' },
          { label: 'Dashboard', href: '/dashboard', isActive: true },
        ]}
      />
    );

    expect(screen.getByText('Dashboard')).toHaveAttribute('aria-current', 'page');
    expect(screen.getByText('Home')).not.toHaveAttribute('aria-current');
  });

  it('supports arrow key navigation between links', async () => {
    const user = userEvent.setup();
    render(
      <TopNav
        links={[
          { label: 'Home', href: '/' },
          { label: 'Dashboard', href: '/dashboard' },
          { label: 'Settings', href: '/settings' },
        ]}
      />
    );

    const home = screen.getByText('Home');
    const dashboard = screen.getByText('Dashboard');
    const settings = screen.getByText('Settings');

    home.focus();
    await user.keyboard('{ArrowRight}');
    expect(dashboard).toHaveFocus();

    await user.keyboard('{ArrowRight}');
    expect(settings).toHaveFocus();

    await user.keyboard('{ArrowLeft}');
    expect(dashboard).toHaveFocus();

    await user.keyboard('{End}');
    expect(settings).toHaveFocus();

    await user.keyboard('{Home}');
    expect(home).toHaveFocus();
  });
});