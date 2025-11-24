import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { ThemeProvider } from './ThemeProvider';

describe('ThemeProvider', () => {
  afterEach(() => {
    document.documentElement.classList.remove('dark');
  });

  it('toggles the .dark class on the document element', () => {
    render(
      <ThemeProvider theme="dark">
        <div data-testid="content" />
      </ThemeProvider>,
    );

    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('cleans up the document class when switching back to light', () => {
    const { rerender, unmount } = render(
      <ThemeProvider theme="dark">
        <div />
      </ThemeProvider>,
    );

    rerender(
      <ThemeProvider theme="light">
        <div />
      </ThemeProvider>,
    );

    expect(document.documentElement.classList.contains('dark')).toBe(false);

    unmount();
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('supports locally scoped theming without mutating the document', () => {
    render(
      <ThemeProvider theme="dark" scope="local">
        <div data-testid="scoped-content" />
      </ThemeProvider>,
    );

    const wrapper = screen.getByTestId('theme-provider');

    expect(wrapper.classList.contains('dark')).toBe(true);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });
});
