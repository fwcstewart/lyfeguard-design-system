import React from 'react';
import {
  BarChart as ReBarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from 'recharts';

// Import token values for chart colours. At runtime these values should
// correspond to the Lyfeguard brand colours defined in the tokens package.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { tokens } from '@lyfeguard/tokens/dist/js/tokens.js';

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
   * Custom colour for this bar. Falls back to brand colours if not provided.
   */
  color?: string;
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
  const defaultColours: string[] = [
    tokens.color?.brand?.['500'],
    tokens.color?.brand?.['800'],
    tokens.color?.accent?.mint,
    tokens.color?.neutral?.['600'],
  ].filter(Boolean) as string[];

  return (
    <ReBarChart width={width} height={height} data={data} margin={{ top: 16, right: 32, bottom: 0, left: 0 }}>
      <CartesianGrid strokeDasharray="3 3" stroke={tokens.color?.neutral?.['200'] || '#CFD6D6'} />
      <XAxis dataKey={xKey} stroke={tokens.color?.neutral?.['800'] || '#455252'} />
      <YAxis stroke={tokens.color?.neutral?.['800'] || '#455252'} />
      <Tooltip wrapperStyle={{ fontFamily: tokens.font?.family?.sans || 'sans-serif' }} />
      <Legend />
      {bars.map((bar, idx) => (
        <Bar
          key={bar.key}
          dataKey={bar.key}
          name={bar.label || bar.key}
          fill={bar.color || defaultColours[idx % defaultColours.length]}
        />
      ))}
    </ReBarChart>
  );
};

BarChart.displayName = 'BarChart';