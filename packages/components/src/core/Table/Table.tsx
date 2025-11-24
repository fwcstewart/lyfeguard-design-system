import React, { useState, useMemo } from 'react';
import * as s from './Table.css';

export type SortDirection = 'asc' | 'desc' | null;

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
  /**
   * Whether this column is sortable. Defaults to false.
   */
  sortable?: boolean;
  /**
   * Custom sort function. If not provided, uses default string/number comparison.
   */
  sortFn?: (a: T, b: T) => number;
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
  /**
   * Enable row selection. 'single' allows one row, 'multiple' allows many.
   */
  selectable?: 'single' | 'multiple';
  /**
   * Selected row indices (for controlled selection).
   */
  selectedRows?: number[];
  /**
   * Callback fired when selection changes. Receives array of selected row indices.
   */
  onSelectionChange?: (selectedIndices: number[]) => void;
  /**
   * Initial sort column index and direction.
   */
  defaultSort?: { columnIndex: number; direction: SortDirection };
  /**
   * Controls vertical density of table cells. Defaults to `comfortable`.
   */
  density?: 'comfortable' | 'compact';
  /**
   * Visual style variant of the table. Defaults to `default`.
   * - `default`: Standard table with subtle borders
   * - `bordered`: Bordered headers and footers with visible borders
   * - `divided`: Divided rows with borders between all rows
   * - `centered`: Centered text alignment for all cells
   */
  variant?: 'default' | 'bordered' | 'divided' | 'centered';
}

/**
 * Enhanced data table with sorting and row selection capabilities.
 *
 * Supports column sorting (click headers), single/multiple row selection,
 * and custom cell renderers.
 */
export function Table<T>({
  columns,
  data,
  onRowClick,
  selectable,
  selectedRows: controlledSelectedRows,
  onSelectionChange,
  defaultSort,
  density = 'comfortable',
  variant = 'default',
}: TableProps<T>) {
  const [sortColumn, setSortColumn] = useState<number | null>(
    defaultSort?.columnIndex ?? null
  );
  const [sortDirection, setSortDirection] = useState<SortDirection>(
    defaultSort?.direction ?? null
  );
  const [internalSelectedRows, setInternalSelectedRows] = useState<number[]>([]);

  const selectedRows = controlledSelectedRows ?? internalSelectedRows;
  const setSelectedRows = onSelectionChange ?? setInternalSelectedRows;

  const sortedData = useMemo(() => {
    if (sortColumn === null || sortDirection === null) {
      return data;
    }

    const column = columns[sortColumn];
    if (!column?.sortable && !column?.sortFn) {
      return data;
    }

    const sorted = [...data];
    sorted.sort((a, b) => {
      if (column.sortFn) {
        return column.sortFn(a, b);
      }

      const aValue = column.accessor ? a[column.accessor] : '';
      const bValue = column.accessor ? b[column.accessor] : '';

      // Handle null/undefined
      if (aValue == null && bValue == null) return 0;
      if (aValue == null) return 1;
      if (bValue == null) return -1;

      // Compare values
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return aValue - bValue;
      }

      return String(aValue).localeCompare(String(bValue));
    });

    return sortDirection === 'desc' ? sorted.reverse() : sorted;
  }, [data, sortColumn, sortDirection, columns]);

  const densityKey = density;

  const handleSort = (columnIndex: number) => {
    const column = columns[columnIndex];
    if (!column?.sortable && !column?.sortFn) return;

    if (sortColumn === columnIndex) {
      // Cycle: asc -> desc -> null
      if (sortDirection === 'asc') {
        setSortDirection('desc');
      } else if (sortDirection === 'desc') {
        setSortDirection(null);
        setSortColumn(null);
      }
    } else {
      setSortColumn(columnIndex);
      setSortDirection('asc');
    }
  };

  const handleRowSelect = (rowIndex: number, event: React.SyntheticEvent) => {
    if (!selectable) return;

    event.stopPropagation();

    if (selectable === 'single') {
      setSelectedRows(selectedRows.includes(rowIndex) ? [] : [rowIndex]);
    } else {
      // multiple
      setSelectedRows(
        selectedRows.includes(rowIndex)
          ? selectedRows.filter((i) => i !== rowIndex)
          : [...selectedRows, rowIndex]
      );
    }
  };

  const tableClassName = `${s.table} ${s.tableVariant[variant]}`;

  return (
    <table className={tableClassName} data-lyfeguard="Table" data-variant={variant}>
      <thead>
        <tr>
          {selectable && (
            <th
              className={`${s.headerCell} ${s.headerDensity[densityKey]} ${s.checkboxHeaderCell}`}
            >
              {selectable === 'multiple' && (
                <input
                  type="checkbox"
                  checked={
                    sortedData.length > 0 &&
                    selectedRows.length === sortedData.length
                  }
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedRows(sortedData.map((_, i) => i));
                    } else {
                      setSelectedRows([]);
                    }
                  }}
                  onClick={(e) => e.stopPropagation()}
                  aria-label="Select all rows"
                />
              )}
            </th>
          )}
          {columns.map((col, idx) => {
            const isSortable = col.sortable || !!col.sortFn;
            const isSorted = sortColumn === idx;
            const currentDirection = isSorted ? sortDirection : null;

          return (
            <th
              key={idx}
              scope="col"
              className={`${s.headerCell} ${s.headerDensity[densityKey]} ${
                isSortable ? s.sortable : ''
              } ${isSorted ? s.sorted : ''}`}
              onClick={() => isSortable && handleSort(idx)}
              onKeyDown={(event) => {
                if (!isSortable) return;
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  handleSort(idx);
                }
              }}
              tabIndex={isSortable ? 0 : undefined}
              aria-sort={
                currentDirection === 'asc'
                  ? 'ascending'
                    : currentDirection === 'desc'
                    ? 'descending'
                    : 'none'
                }
              >
                <div className={s.headerContent}>
                  {col.header}
                  {isSortable && (
                    <span className={s.sortIndicator}>
                      {currentDirection === 'asc' ? '↑' : currentDirection === 'desc' ? '↓' : '⇅'}
                    </span>
                  )}
                </div>
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row, rowIndex) => {
          const isSelected = selectedRows.includes(rowIndex);
          return (
            <tr
              key={rowIndex}
              className={`${s.row} ${isSelected ? s.selected : ''} ${
                onRowClick ? s.clickable : ''
              }`}
              onClick={() => onRowClick?.(row, rowIndex)}
            >
              {selectable && (
                <td
                  className={`${s.cell} ${s.cellDensity[densityKey]}`}
                  onClick={(e) => handleRowSelect(rowIndex, e)}
                >
                  <input
                    type={selectable === 'single' ? 'radio' : 'checkbox'}
                    checked={isSelected}
                    onChange={(e) => handleRowSelect(rowIndex, e)}
                    aria-label={`Select row ${rowIndex + 1}`}
                  />
                </td>
              )}
              {columns.map((col, colIndex) => (
                <td key={colIndex} className={`${s.cell} ${s.cellDensity[densityKey]}`}>
                  {col.cell
                    ? col.cell(row)
                    : col.accessor
                    ? String(row[col.accessor] ?? '')
                    : null}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}