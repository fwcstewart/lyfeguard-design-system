import React, { useState } from 'react';
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

  const handleSelect = (index: number, item: SidebarItem) => {
    if (controlledActive === undefined) {
      setInternalActive(index);
    }
    onSelect?.(index);
    if (item.onClick) {
      item.onClick();
    }
  };

  return (
    <aside className={s.sidebar} data-lyfeguard="Sidebar">
      {items.map((item, idx) => {
        const props: React.HTMLAttributes<HTMLDivElement> = {};
        return (
          <div
            key={idx}
            className={s.item}
            data-active={active === idx}
            onClick={() => handleSelect(idx, item)}
          >
            {item.icon && <span className={s.iconWrapper}>{item.icon}</span>}
            <span>{item.label}</span>
          </div>
        );
      })}
    </aside>
  );
};

Sidebar.displayName = 'Sidebar';