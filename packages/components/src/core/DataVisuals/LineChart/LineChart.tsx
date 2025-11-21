import React from 'react';
import {
  LineChart as ReLineChart,
  Line,
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

export interface LineDefinition {
  /**
   * Key in the data object to bind to this line.
   */
  key: string;
  /**
   * Label for the legend. If omitted, the key will be used.
   */
  label?: string;
  /**
   * Custom colour for this line. Falls back to semantic colour slots if not provided.
   */
  color?: string;
  /**
   * Semantic colour slot to pull from the design tokens.
   */
  colorSlot?: DataColorSlot;
  /**
   * Whether to show dots on the line. Defaults to false.
   */
  showDots?: boolean;
  /**
   * Stroke width for the line. Defaults to 2.5 for better visibility.
   */
  strokeWidth?: number;
}

export interface LineChartProps {
  /**
   * Data points for the chart. Each object should contain the x-axis key and line keys.
   */
  data: Record<string, any>[];
  /**
   * Key in the data to use for the x-axis values.
   */
  xKey: string;
  /**
   * Definitions of lines to render. Each line must specify a data key.
   */
  lines: LineDefinition[];
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
 * Modern line chart component built on top of Recharts with improved visual design.
 * Features smooth curves, better dot styling, modern colors, and enhanced animations.
 * Displays trends over time with customizable lines and styling that matches the
 * Lyfeguard design system.
 */
export const LineChart: React.FC<LineChartProps> = ({ 
  data, 
  xKey, 
  lines, 
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

  const renderLegendLabel = (value: string) => (
    <span style={{ 
      color: vars.color.theme.text.secondary, 
      ...chartTypography,
      fontSize: vars.font.size.body.xs,
    }}>{value}</span>
  );

  const chartContent = (
    <ReLineChart 
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
          stroke: vars.color.theme.border, 
          strokeWidth: 1, 
          strokeDasharray: '4 4', 
          opacity: 0.4 
        }}
        animationDuration={200}
      />
      <Legend
        wrapperStyle={{
          paddingTop: vars.spacing[4],
        }}
        iconType="line"
        iconSize={16}
        formatter={renderLegendLabel}
      />
      {lines.map((line, idx) => {
        const color = line.color || (line.colorSlot ? DATA_COLOR_SLOTS[line.colorSlot] : defaultColours[idx % defaultColours.length]);
        return (
          <Line
            key={line.key}
            type="monotone"
            dataKey={line.key}
            name={line.label || line.key}
            stroke={color}
            strokeWidth={line.strokeWidth || 2.5}
            dot={line.showDots ? { 
              r: 4, 
              fill: color,
              strokeWidth: 2,
              stroke: vars.color.theme.surface,
            } : false}
            activeDot={{ 
              r: 6, 
              fill: color,
              strokeWidth: 2,
              stroke: vars.color.theme.surface,
            }}
            isAnimationActive={true}
            animationDuration={600}
            animationEasing="ease-out"
          />
        );
      })}
    </ReLineChart>
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

LineChart.displayName = 'LineChart';

