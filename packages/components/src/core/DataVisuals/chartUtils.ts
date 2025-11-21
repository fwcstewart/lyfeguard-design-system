import { vars } from '../../globals.css';

/**
 * Shared color slots for chart data visualization.
 * These colors are drawn from the Lyfeguard design tokens with modern gradients.
 */
export const dataColorSlots = {
  primary: vars.color.brand500,
  secondary: vars.color.brand800,
  accent: vars.color.accentMint,
  info: vars.color.info500,
  success: vars.color.success600,
  warning: vars.color.warning500,
  critical: vars.color.error500,
  neutral: vars.color.neutral600,
};

export const DATA_COLOR_SLOTS = dataColorSlots;

export type DataColorSlot = keyof typeof dataColorSlots;

/**
 * Modern typography settings for chart labels, axes, and legends.
 */
export const chartTypography = {
  fontFamily: vars.font.sans,
  fontSize: vars.font.size.body.sm,
  fontWeight: vars.font.weight.medium,
  lineHeight: vars.font.lineHeight.body.sm,
};

/**
 * Common tick props for chart axes with modern styling.
 */
export const getTickProps = () => ({
  ...chartTypography,
  fill: vars.color.theme.text.secondary,
  fontSize: vars.font.size.body.xs,
  fontWeight: vars.font.weight.regular,
});

/**
 * Modern tooltip styling for charts with improved visual hierarchy.
 */
export const getTooltipStyle = () => ({
  wrapperStyle: { 
    outline: 'none',
    zIndex: 1000,
  },
  contentStyle: {
    backgroundColor: vars.color.theme.surface,
    border: `1px solid ${vars.color.theme.border}`,
    borderRadius: vars.radius.lg,
    boxShadow: vars.shadow.lg,
    color: vars.color.theme.text.primary,
    padding: `${vars.spacing[4]} ${vars.spacing[5]}`,
    backdropFilter: 'blur(8px)',
    ...chartTypography,
  },
  labelStyle: {
    color: vars.color.theme.text.primary,
    marginBottom: vars.spacing[2],
    fontSize: vars.font.size.body.sm,
    fontWeight: vars.font.weight.semiBold,
    fontFamily: vars.font.sans,
  },
  itemStyle: {
    color: vars.color.theme.text.secondary,
    padding: `${vars.spacing[1]} 0`,
    fontSize: vars.font.size.body.xs,
    fontFamily: vars.font.sans,
  },
});

/**
 * Modern axis styling for charts with subtle borders.
 */
export const getAxisStyle = () => ({
  stroke: vars.color.theme.border,
  strokeWidth: 1,
  strokeOpacity: 0.6,
});

/**
 * Modern grid styling for charts.
 */
export const getGridStyle = () => ({
  stroke: vars.color.theme.border,
  strokeWidth: 1,
  strokeOpacity: 0.15,
  strokeDasharray: '4 4',
});

/**
 * Chart margin configuration using spacing tokens.
 */
export const getChartMargin = () => ({
  top: 24, // spacing[6]
  right: 24, // spacing[6]
  bottom: 24, // spacing[6]
  left: 24, // spacing[6]
});

