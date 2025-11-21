import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { vars } from '../../globals.css';
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

const DarkSurface: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div
    className="dark"
    style={{
      background: vars.color.theme.background,
      color: vars.color.theme.text.primary,
      padding: vars.spacing[6] as unknown as string,
      display: 'flex',
      flexDirection: 'column',
      gap: vars.spacing[4] as unknown as string,
    }}
  >
    {children}
  </div>
);

export const Basic: Story = {
  render: () => <Table columns={columns} data={data} />,
};

export const SortableLight: Story = {
  render: () => (
    <Table
      columns={columns}
      data={data}
      defaultSort={{ columnIndex: 0, direction: 'asc' }}
    />
  ),
};

export const SortableDark: Story = {
  render: () => (
    <DarkSurface>
      <Table
        columns={columns}
        data={data}
        defaultSort={{ columnIndex: 2, direction: 'asc' }}
      />
    </DarkSurface>
  ),
};

export const SelectableLight: Story = {
  render: () => {
    const [selected, setSelected] = useState<number[]>([]);
    return (
      <div style={{ display: 'grid', gap: vars.spacing[3] as unknown as string }}>
        <p style={{ margin: 0 }}>
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

export const SelectableDark: Story = {
  render: () => {
    const [selected, setSelected] = useState<number[]>([]);
    return (
      <DarkSurface>
        <p style={{ margin: 0 }}>
          Selected {selected.length} of {data.length} rows
        </p>
        <Table
          columns={columns}
          data={data}
          selectable="multiple"
          selectedRows={selected}
          onSelectionChange={setSelected}
          defaultSort={{ columnIndex: 1, direction: 'asc' }}
        />
      </DarkSurface>
    );
  },
};

export const CompactDensity: Story = {
  render: () => (
    <Table
      columns={columns}
      data={data}
      selectable="multiple"
      density="compact"
      defaultSort={{ columnIndex: 0, direction: 'asc' }}
    />
  ),
};