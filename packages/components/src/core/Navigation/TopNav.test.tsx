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
});