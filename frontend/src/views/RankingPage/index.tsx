import { useTable, useSortBy, usePagination } from 'react-table';
import { useEffect, useState, useMemo } from 'react';
import { AvatarImage } from '../../components/layout/ContainedImage';
import axios from 'axios';

const RankingPage = () => {
  const [data, setData] = useState<any[]>([]);
  const baseURL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    axios.get(`${baseURL}/items`).then((res) => {
      setData(
        res.data.map((item: any, index: number) => ({
          ...item,
          rank: index + 1,
        }))
      );
    });
  }, [baseURL]);

  const columns = useMemo(
    () => [
      {
        Header: 'Rank',
        accessor: 'rank',
        width: 50,
      },
      {
        Header: 'Artist Name',
        accessor: 'artist_name',
        width: 150,
      },
      {
        Header: 'Title',
        accessor: 'title',
        width: 150,
      },
      {
        Header: 'ELO',
        accessor: 'elo',
        width: 50,
      },
      {
        Header: 'Image',
        accessor: 'object_image_small',
        width: 150,
        Cell: ({ row }: any) => (
          <AvatarImage
            onClick={() => window.open(row.original.object_url)}
            src={row.original.object_img_small}
            alt=""
          />
        ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex },
  }: any = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 } as any,
    },
    useSortBy,
    usePagination
  );

  return (
    <div style={{ width: '50%', margin: '3em auto 0 auto' }}>
      <table
        {...getTableProps()}
        style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}
      >
        <thead>
          {headerGroups.map((headerGroup: any) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map((column: any) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  key={column.id}
                  style={{
                    border: '1px solid #ddd',
                    padding: '8px',
                    background: '#f4f4f4',
                    cursor: 'pointer',
                  }}
                >
                  {column.render('Header')}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row: any) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.id} style={{ borderBottom: '1px solid #ddd' }}>
                {row.cells.map((cell: any) => (
                  <td
                    {...cell.getCellProps()}
                    key={cell.column.id}
                    style={{ border: '1px solid #ddd', padding: '8px' }}
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div style={{ marginTop: '1em', textAlign: 'center' }}>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
      </div>
    </div>
  );
};

export default RankingPage;

