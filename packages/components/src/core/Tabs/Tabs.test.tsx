import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Tabs, TabItem } from './Tabs';

describe('Tabs', () => {
  const tabs: TabItem[] = [
    { label: 'First', content: <p>First content</p> },
    { label: 'Second', content: <p>Second content</p> },
    { label: 'Third', content: <p>Third content</p> },
  ];

  it('links tabs and panels with aria attributes', () => {
    render(<Tabs tabs={tabs} />);

    const firstTab = screen.getByRole('tab', { name: 'First' });
    const tabPanel = screen.getByRole('tabpanel');

    expect(firstTab).toHaveAttribute('aria-controls', tabPanel.getAttribute('id'));
    expect(tabPanel).toHaveAttribute('aria-labelledby', firstTab.getAttribute('id'));
  });

  it('supports keyboard navigation and skips disabled tabs', () => {
    const disabledTabs: TabItem[] = [
      { label: 'First', content: <p>First content</p> },
      { label: 'Second', content: <p>Second content</p>, isDisabled: true },
      { label: 'Third', content: <p>Third content</p> },
    ];

    render(<Tabs tabs={disabledTabs} />);

    const firstTab = screen.getByRole('tab', { name: 'First' });
    const thirdTab = screen.getByRole('tab', { name: 'Third' });

    firstTab.focus();
    fireEvent.keyDown(firstTab, { key: 'ArrowRight' });

    expect(thirdTab).toHaveAttribute('aria-selected', 'true');
    expect(thirdTab).toHaveFocus();

    fireEvent.keyDown(thirdTab, { key: 'ArrowLeft' });

    expect(firstTab).toHaveAttribute('aria-selected', 'true');
    expect(firstTab).toHaveFocus();
  });
});
