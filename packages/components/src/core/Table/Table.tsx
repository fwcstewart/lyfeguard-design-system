import React from 'react';
import * as s from './Table.css';

export interface Column<T> {
  /**
   * Header label for the column.
   */
  header: string;
  /**
   * Property name in the data row to use as cell value. If omitted, the `cell` function must be provided.
   */
  accessor?: keyof T;
  /**
   * Custom cell renderer. Receives the full row and returns a React node.
   */
  cell?: (row: T) => React.ReactNode;
}

export interface TableProps<T> {
  /**
   * Array of column definitions. Each column defines how to extract and render cell values.
   */
  columns: Column<T>[];
  /**
   * Data rows to display.
   */
  data: T[];
  /**
   * Callback fired when a row is clicked.
   */
  onRowClick?: (row: T, index: number) => void;
}

/**
 * Simple data table. Accepts an array of column definitions and rows and renders
 * a tabular view. Supports custom cell renderers and row click handling.
 */
export function Table<T>({ columns, data, onRowClick }: TableProps<T>) {
  return (
    <table className={s.table}>
      <thead>
        <tr>
          {columns.map((col, idx) => (
            <th key={idx} className={s.headerCell}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            className={s.row}
            onClick={() => onRowClick?.(row, rowIndex)}
          >
            {columns.map((col, colIndex) => (
              <td key={colIndex} className={s.cell}>
                {col.cell ? col.cell(row) : (col.accessor ? String(row[col.accessor] ?? '') : null)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}