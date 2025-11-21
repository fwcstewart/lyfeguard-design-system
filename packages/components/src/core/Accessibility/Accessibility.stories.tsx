import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { LiveRegion } from "./LiveRegion";
import { SkipLink } from "./SkipLink";
import { VisuallyHidden } from "./VisuallyHidden";
import * as s from "./Accessibility.stories.css";

const meta: Meta = {
  title: "Core/Accessibility/Utilities",
};

export default meta;
type Story = StoryObj;

interface FocusHelpersProps {
  targetId: string;
}

const FocusHelpers: React.FC<FocusHelpersProps> = ({ targetId }) => (
  <div className={s.helperSurface}>
    <p>
      Use the tab key to focus the helper controls and trigger the skip link. All
      focus outlines and surfaces use the theme tokens for consistent contrast in
      light and dark modes.
    </p>
    <div className={s.helperStack}>
      <button className={s.focusHelper} type="button">
        Theme-aware focus helper
        <VisuallyHidden>Provides a visible outline when focused</VisuallyHidden>
      </button>
      <a className={s.focusHelper} href={`#${targetId}`}>
        Focusable helper link
        <VisuallyHidden>Uses theme border and text tokens</VisuallyHidden>
      </a>
    </div>
    <LiveRegion message="Focus helpers ready" />
  </div>
);

export const LightSurface: Story = {
  render: () => (
    <div className={s.storyRoot}>
      <SkipLink targetId="accessible-main" />
      <main id="accessible-main">
        <FocusHelpers targetId="accessible-main" />
      </main>
    </div>
  ),
};

export const DarkSurface: Story = {
  render: () => (
    <div className={`dark ${s.storyRoot}`}>
      <SkipLink targetId="accessible-main-dark" />
      <main id="accessible-main-dark">
        <FocusHelpers targetId="accessible-main-dark" />
      </main>
    </div>
  ),
};
