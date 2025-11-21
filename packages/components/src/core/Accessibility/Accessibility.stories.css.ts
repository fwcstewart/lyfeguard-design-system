import { style } from "@vanilla-extract/css";
import { vars } from "../../globals.css";

export const storyRoot = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing[4],
  minHeight: "100vh",
  padding: vars.spacing[6],
  backgroundColor: vars.color.theme.background,
  color: vars.color.theme.text.primary,
});

export const helperSurface = style({
  backgroundColor: vars.color.theme.surface,
  color: vars.color.theme.text.primary,
  border: `1px solid ${vars.color.theme.border}`,
  borderRadius: vars.radius.lg,
  padding: vars.spacing[5],
  boxShadow: vars.shadow.sm,
});

export const focusHelper = style({
  display: "inline-flex",
  gap: vars.spacing[2],
  alignItems: "center",
  backgroundColor: vars.color.theme.surfaceHover,
  color: vars.color.theme.text.primary,
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.theme.border}`,
  padding: `${vars.spacing[3]} ${vars.spacing[4]}`,
  fontFamily: vars.font.sans,
  fontSize: vars.font.size.body.base,
  cursor: "pointer",
  selectors: {
    "&:hover": {
      borderColor: vars.color.theme.borderHover,
    },
    "&:focus-visible": {
      outline: `${vars.spacing[1]} solid ${vars.color.theme.text.secondary}`,
      boxShadow: `0 0 0 ${vars.spacing[1]} ${vars.color.theme.borderHover}`,
    },
  },
});

export const helperStack = style({
  display: "flex",
  gap: vars.spacing[3],
  flexWrap: "wrap",
  alignItems: "center",
});

export const helperLabel = style({
  color: vars.color.theme.text.secondary,
  fontSize: vars.font.size.body.sm,
});
