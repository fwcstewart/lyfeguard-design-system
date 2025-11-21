import React from 'react';
import * as s from './TopNav.css';

export interface NavLinkItem {
  /**
   * Label for the navigation link.
   */
  label: string;
  /**
   * Destination URL for the link. If omitted, onClick must be provided.
   */
  href?: string;
  /**
   * Click handler for the link. Overrides default link behaviour.
   */
  onClick?: () => void;
}

export interface TopNavProps {
  /**
   * A React node representing your logo or brand. If omitted, brandName will be used.
   */
  brand?: React.ReactNode;
  /**
   * Text fallback for the brand/logo.
   */
  brandName?: string;
  /**
   * Array of navigation links to display in the middle of the nav bar.
   */
  links?: NavLinkItem[];
  /**
   * Optional actions to display on the right side (e.g. user menu, icons).
   */
  actions?: React.ReactNode;
}

/**
 * Top navigation bar for the Lyfeguard web application. Renders a brand, a list of
 * navigation links, and optional actions on the right. Use this component
 * within your application shell.
 */
export const TopNav: React.FC<TopNavProps> = ({ brand, brandName = 'Lyfeguard', links = [], actions }) => {
  return (
    <header className={s.topNav}>
      <div className={s.left}>
        {brand ? <div className={s.logo}>{brand}</div> : <div className={s.logo}>{brandName}</div>}
        <nav className={s.navLinks}>
          {links.map((link, idx) => {
            const props: React.HTMLAttributes<HTMLAnchorElement> = {};
            if (link.onClick) {
              props.onClick = (e) => {
                e.preventDefault();
                link.onClick?.();
              };
            }
            return (
              <a
                key={idx}
                href={link.href || '#'}
                className={s.navLink}
                {...props}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
      </div>
      <div className={s.right}>{actions}</div>
    </header>
  );
};

TopNav.displayName = 'TopNav';