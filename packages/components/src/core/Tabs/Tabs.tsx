import React, { useEffect, useMemo, useRef, useState } from 'react';
import * as styles from './Tabs.css';

export interface TabItem {
  /**
   * The label displayed in the tab trigger.
   */
  label: string;
  /**
   * The content to render when this tab is active.
   */
  content: React.ReactNode;
  /**
   * Whether the tab should be disabled and skipped in keyboard navigation.
   */
  isDisabled?: boolean;
}

export interface TabsProps {
  /**
   * Array of tab definitions. Each tab must specify a label and content.
   */
  tabs: TabItem[];
  /**
   * The index of the tab that should be active by default. Defaults to 0.
   */
  defaultIndex?: number;
  /**
   * Optional callback fired when the active tab changes.
   */
  onChange?: (index: number) => void;
}

/**
 * A simple tabbed interface. Renders a horizontal list of tabs and shows the
 * associated content when a tab is selected. Controlled via `tabs` prop.
 */
export const Tabs: React.FC<TabsProps> = ({ tabs, defaultIndex = 0, onChange }) => {
  const tabsId = React.useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const initialIndex = useMemo(() => {
    if (tabs[defaultIndex] && !tabs[defaultIndex].isDisabled) {
      return defaultIndex;
    }

    const firstEnabled = tabs.findIndex((tab) => !tab.isDisabled);
    return firstEnabled === -1 ? 0 : firstEnabled;
  }, [defaultIndex, tabs]);

  const [activeIndex, setActiveIndex] = useState(initialIndex);

  useEffect(() => {
    setActiveIndex(initialIndex);
  }, [initialIndex]);

  const handleSelect = (index: number) => {
    if (tabs[index]?.isDisabled) {
      return;
    }

    setActiveIndex(index);
    onChange?.(index);
  };

  const enabledIndexes = useMemo(
    () =>
      tabs
        .map((tab, index) => ({ index, isDisabled: tab.isDisabled }))
        .filter(({ isDisabled }) => !isDisabled)
        .map(({ index }) => index),
    [tabs]
  );

  const focusTab = (index: number) => {
    tabRefs.current[index]?.focus();
    handleSelect(index);
  };

  const findNextIndex = (current: number, direction: 'next' | 'previous') => {
    if (!enabledIndexes.length) {
      return current;
    }

    const currentPosition = enabledIndexes.indexOf(current);
    if (currentPosition === -1) {
      return enabledIndexes[0];
    }

    const nextPosition =
      direction === 'next'
        ? (currentPosition + 1) % enabledIndexes.length
        : (currentPosition - 1 + enabledIndexes.length) % enabledIndexes.length;

    return enabledIndexes[nextPosition];
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) {
      return;
    }

    if (!enabledIndexes.length) {
      return;
    }

    event.preventDefault();

    const focusedIndex = tabRefs.current.findIndex((ref) => ref === document.activeElement);
    const currentIndex = focusedIndex === -1 ? activeIndex : focusedIndex;

    if (event.key === 'Home') {
      focusTab(enabledIndexes[0]);
      return;
    }

    if (event.key === 'End') {
      focusTab(enabledIndexes[enabledIndexes.length - 1]);
      return;
    }

    const nextIndex =
      event.key === 'ArrowRight'
        ? findNextIndex(currentIndex, 'next')
        : findNextIndex(currentIndex, 'previous');

    focusTab(nextIndex);
  };

  return (
    <div data-lyfeguard="Tabs">
      <div className={styles.tabList} role="tablist" onKeyDown={handleKeyDown}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            ref={(element) => {
              tabRefs.current[index] = element;
            }}
            id={`tab-${tabsId}-${index}`}
            role="tab"
            aria-selected={activeIndex === index}
            aria-controls={`tabpanel-${tabsId}-${index}`}
            data-active={activeIndex === index}
            tabIndex={activeIndex === index ? 0 : -1}
            className={styles.tab}
            onClick={() => handleSelect(index)}
            disabled={tab.isDisabled}
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        id={`tabpanel-${tabsId}-${activeIndex}`}
        className={styles.tabPanel}
        aria-labelledby={`tab-${tabsId}-${activeIndex}`}
      >
        {tabs[activeIndex]?.content}
      </div>
    </div>
  );
};

Tabs.displayName = 'Tabs';