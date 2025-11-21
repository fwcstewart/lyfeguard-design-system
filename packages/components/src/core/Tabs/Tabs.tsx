import React, { useState } from 'react';
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
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  const handleSelect = (index: number) => {
    setActiveIndex(index);
    onChange?.(index);
  };

  return (
    <div data-lyfeguard="Tabs">
      <div className={styles.tabList} role="tablist">
        {tabs.map((tab, index) => (
          <button
            key={index}
            id={`tab-${index}`}
            role="tab"
            aria-selected={activeIndex === index}
            aria-controls={`tabpanel-${index}`}
            data-active={activeIndex === index}
            className={styles.tab}
            onClick={() => handleSelect(index)}
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        id={`tabpanel-${activeIndex}`}
        className={styles.tabPanel}
        aria-labelledby={`tab-${activeIndex}`}
      >
        {tabs[activeIndex]?.content}
      </div>
    </div>
  );
};

Tabs.displayName = 'Tabs';