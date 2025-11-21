import { style } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing[2],
});

export const dropZone = style({
  border: `2px dashed ${vars.color.neutral300}`,
  borderRadius: vars.radius.lg,
  padding: vars.spacing[6],
  textAlign: 'center',
  backgroundColor: vars.color.neutral50,
  color: vars.color.neutral700,
  fontFamily: vars.font.sans,
  fontSize: vars.font.size.body.sm,
  lineHeight: vars.font.lineHeight.body.sm,
  cursor: 'pointer',
  transition: `background-color ${vars.motion.duration.fast} ${vars.motion.easing.ease}, border-color ${vars.motion.duration.fast} ${vars.motion.easing.ease}`,
});

export const dropZoneActive = style({
  borderColor: vars.color.brand500,
  backgroundColor: vars.color.brand500_20,
});

export const fileList = style({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  fontFamily: vars.font.sans,
  fontSize: vars.font.size.body.sm,
  lineHeight: vars.font.lineHeight.body.sm,
  color: vars.color.neutral800,
});

export const fileItem = style({
  padding: `${vars.spacing[1]} 0`,
  borderBottom: `1px solid ${vars.color.neutral200}`,
  selectors: {
    '&:last-child': {
      borderBottom: 'none',
    },
  },
});