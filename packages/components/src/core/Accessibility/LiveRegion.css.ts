import { style } from "@vanilla-extract/css";
import { vars } from "../../globals.css";

// Live region styles mirror our visually hidden helper while keeping
// theme-aware colours for contrast when surfaced by assistive tech.
export const liveRegion = style({
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: 0,
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  whiteSpace: "nowrap",
  borderRadius: vars.radius.sm,
  border: `1px solid ${vars.color.theme.border}`,
  backgroundColor: vars.color.theme.background,
  color: vars.color.theme.text.primary,
});
