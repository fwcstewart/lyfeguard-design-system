import { style } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

export const currencySymbol = style({
  fontFamily: vars.font.sans,
  fontSize: vars.font.size.body.base,
  fontWeight: vars.font.weight.medium,
  color: vars.color.theme.text.secondary,
  paddingLeft: vars.spacing[3],
  userSelect: 'none',
  selectors: {
    '.dark &': {
      color: vars.color.theme.text.secondary,
    },
  },
});

