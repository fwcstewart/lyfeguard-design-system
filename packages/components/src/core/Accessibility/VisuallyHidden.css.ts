import { style } from "@vanilla-extract/css";

// Styles to visually hide an element while keeping it accessible to screen
// readers. This implementation mirrors the approach used by many design
// systems such as Reach UI and ensures that hidden content does not impact
// layout but remains available to assistive technologies.
export const visuallyHidden = style({
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: 0,
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  whiteSpace: "nowrap",
  border: 0,
});