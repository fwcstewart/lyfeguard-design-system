import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { LiveRegion } from "./LiveRegion";
import { SkipLink } from "./SkipLink";

const lightThemeStyle: React.CSSProperties = {
  ["--color-theme-background" as string]: "#ffffff",
  ["--color-theme-surface" as string]: "#f9fafb",
  ["--color-theme-surfaceHover" as string]: "#f3f4f6",
  ["--color-theme-border" as string]: "#e5e7eb",
  ["--color-theme-borderHover" as string]: "#d1d5db",
  ["--color-theme-text-primary" as string]: "#0f172a",
  ["--color-theme-text-secondary" as string]: "#4b5563",
};

const darkThemeStyle: React.CSSProperties = {
  ["--color-theme-background" as string]: "#0f172a",
  ["--color-theme-surface" as string]: "#111827",
  ["--color-theme-surfaceHover" as string]: "#1f2937",
  ["--color-theme-border" as string]: "#374151",
  ["--color-theme-borderHover" as string]: "#4b5563",
  ["--color-theme-text-primary" as string]: "#ffffff",
  ["--color-theme-text-secondary" as string]: "#e5e7eb",
};

describe("Accessibility utilities", () => {
  it("reveals the skip link on focus using theme tokens", () => {
    render(
      <div data-testid="skip-wrapper" style={lightThemeStyle}>
        <SkipLink targetId="story-content" />
        <main id="story-content">Content</main>
      </div>
    );

    const wrapper = screen.getByTestId("skip-wrapper");
    const skipLink = screen.getByRole("link", { name: /skip to content/i });
    fireEvent.focus(skipLink);

    const focusedStyles = getComputedStyle(skipLink);
    expect(skipLink.dataset.focusVisible).toBe("true");
    expect(focusedStyles.transform).not.toContain("-100%");
    expect(focusedStyles.outlineWidth).not.toBe("0px");
    expect(getComputedStyle(wrapper).getPropertyValue("--color-theme-borderHover").trim()).toBe("#d1d5db");
  });

  it("announces live region updates across themes", () => {
    const { rerender } = render(
      <div data-testid="live-wrapper" style={lightThemeStyle}>
        <LiveRegion message="Ready" />
      </div>
    );

    const liveRegion = screen.getByRole("status");
    expect(liveRegion).toHaveTextContent("Ready");

    const lightWrapper = screen.getByTestId("live-wrapper");
    const lightTheme = getComputedStyle(lightWrapper).getPropertyValue("--color-theme-text-primary");

    rerender(
      <div data-testid="live-wrapper" className="dark" style={darkThemeStyle}>
        <LiveRegion message="Dark mode" />
      </div>
    );

    const updatedRegion = screen.getByRole("status");
    expect(updatedRegion).toHaveTextContent("Dark mode");

    const darkWrapper = screen.getByTestId("live-wrapper");
    const darkTheme = getComputedStyle(darkWrapper).getPropertyValue("--color-theme-text-primary");
    expect(darkTheme).not.toBe(lightTheme);
  });
});
