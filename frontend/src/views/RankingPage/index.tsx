import { useEffect, useState } from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import axios from 'axios';
import { AvatarImage } from '../../components/layout/ContainedImage';

const columns: GridColDef[] = [
  { field: 'rank', headerName: 'Rank', flex: 0.5, minWidth: 50 },
  { field: 'artist_name', headerName: 'Artist Name', flex: 1, minWidth: 150 },
  { field: 'title', headerName: 'Title', flex: 3, minWidth: 150 },
  { field: 'elo', headerName: 'ELO', flex: 0.5, minWidth: 50 },
  {
    field: 'oject_image_small',
    headerName: 'Image',
    flex: 1,
    minWidth: 150,
    renderCell: (params) => {
      return (
        <AvatarImage
          onClick={() => window.open(params.row.object_url)}
          src={params.row.object_img_small}
          alt=''
        />
      );
    },
  },
];

const baseURL = 'http://localhost:8000';

const RankingPage = () => {
  const [rows, setRows] = useState<GridRowsProp>([]);

  useEffect(() => {
    axios.get(`${baseURL}/items`).then((res) => {
      setRows(
        res.data.map((item: any, index: number) => {
          return { ...item, rank: index + 1 };
        })
      );
    });
  }, []);

  return (
    <div style={{ height: '80vh', width: '50%', margin: '3em auto 0 auto' }}>
      <DataGrid rowHeight={100} rows={rows} columns={columns} />
    </div>
  );
};

export default RankingPage;
