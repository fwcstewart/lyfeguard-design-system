import React from 'react';
import { Table } from './Table';

export default {
  title: 'Core/Table',
  component: Table,
};

interface Person {
  name: string;
  age: number;
  role: string;
}

const columns = [
  { header: 'Name', accessor: 'name' as const },
  { header: 'Age', accessor: 'age' as const },
  { header: 'Role', accessor: 'role' as const },
];

const data: Person[] = [
  { name: 'Alice', age: 28, role: 'Developer' },
  { name: 'Bob', age: 35, role: 'Designer' },
  { name: 'Charlie', age: 40, role: 'Product Manager' },
];

export const Basic = () => (
  <Table columns={columns} data={data} onRowClick={(row) => alert(`Clicked ${row.name}`)} />
);