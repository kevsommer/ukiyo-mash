import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  IconButton,
} from '@mui/material';
import FullscreenIcon from '@mui/icons-material/Fullscreen';

interface Props {
  id?: number;
  artist_name?: string;
  title?: string;
  object_url?: string;
  object_begin_date?: number;
  object_end_date?: number;
  onVoteClick(id: number): void;
}

const BasicCard = ({
  id,
  artist_name,
  title,
  object_url,
  object_begin_date,
  object_end_date,
  onVoteClick,
}: Props) => {
  return (
    <Card sx={{ minWidth: 275, height: '30vh' }}>
      <CardContent sx={{ height: '65%' }}>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          {artist_name}
        </Typography>

        <Typography sx={{ fontSize: 18 }} component='div'>
          {title}
        </Typography>
        <Typography sx={{ mb: 1 }} color='text.secondary'>
          ca. {object_begin_date}-{object_end_date}
        </Typography>
      </CardContent>
      <CardActions
        style={{
          marginTop: 'auto',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <Button
            size='small'
            onClick={() => {
              window.open(object_url);
            }}
          >
            Learn More
          </Button>
          <Button
            size='small'
            onClick={() => {
              if (id !== undefined) onVoteClick(id);
            }}
          >
            Vote
          </Button>
        </div>
        <IconButton>
          <FullscreenIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default BasicCard;
