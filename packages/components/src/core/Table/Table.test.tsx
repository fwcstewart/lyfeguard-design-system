import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { Table, type Column } from './Table';

type Person = {
  name: string;
  age: number;
};

const columns: Column<Person>[] = [
  { header: 'Name', accessor: 'name', sortable: true },
  { header: 'Age', accessor: 'age', sortable: true },
];

const data: Person[] = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
];

describe('Table', () => {
  it('supports keyboard sorting with accurate aria-sort states', () => {
    render(<Table columns={columns} data={data} />);

    const nameHeader = screen.getByRole('columnheader', { name: /Name/ });
    expect(nameHeader).toHaveAttribute('aria-sort', 'none');

    fireEvent.keyDown(nameHeader, { key: 'Enter' });
    expect(nameHeader).toHaveAttribute('aria-sort', 'ascending');

    fireEvent.keyDown(nameHeader, { key: ' ' });
    expect(nameHeader).toHaveAttribute('aria-sort', 'descending');

    fireEvent.keyDown(nameHeader, { key: 'Enter' });
    expect(nameHeader).toHaveAttribute('aria-sort', 'none');
  });

  it('exposes accessible controls for selecting rows', () => {
    render(<Table columns={columns} data={data} selectable="multiple" />);

    const selectAll = screen.getByLabelText('Select all rows');
    expect(selectAll).toBeInTheDocument();

    const firstRowControl = screen.getByLabelText('Select row 1');
    fireEvent.click(firstRowControl);
    expect(firstRowControl).toBeChecked();

    fireEvent.click(selectAll);
    expect(selectAll).toBeChecked();
  });
});
