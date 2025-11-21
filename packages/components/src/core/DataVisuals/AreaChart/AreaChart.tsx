import React from 'react';
import {
  AreaChart as ReAreaChart,
  Area,
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

export interface AreaDefinition {
  /**
   * Key in the data object to bind to this area.
   */
  key: string;
  /**
   * Label for the legend. If omitted, the key will be used.
   */
  label?: string;
  /**
   * Custom colour for this area. Falls back to semantic colour slots if not provided.
   */
  color?: string;
  /**
   * Semantic colour slot to pull from the design tokens.
   */
  colorSlot?: DataColorSlot;
  /**
   * Opacity for the area fill. Defaults to 0.4 for modern look.
   */
  fillOpacity?: number;
  /**
   * Stroke width for the area line. Defaults to 2.5 for better visibility.
   */
  strokeWidth?: number;
  /**
   * Whether to stack this area with others. Defaults to false.
   */
  stackId?: string;
}

export interface AreaChartProps {
  /**
   * Data points for the chart. Each object should contain the x-axis key and area keys.
   */
  data: Record<string, any>[];
  /**
   * Key in the data to use for the x-axis values.
   */
  xKey: string;
  /**
   * Definitions of areas to render. Each area must specify a data key.
   */
  areas: AreaDefinition[];
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
 * Modern area chart component built on top of Recharts, designed for financial dashboards.
 * Features improved gradients, better spacing, and modern visual styling that matches the
 * Lyfeguard design system. Supports stacked areas for cumulative data visualization.
 */
export const AreaChart: React.FC<AreaChartProps> = ({ 
  data, 
  xKey, 
  areas, 
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
    <ReAreaChart 
      width={width} 
      height={height} 
      data={data} 
      margin={margin}
    >
      <defs>
        {areas.map((area, idx) => {
          const color = area.color || (area.colorSlot ? DATA_COLOR_SLOTS[area.colorSlot] : defaultColours[idx % defaultColours.length]);
          return (
            <linearGradient key={area.key} id={`gradient-${area.key}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity={area.fillOpacity || 0.4} />
              <stop offset="50%" stopColor={color} stopOpacity={area.fillOpacity ? area.fillOpacity * 0.6 : 0.25} />
              <stop offset="100%" stopColor={color} stopOpacity={0.05} />
            </linearGradient>
          );
        })}
      </defs>
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
        iconType="rect"
        iconSize={12}
        formatter={renderLegendLabel}
      />
      {areas.map((area, idx) => {
        const color = area.color || (area.colorSlot ? DATA_COLOR_SLOTS[area.colorSlot] : defaultColours[idx % defaultColours.length]);
        return (
          <Area
            key={area.key}
            type="monotone"
            dataKey={area.key}
            name={area.label || area.key}
            stroke={color}
            fill={`url(#gradient-${area.key})`}
            strokeWidth={area.strokeWidth || 2.5}
            stackId={area.stackId}
            isAnimationActive={true}
            animationDuration={600}
            animationEasing="ease-out"
          />
        );
      })}
    </ReAreaChart>
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

AreaChart.displayName = 'AreaChart';

