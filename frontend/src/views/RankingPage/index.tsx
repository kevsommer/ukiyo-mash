import { useEffect, useState } from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import axios from 'axios';

const columns: GridColDef[] = [
  { field: 'artist_name', headerName: 'Artist Name', width: 150 },
  { field: 'title', headerName: 'Title', width: 300 },
  { field: 'elo', headerName: 'ELO', width: 100 },
];

const baseURL = 'http://localhost:8000';

const RankingPage = () => {
  const [rows, setRows] = useState<GridRowsProp>([]);

  useEffect(() => {
    axios.get(`${baseURL}/items`).then((res) => {
      setRows(res.data);
    });
  }, []);

  return (
    <div style={{ height: 600, width: '40%', margin: '3em auto 0 auto' }}>
      <DataGrid
        pageSize={10}
        rowsPerPageOptions={[10]}
        rows={rows}
        columns={columns}
      />
    </div>
  );
};

export default RankingPage;
