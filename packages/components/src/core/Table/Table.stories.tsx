import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Table } from './Table';

const meta: Meta<typeof Table> = {
  title: 'Core/Table',
  component: Table,
};

export default meta;
type Story = StoryObj<typeof Table>;

interface Person {
  name: string;
  age: number;
  role: string;
  salary: number;
}

const columns = [
  { header: 'Name', accessor: 'name' as const, sortable: true },
  { header: 'Age', accessor: 'age' as const, sortable: true },
  { header: 'Role', accessor: 'role' as const, sortable: true },
  {
    header: 'Salary',
    accessor: 'salary' as const,
    sortable: true,
    cell: (row: Person) => `$${row.salary.toLocaleString()}`,
  },
];

const data: Person[] = [
  { name: 'Alice', age: 28, role: 'Developer', salary: 95000 },
  { name: 'Bob', age: 35, role: 'Designer', salary: 85000 },
  { name: 'Charlie', age: 40, role: 'Product Manager', salary: 120000 },
  { name: 'Diana', age: 32, role: 'Developer', salary: 100000 },
  { name: 'Eve', age: 29, role: 'Designer', salary: 80000 },
];

export const Basic: Story = {
  render: () => (
    <Table
      columns={columns}
      data={data}
      onRowClick={(row) => alert(`Clicked ${row.name}`)}
    />
  ),
};

export const Sortable: Story = {
  render: () => (
    <Table
      columns={columns}
      data={data}
      defaultSort={{ columnIndex: 0, direction: 'asc' }}
    />
  ),
};

export const SingleSelection: Story = {
  render: () => {
    const [selected, setSelected] = useState<number[]>([]);
    return (
      <div>
        <p style={{ marginBottom: '16px' }}>
          Selected: {selected.length > 0 ? data[selected[0]]?.name : 'None'}
        </p>
        <Table
          columns={columns}
          data={data}
          selectable="single"
          selectedRows={selected}
          onSelectionChange={setSelected}
        />
      </div>
    );
  },
};

export const MultipleSelection: Story = {
  render: () => {
    const [selected, setSelected] = useState<number[]>([]);
    return (
      <div>
        <p style={{ marginBottom: '16px' }}>
          Selected {selected.length} of {data.length} rows
        </p>
        <Table
          columns={columns}
          data={data}
          selectable="multiple"
          selectedRows={selected}
          onSelectionChange={setSelected}
        />
      </div>
    );
  },
};

export const WithSortingAndSelection: Story = {
  render: () => {
    const [selected, setSelected] = useState<number[]>([]);
    return (
      <div>
        <p style={{ marginBottom: '16px' }}>
          Selected {selected.length} row(s). Click column headers to sort.
        </p>
        <Table
          columns={columns}
          data={data}
          selectable="multiple"
          selectedRows={selected}
          onSelectionChange={setSelected}
          defaultSort={{ columnIndex: 1, direction: 'asc' }}
        />
      </div>
    );
  },
};