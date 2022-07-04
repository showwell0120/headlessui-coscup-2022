import React from 'react';
import { useTable } from 'react-table';
import { faker } from '@faker-js/faker';

export const contents = [];

export function createContent() {
  return {
    id: faker.datatype.number({ min: 1000000, max: 9999999 }),
    name: faker.commerce.productName(),
    genre: { code: 'romance', name: 'Romance' },
    price: faker.datatype.number({ min: 1000, max: 30000 }),
  };
}

Array.from({ length: 10 }).forEach(() => {
  contents.push(createContent());
});

const localesCurrencyMap = {
  ind: 'IDR',
};

function TableRenderer({ columns, data }) {
  const instance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    instance;

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export function Table({ locales = 'ind' }) {
  const currencyGetter = React.useMemo(
    () =>
      new Intl.NumberFormat(locales, {
        style: 'currency',
        currency: localesCurrencyMap[locales],
        useGrouping: true,
        minimumFractionDigits: 0,
      }),
    [locales]
  );

  const columns = React.useMemo(
    () => [
      { Header: 'ID', accessor: 'id' },
      { Header: 'Video Name', accessor: 'name' },
      { Header: 'Genre', id: 'genre', accessor: (data) => data.genre.name },
      {
        Header: 'Price',
        id: 'price',
        accessor: (data) =>
          data.price ? currencyGetter.format(data.price) : '--',
      },
    ],
    []
  );

  return (
    <div>
      <TableRenderer columns={columns} data={contents} />
    </div>
  );
}

export default Table;
