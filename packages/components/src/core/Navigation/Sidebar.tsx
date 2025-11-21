import React, { useRef, useState } from 'react';
import * as s from './Sidebar.css';

export interface SidebarItem {
  /**
   * Label for the sidebar link.
   */
  label: string;
  /**
   * Optional icon displayed to the left of the label.
   */
  icon?: React.ReactNode;
  /**
   * Destination URL for the item. If omitted, onClick must be provided.
   */
  href?: string;
  /**
   * Click handler for the item. Overrides default link behaviour.
   */
  onClick?: () => void;
}

export interface SidebarProps {
  /**
   * List of items to display in the sidebar.
   */
  items: SidebarItem[];
  /**
   * Index of the currently active item. If omitted, the component will manage its own state.
   */
  activeIndex?: number;
  /**
   * Callback fired when a sidebar item is selected.
   */
  onSelect?: (index: number) => void;
}

/**
 * Vertical navigation sidebar for the Lyfeguard application. Displays a list
 * of navigation items with optional icons and highlights the active item.
 */
export const Sidebar: React.FC<SidebarProps> = ({ items, activeIndex: controlledActive, onSelect }) => {
  const [internalActive, setInternalActive] = useState(0);
  const active = controlledActive ?? internalActive;
  const itemRefs = useRef<(HTMLAnchorElement | HTMLButtonElement | null)[]>([]);

  const handleSelect = (index: number, item: SidebarItem) => {
    if (controlledActive === undefined) {
      setInternalActive(index);
    }
    onSelect?.(index);
    if (item.onClick) {
      item.onClick();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
      return;
    }

    const itemsList = itemRefs.current.filter((item) => Boolean(item?.isConnected));
    if (!itemsList.length) {
      return;
    }

    const activeElement = document.activeElement as HTMLElement | null;
    const currentIndex = itemsList.findIndex((node) => node === activeElement);
    let nextIndex = currentIndex >= 0 ? currentIndex : 0;

    if (event.key === 'ArrowDown') {
      nextIndex = (currentIndex + 1 + itemsList.length) % itemsList.length;
    }

    if (event.key === 'ArrowUp') {
      nextIndex = (currentIndex - 1 + itemsList.length) % itemsList.length;
    }

    if (event.key === 'Home') {
      nextIndex = 0;
    }

    if (event.key === 'End') {
      nextIndex = itemsList.length - 1;
    }

    itemsList[nextIndex]?.focus();
    event.preventDefault();
  };

  return (
    <aside className={s.sidebar} data-lyfeguard="Sidebar" role="navigation" aria-label="Sidebar navigation">
      {items.map((item, idx) => {
        const Element: 'a' | 'button' = item.href ? 'a' : 'button';
        const actionProps = Element === 'a' ? { href: item.href } : { type: 'button' as const };

        const onClick = (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
          if (item.onClick) {
            event.preventDefault();
          }
          handleSelect(idx, item);
        };
        return (
          <Element
            key={idx}
            className={s.item}
            data-active={active === idx}
            aria-current={active === idx ? 'page' : undefined}
            onKeyDown={handleKeyDown}
            onClick={onClick}
            ref={(node: HTMLAnchorElement | HTMLButtonElement | null) => {
              itemRefs.current[idx] = node;
            }}
            {...actionProps}
          >
            {item.icon && <span className={s.iconWrapper}>{item.icon}</span>}
            <span>{item.label}</span>
          </Element>
        );
      })}
    </aside>
  );
};

Sidebar.displayName = 'Sidebar';