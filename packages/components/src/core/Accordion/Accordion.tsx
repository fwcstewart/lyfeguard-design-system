import React from 'react';
import { cx } from '../../helpers/cx';
import * as s from './Accordion.css';

export interface AccordionItem {
  /**
   * Unique identifier for the accordion item.
   */
  id: string;
  /**
   * Title rendered inside the trigger button.
   */
  title: React.ReactNode;
  /**
   * Optional supporting text displayed below the title in the trigger.
   */
  description?: React.ReactNode;
  /**
   * Panel content displayed when the item is expanded.
   */
  content: React.ReactNode;
  /**
   * When true, the item cannot be toggled and appears muted.
   */
  disabled?: boolean;
}

export interface AccordionProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /**
   * List of accordion items to render.
   */
  items: AccordionItem[];
  /**
   * Allow multiple items to be open at once. Defaults to false (only one open).
   */
  multiple?: boolean;
  /**
   * Controlled list of open item ids.
   */
  openItems?: string[];
  /**
   * Initial open item ids for uncontrolled usage.
   */
  defaultOpenItems?: string[];
  /**
   * Callback fired with the next open item ids whenever a toggle occurs.
   */
  onChange?(openItemIds: string[]): void;
}

/**
 * Accessible accordion that supports single or multi-expand behaviour. Uses
 * semantic buttons for triggers and sets correct ARIA relationships between
 * triggers and panels.
 */
export const Accordion: React.FC<AccordionProps> = ({
  items,
  multiple = false,
  openItems,
  defaultOpenItems = [],
  onChange,
  className,
  ...props
}) => {
  const [internalOpenItems, setInternalOpenItems] = React.useState<string[]>(defaultOpenItems);
  const contentRefs = React.useRef<Record<string, HTMLDivElement | null>>({});

  const resolvedOpenItems = openItems ?? internalOpenItems;

  const toggleItem = (id: string, disabled?: boolean) => {
    if (disabled) return;

    setInternalOpenItems((prev) => {
      const current = openItems ?? prev;
      const isOpen = current.includes(id);
      let next: string[];

      if (isOpen) {
        next = current.filter((itemId) => itemId !== id);
      } else if (multiple) {
        next = [...current, id];
      } else {
        next = [id];
      }

      onChange?.(next);
      return openItems ? prev : next;
    });
  };

  return (
    <div className={cx(s.accordion, className)} data-lyfeguard="Accordion" role="presentation" {...props}>
      {items.map((item) => {
        const isOpen = resolvedOpenItems.includes(item.id);
        const contentHeight = contentRefs.current[item.id]?.scrollHeight ?? 0;
        const contentId = `${item.id}-content`;
        const triggerId = `${item.id}-trigger`;

        return (
          <div key={item.id} className={cx(s.item, item.disabled && s.disabled)}>
            <button
              type="button"
              className={s.trigger}
              id={triggerId}
              aria-expanded={isOpen}
              aria-controls={contentId}
              onClick={() => toggleItem(item.id, item.disabled)}
              disabled={item.disabled}
            >
              <span className={s.triggerText}>
                <span className={s.title}>{item.title}</span>
                {item.description && <span className={s.description}>{item.description}</span>}
              </span>
              <span aria-hidden className={cx(s.chevron, isOpen && s.chevronOpen)}>
                ▼
              </span>
            </button>
            <div
              id={contentId}
              role="region"
              aria-labelledby={triggerId}
              className={cx(s.panel, isOpen && s.panelOpen)}
              style={{ maxHeight: isOpen ? `${contentHeight}px` : 0 }}
            >
              <div ref={(node) => (contentRefs.current[item.id] = node)} className={s.panelInner}>
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
