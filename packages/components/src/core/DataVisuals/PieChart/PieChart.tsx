import React from 'react';
import {
  PieChart as RePieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { vars } from '../../../globals.css';
import { DATA_COLOR_SLOTS, DataColorSlot, chartTypography, getTooltipStyle } from '../chartUtils';

export interface PieSegment {
  /**
   * Key in the data object to bind to this segment.
   */
  key: string;
  /**
   * Label for the legend. If omitted, the key will be used.
   */
  label?: string;
  /**
   * Custom colour for this segment. Falls back to semantic colour slots if not provided.
   */
  color?: string;
  /**
   * Semantic colour slot to pull from the design tokens.
   */
  colorSlot?: DataColorSlot;
}

export interface PieChartProps {
  /**
   * Data array for the pie chart. Each object should have a name and value.
   * Example: [{ name: 'Category A', value: 400 }, { name: 'Category B', value: 300 }]
   */
  data: Array<{ name: string; value: number; [key: string]: any }>;
  /**
   * Key in the data objects to use for the value. Defaults to 'value'.
   */
  valueKey?: string;
  /**
   * Key in the data objects to use for the label. Defaults to 'name'.
   */
  nameKey?: string;
  /**
   * Optional width of the chart. Defaults to 400.
   */
  width?: number;
  /**
   * Optional height of the chart. Defaults to 400.
   */
  height?: number;
  /**
   * Whether the chart should be responsive. If true, width and height are ignored.
   */
  responsive?: boolean;
  /**
   * Inner radius for donut charts. If provided, creates a donut chart.
   */
  innerRadius?: number;
  /**
   * Outer radius of the pie. Defaults to 80% of the smaller dimension.
   */
  outerRadius?: number;
  /**
   * Custom colors for segments. If not provided, uses design system colors.
   */
  colors?: string[];
}

/**
 * Modern pie chart component built on top of Recharts with improved visual design.
 * Features better spacing, modern colors, enhanced tooltips, and smooth animations.
 * Displays proportional data with customizable segments and styling that matches the
 * Lyfeguard design system. Can be used as a donut chart by providing an innerRadius.
 */
export const PieChart: React.FC<PieChartProps> = ({ 
  data, 
  valueKey = 'value',
  nameKey = 'name',
  width = 400, 
  height = 400,
  responsive = false,
  innerRadius,
  outerRadius,
  colors,
}) => {
  const defaultColours: string[] = colors || Object.values(DATA_COLOR_SLOTS);
  const tooltipStyle = getTooltipStyle();

  const renderLegendLabel = (value: string) => (
    <span style={{ 
      color: vars.color.theme.text.secondary, 
      ...chartTypography,
      fontSize: vars.font.size.body.xs,
    }}>{value}</span>
  );

  // Calculate outer radius if not provided (80% of smaller dimension)
  const calculatedOuterRadius = outerRadius || Math.min(width, height) * 0.4;
  const calculatedInnerRadius = innerRadius || 0;

  const chartContent = (
    <RePieChart width={width} height={height}>
      <Pie
        data={data}
        cx={width / 2}
        cy={height / 2}
        labelLine={false}
        label={({ [nameKey]: name, percent }: any) => `${name}: ${(percent * 100).toFixed(0)}%`}
        outerRadius={calculatedOuterRadius}
        innerRadius={calculatedInnerRadius}
        fill={defaultColours[0] || vars.color.brand500}
        dataKey={valueKey}
        isAnimationActive={true}
        animationDuration={600}
        animationEasing="ease-out"
      >
        {data.map((entry, index) => (
          <Cell 
            key={`cell-${index}`} 
            fill={defaultColours[index % defaultColours.length]}
            stroke={vars.color.theme.surface}
            strokeWidth={2}
          />
        ))}
      </Pie>
      <Tooltip {...tooltipStyle} />
      <Legend
        wrapperStyle={{
          paddingTop: vars.spacing[4],
        }}
        iconType="circle"
        iconSize={10}
        formatter={renderLegendLabel}
      />
    </RePieChart>
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

PieChart.displayName = 'PieChart';

