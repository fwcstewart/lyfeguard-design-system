import React from 'react';
import {
  BarChart as ReBarChart,
  Bar,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from 'recharts';
import { vars } from '../../../globals.css';
import {
  DATA_COLOR_SLOTS,
  DataColorSlot,
  chartTypography, 
  getTickProps, 
  getTooltipStyle, 
  getAxisStyle,
  getGridStyle,
  getChartMargin,
} from '../chartUtils';

export { DATA_COLOR_SLOTS } from '../chartUtils';

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
  /**
   * Whether to stack this bar with others. Defaults to false.
   */
  stackId?: string;
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
  /**
   * Whether the chart should be responsive. If true, width and height are ignored.
   */
  responsive?: boolean;
}

/**
 * Modern bar chart component built on top of Recharts with improved visual design.
 * Features rounded corners, better spacing, modern colors, and smooth animations.
 * Accepts a data array, an x-axis key and a list of bar definitions. Colours are 
 * drawn from the Lyfeguard design tokens by default.
 */
/**
 * Parses a pixel value string (e.g., '8px') to a number.
 */
const parsePixelValue = (value: string): number => {
  return parseInt(value.replace('px', ''), 10) || 0;
};

export const BarChart: React.FC<BarChartProps> = ({ 
  data, 
  xKey, 
  bars, 
  width = 600, 
  height = 300,
  responsive = false,
}) => {
  const defaultColours: string[] = Object.values(DATA_COLOR_SLOTS);
  const tickProps = getTickProps();
  const tooltipStyle = getTooltipStyle();
  const axisStyle = getAxisStyle();
  const gridStyle = getGridStyle();
  const margin = getChartMargin();
  const barRadius = parsePixelValue(vars.radius.md);

  const renderLegendLabel = (value: string) => (
    <span style={{ 
      color: vars.color.theme.text.secondary, 
      ...chartTypography,
      fontSize: vars.font.size.body.xs,
    }}>{value}</span>
  );

  const chartContent = (
    <ReBarChart 
      width={width} 
      height={height} 
      data={data} 
      margin={margin}
    >
      <CartesianGrid 
        {...gridStyle}
        vertical={false}
      />
      <XAxis
        dataKey={xKey}
        {...axisStyle}
        tick={tickProps}
        axisLine={axisStyle}
        tickLine={false}
        tickMargin={12}
        height={40}
      />
      <YAxis
        {...axisStyle}
        tick={tickProps}
        axisLine={false}
        tickLine={false}
        tickMargin={12}
        width={60}
      />
      <Tooltip
        {...tooltipStyle}
        cursor={{ 
          fill: vars.color.theme.border, 
          opacity: 0.08,
          radius: vars.radius.sm,
        }}
        animationDuration={200}
      />
      <Legend
        wrapperStyle={{
          paddingTop: vars.spacing[4],
        }}
        iconType="rect"
        iconSize={12}
        formatter={renderLegendLabel}
      />
      {bars.map((bar, idx) => {
        const color = bar.color || (bar.colorSlot ? DATA_COLOR_SLOTS[bar.colorSlot] : defaultColours[idx % defaultColours.length]);
        return (
          <Bar
            key={bar.key}
            dataKey={bar.key}
            name={bar.label || bar.key}
            fill={color}
            radius={[barRadius, barRadius, 0, 0]}
            stackId={bar.stackId}
            isAnimationActive={true}
            animationDuration={600}
            animationEasing="ease-out"
          />
        );
      })}
    </ReBarChart>
  );

  if (responsive) {
    return (
      <ResponsiveContainer width="100%" height={height}>
        {chartContent}
      </ResponsiveContainer>
    );
  }

  return chartContent;
};

BarChart.displayName = 'BarChart';

