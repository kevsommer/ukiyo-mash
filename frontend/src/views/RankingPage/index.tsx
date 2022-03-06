import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

const rows: GridRowsProp = [
  { id: 1, col1: 'Hello', col2: 'World' },
  { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
  { id: 3, col1: 'MUI', col2: 'is Amazing' },
];

const columns: GridColDef[] = [
  { field: 'col1', headerName: 'Column 1', width: 150 },
  { field: 'col2', headerName: 'Column 2', width: 150 },
];

const RankingPage = () => {
  return (
    <div style={{ height: 400, width: '40%', margin: '3em auto 0 auto' }}>
      <DataGrid autoHeight rows={rows} columns={columns} />
    </div>
  );
};

export default RankingPage;
