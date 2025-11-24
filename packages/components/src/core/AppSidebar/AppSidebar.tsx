import React from 'react';
import { Sidebar, SidebarItem } from '../Navigation/Sidebar';
import * as s from './AppSidebar.css';

export interface AppSidebarProps {
  /**
   * Main navigation items (e.g., Dashboard, Insights).
   */
  mainItems: SidebarItem[];
  /**
   * Hub list items (e.g., LyfeHubs, Trusted Users, Address Book).
   */
  hubItems?: SidebarItem[];
  /**
   * Index of the currently active item.
   */
  activeIndex?: number;
  /**
   * Callback fired when a sidebar item is selected.
   */
  onSelect?: (index: number) => void;
  /**
   * Whether the sidebar is collapsed (mobile view).
   */
  collapsed?: boolean;
}

/**
 * Application sidebar component with support for main navigation items
 * and a separate hub list section. Designed for use in the main application layout.
 */
export const AppSidebar: React.FC<AppSidebarProps> = ({
  mainItems,
  hubItems = [],
  activeIndex,
  onSelect,
  collapsed = false,
}) => {
  // Calculate active index for hub items (offset by main items length)
  const hubActiveIndex = activeIndex !== undefined && activeIndex >= mainItems.length 
    ? activeIndex - mainItems.length 
    : undefined;

  // Combine all items for the Sidebar component
  const allItems = [...mainItems, ...hubItems];

  return (
    <aside className={s.sidebar} data-lyfeguard="AppSidebar" data-collapsed={collapsed}>
      <div className={s.content}>
        <div className={s.mainSection}>
          <Sidebar items={mainItems} activeIndex={activeIndex} onSelect={onSelect} />
        </div>
        {hubItems.length > 0 && (
          <div className={s.hubSection}>
            <ul className={s.hubList}>
              {hubItems.map((item, idx) => {
                const globalIndex = mainItems.length + idx;
                const isActive = activeIndex === globalIndex;
                const Element: 'a' | 'button' = item.href ? 'a' : 'button';
                const actionProps = item.href ? { href: item.href } : { type: 'button' as const };

                const handleClick = (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
                  if (item.onClick) {
                    event.preventDefault();
                    item.onClick();
                  }
                  onSelect?.(globalIndex);
                };

                return (
                  <li key={idx}>
                    <Element
                      className={s.hubItem}
                      data-active={isActive}
                      aria-current={isActive ? 'page' : undefined}
                      onClick={handleClick}
                      {...actionProps}
                    >
                      {item.icon && <span className={s.hubIcon}>{item.icon}</span>}
                      <span>{item.label}</span>
                    </Element>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </aside>
  );
};

AppSidebar.displayName = 'AppSidebar';

