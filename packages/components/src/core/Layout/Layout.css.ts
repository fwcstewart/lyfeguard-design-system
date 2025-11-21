import { style } from '@vanilla-extract/css';
import { vars } from '../../globals.css';

/**
 * Container provides a responsive wrapper for page content. It centers
 * children horizontally and applies horizontal padding based on the spacing
 * scale. A max-width can be set via inline styles on the consuming
 * component.
 */
export const container = style({
  width: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: vars.spacing[7],
  paddingRight: vars.spacing[7],
});

/**
 * Grid is a lightweight CSS grid wrapper. The number of columns and the gap
 * between grid items can be customized via inline styles on the component.
 */
export const grid = style({
  display: 'grid',
  width: '100%',
});