import { style } from "@vanilla-extract/css";
import { vars } from "../../globals.css";

// Skip link styles hide the link offscreen until it receives focus. When focused
// the link becomes visible so keyboard users can jump directly to the main
// content. The colours use the design system's brand and neutral palette to
// ensure sufficient contrast.
export const skipLink = style({
  position: "absolute",
  top: 0,
  left: 0,
  transform: "translateY(-100%)",
  background: vars.color.theme.surface,
  color: vars.color.theme.text.primary,
  padding: `${vars.spacing[3]} ${vars.spacing[4]}`,
  borderRadius: vars.radius.md,
  zIndex: 1000,
  textDecoration: "none",
  fontFamily: vars.font.sans,
  fontSize: vars.spacing[4],
  border: `1px solid ${vars.color.theme.border}`,
  boxShadow: `0 0 0 ${vars.spacing[1]} ${vars.color.theme.borderHover}`,
  transition: `transform ${vars.motion.duration.fast} ${vars.motion.easing.ease}`,
  selectors: {
    "&:focus, &:focus-visible, &[data-focus-visible='true']": {
      transform: "translateY(0)",
      outline: `${vars.spacing[1]} solid ${vars.color.theme.text.secondary}`,
    },
  },
});