import { style } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

// List containing tab triggers
export const tabList = style({
  display: 'flex',
  borderBottom: `1px solid ${vars.color.neutral200}`,
  gap: vars.spacing[4] as unknown as string,
});

// Individual tab trigger
export const tab = style({
  padding: `${vars.spacing[2]} ${vars.spacing[3]}`,
  fontFamily: vars.font.sans,
  fontSize: '14px',
  fontWeight: 500,
  color: vars.color.neutral700,
  cursor: 'pointer',
  borderBottom: '2px solid transparent',
  selectors: {
    '&[data-active="true"]': {
      color: vars.color.brand500,
      borderColor: vars.color.brand500,
    },
    '&:hover': {
      color: vars.color.brand500,
    }
  }
});
