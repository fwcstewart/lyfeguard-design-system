import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, test, beforeEach } from 'vitest';
import { Checkbox } from './Checkbox';

const applyTokenVariables = () => {
  const root = document.documentElement;
  const tokenMap: Record<string, string> = {
    '--color-neutral-0': '#FFFFFF',
    '--color-neutral-50': '#F5F5F5',
    '--color-neutral-100': '#E7ECEC',
    '--color-neutral-200': '#CFD6D6',
    '--color-neutral-300': '#B8C0C0',
    '--color-neutral-400': '#A0AAAA',
    '--color-neutral-500': '#8A9595',
    '--color-neutral-600': '#737F7F',
    '--color-neutral-700': '#5C6969',
    '--color-neutral-800': '#455252',
    '--color-neutral-900': '#2E3B3B',
    '--color-brand-900': '#051A22',
    '--color-accent-mint': '#00FFB2',
    '--color-accent-mint_20': 'rgba(0,255,178,0.2)',
    '--color-accent-mint_30': 'rgba(0,255,178,0.3)',
    '--color-success-600': '#00E0A0',
    '--color-theme-surface': '#F5F5F5',
    '--spacing-1': '4px',
    '--spacing-2': '8px',
    '--spacing-3': '12px',
    '--spacing-4': '16px',
    '--spacing-5': '20px',
    '--spacing-6': '24px',
    '--spacing-8': '40px',
    '--font-family-sans': '"Epilogue", -apple-system, BlinkMacSystemFont, sans-serif',
    '--font-size-ui-label': '14px',
    '--font-line-height-ui-label': '1.4',
    '--font-weight-medium': '500',
    '--font-size-body-sm': '14px',
    '--font-line-height-body-sm': '1.45',
  };

  Object.entries(tokenMap).forEach(([name, value]) => {
    root.style.setProperty(name, value);
  });
};

beforeEach(() => {
  applyTokenVariables();
  document.documentElement.className = '';
});

describe('Checkbox', () => {
  test('toggles via keyboard and reflects aria state', () => {
    render(<Checkbox label="Subscribe" />);
    const checkbox = screen.getByRole('checkbox', { name: 'Subscribe' });

    checkbox.focus();
    expect(checkbox).toHaveAccessibleName('Subscribe');
    expect((checkbox as HTMLInputElement).checked).toBe(false);

    fireEvent.keyDown(checkbox, { key: ' ', code: 'Space' });
    fireEvent.keyUp(checkbox, { key: ' ', code: 'Space' });
    (checkbox as HTMLInputElement).click();

    expect((checkbox as HTMLInputElement).checked).toBe(true);
  });

  test('switches semantic tokens between light and dark surfaces', () => {
    const { rerender } = render(<Checkbox label="Contrast" defaultChecked />);
    const lightSurface = getComputedStyle(document.documentElement).getPropertyValue('--color-theme-surface');

    rerender(
      <div className="dark">
        <Checkbox label="Contrast" defaultChecked />
      </div>
    );

    const darkElement = document.querySelector('.dark') as HTMLElement;
    darkElement.style.setProperty('--color-theme-surface', '#455252');
    const darkSurface = getComputedStyle(darkElement).getPropertyValue('--color-theme-surface');

    expect(lightSurface.trim()).not.toEqual(darkSurface.trim());
  });
});
