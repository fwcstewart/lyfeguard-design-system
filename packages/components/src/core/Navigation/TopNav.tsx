import React, { useEffect, useMemo, useRef, useState } from 'react';
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
  /**
   * Whether this link is currently active
   */
  isActive?: boolean;
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
  const linkRefs = useRef<HTMLAnchorElement[]>([]);
  const initialFocusIndex = useMemo(() => {
    if (!links.length) return -1;
    const activeIndex = links.findIndex((link) => link.isActive);
    return activeIndex >= 0 ? activeIndex : 0;
  }, [links]);

  const [focusIndex, setFocusIndex] = useState<number>(initialFocusIndex);

  useEffect(() => {
    setFocusIndex((current) => {
      if (!links.length) return -1;
      const activeIndex = links.findIndex((link) => link.isActive);
      const nextIndex = activeIndex >= 0 ? activeIndex : Math.max(0, Math.min(current, links.length - 1));
      return nextIndex;
    });
  }, [links]);

  const handleArrowNavigation = (event: React.KeyboardEvent<HTMLElement>) => {
    if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) {
      return;
    }

    const items = linkRefs.current.filter((link) => Boolean(link?.isConnected));
    if (!items.length) {
      return;
    }

    const activeElement = document.activeElement as HTMLElement | null;
    const currentIndex = items.findIndex((link) => link === activeElement);
    let nextIndex = currentIndex >= 0 ? currentIndex : focusIndex >= 0 ? focusIndex : 0;

    if (event.key === 'ArrowRight') {
      nextIndex = (currentIndex + 1 + items.length) % items.length;
    }

    if (event.key === 'ArrowLeft') {
      nextIndex = (currentIndex - 1 + items.length) % items.length;
    }

    if (event.key === 'Home') {
      nextIndex = 0;
    }

    if (event.key === 'End') {
      nextIndex = items.length - 1;
    }

    setFocusIndex(nextIndex);
    items[nextIndex]?.focus();
    event.preventDefault();
  };

  return (
    <header className={s.topNav} data-lyfeguard="TopNav">
      <div className={s.left}>
        {brand ? <div className={s.logo}>{brand}</div> : <div className={s.logo}>{brandName}</div>}
        <nav className={s.navLinks} aria-label="Primary navigation" onKeyDown={handleArrowNavigation}>
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
                data-active={link.isActive}
                aria-current={link.isActive ? 'page' : undefined}
                ref={(node) => {
                  if (node) {
                    linkRefs.current[idx] = node;
                  }
                }}
                tabIndex={focusIndex === idx ? 0 : -1}
                onFocus={() => setFocusIndex(idx)}
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