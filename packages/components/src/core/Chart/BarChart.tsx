import React from 'react';
import {
  BarChart as ReBarChart,
  Bar,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { vars } from '../../globals.css';

const dataColorSlots = {
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

const labelTypography = {
  fontFamily: vars.font.sans,
  fontSize: vars.font.size.ui.label,
  fontWeight: vars.font.weight.medium,
};

export type DataColorSlot = keyof typeof dataColorSlots;

export interface BarDefinition {
  /**
   * Key in the data object to bind to this bar.
   */
  key: string;
  /**
   * Label for the legend. If omitted, the key will be used.
   */
  label?: string;
  /**
   * Custom colour for this bar. Falls back to semantic colour slots if not provided.
   */
  color?: string;
  /**
   * Semantic colour slot to pull from the design tokens. If both `color` and
   * `colorSlot` are omitted the chart will rotate through default slots.
   */
  colorSlot?: DataColorSlot;
}

export interface BarChartProps {
  /**
   * Data points for the chart. Each object should contain the x-axis key and bar keys.
   */
  data: Record<string, any>[];
  /**
   * Key in the data to use for the x-axis values.
   */
  xKey: string;
  /**
   * Definitions of bars to render. Each bar must specify a data key.
   */
  bars: BarDefinition[];
  /**
   * Optional width of the chart. Defaults to 600.
   */
  width?: number;
  /**
   * Optional height of the chart. Defaults to 300.
   */
  height?: number;
}

/**
 * Simple bar chart wrapper built on top of Recharts. Accepts a data array,
 * an x-axis key and a list of bar definitions. Colours are drawn from the
 * Lyfeguard design tokens by default.
 */
export const BarChart: React.FC<BarChartProps> = ({ data, xKey, bars, width = 600, height = 300 }) => {
  // Build a list of colours; rotate through brand palette if none provided.
  const defaultColours: string[] = Object.values(dataColorSlots);

  const tickProps = {
    ...labelTypography,
    fill: vars.color.theme.text.secondary,
  };

  const renderLegendLabel = (value: string) => (
    <span style={{ color: vars.color.theme.text.secondary, ...labelTypography }}>{value}</span>
  );

  return (
    <ReBarChart width={width} height={height} data={data} margin={{ top: 16, right: 32, bottom: 0, left: 0 }}>
      <CartesianGrid strokeDasharray="3 3" stroke={vars.color.theme.border} strokeOpacity={0.5} />
      <XAxis
        dataKey={xKey}
        stroke={vars.color.theme.border}
        tick={tickProps}
        axisLine={{ stroke: vars.color.theme.border }}
        tickLine={{ stroke: vars.color.theme.border }}
      />
      <YAxis
        stroke={vars.color.theme.border}
        tick={tickProps}
        axisLine={{ stroke: vars.color.theme.border }}
        tickLine={{ stroke: vars.color.theme.border }}
      />
      <Tooltip
        wrapperStyle={{ outline: 'none' }}
        contentStyle={{
          backgroundColor: vars.color.theme.surface,
          border: `1px solid ${vars.color.theme.border}`,
          borderRadius: vars.radius.md,
          boxShadow: vars.shadow.sm,
          color: vars.color.theme.text.primary,
          ...labelTypography,
        }}
        labelStyle={{ color: vars.color.theme.text.secondary, ...labelTypography }}
        itemStyle={{ color: vars.color.theme.text.primary, ...labelTypography }}
      />
      <Legend
        wrapperStyle={{
          color: vars.color.theme.text.secondary,
          ...labelTypography,
        }}
        formatter={(value: string) => renderLegendLabel(value)}
      />
      {bars.map((bar, idx) => (
        <Bar
          key={bar.key}
          dataKey={bar.key}
          name={bar.label || bar.key}
          fill={bar.color || (bar.colorSlot ? dataColorSlots[bar.colorSlot] : defaultColours[idx % defaultColours.length])}
        />
      ))}
    </ReBarChart>
  );
};

BarChart.displayName = 'BarChart';