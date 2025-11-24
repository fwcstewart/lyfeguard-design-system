import React, { useEffect, useRef, useState } from 'react';
import * as s from './Dropdown.css';

export interface DropdownItem {
  /**
   * Label for the dropdown item.
   */
  label: string;
  /**
   * Destination URL for the item. If omitted, onClick must be provided.
   */
  href?: string;
  /**
   * Click handler for the item. Overrides default link behaviour.
   */
  onClick?: () => void;
  /**
   * Whether this item is disabled.
   */
  disabled?: boolean;
}

export interface DropdownProps {
  /**
   * The trigger element (button, link, etc.) that opens the dropdown.
   */
  trigger: React.ReactNode;
  /**
   * Array of items to display in the dropdown menu.
   */
  items: DropdownItem[];
  /**
   * Optional alignment of the dropdown menu relative to the trigger.
   */
  align?: 'left' | 'right';
  /**
   * Whether the dropdown is open (controlled).
   */
  open?: boolean;
  /**
   * Callback fired when the dropdown open state changes.
   */
  onOpenChange?: (open: boolean) => void;
}

/**
 * Dropdown component for displaying a menu of actions or links.
 * Supports keyboard navigation and click-outside-to-close behavior.
 */
export const Dropdown: React.FC<DropdownProps> = ({
  trigger,
  items,
  align = 'right',
  open: controlledOpen,
  onOpenChange,
}) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const open = controlledOpen ?? internalOpen;
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    const nextOpen = !open;
    if (controlledOpen === undefined) {
      setInternalOpen(nextOpen);
    }
    onOpenChange?.(nextOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        if (controlledOpen === undefined) {
          setInternalOpen(false);
        }
        onOpenChange?.(false);
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [open, controlledOpen, onOpenChange]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) {
        if (controlledOpen === undefined) {
          setInternalOpen(false);
        }
        onOpenChange?.(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [open, controlledOpen, onOpenChange]);

  return (
    <div className={s.wrapper} data-lyfeguard="Dropdown">
      <div ref={triggerRef} onClick={handleToggle} className={s.trigger}>
        {trigger}
      </div>
      {open && (
        <div
          ref={dropdownRef}
          className={s.menu}
          data-align={align}
          role="menu"
          aria-orientation="vertical"
        >
          {items.map((item, idx) => {
            const Element: 'a' | 'button' = item.href ? 'a' : 'button';
            const actionProps = item.href ? { href: item.href } : { type: 'button' as const };

            const handleClick = (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
              if (item.onClick) {
                event.preventDefault();
                item.onClick();
              }
              if (controlledOpen === undefined) {
                setInternalOpen(false);
              }
              onOpenChange?.(false);
            };

            return (
              <Element
                key={idx}
                className={s.item}
                role="menuitem"
                disabled={item.disabled}
                onClick={handleClick}
                {...actionProps}
              >
                {item.label}
              </Element>
            );
          })}
        </div>
      )}
    </div>
  );
};

Dropdown.displayName = 'Dropdown';

