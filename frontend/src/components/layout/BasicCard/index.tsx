import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from '@mui/material';

interface Props {
  artist_name?: string;
  title?: string;
  object_begin_date?: number;
  object_end_date?: number;
}

const BasicCard = ({
  artist_name,
  title,
  object_begin_date,
  object_end_date,
}: Props) => {
  return (
    <Card sx={{ minWidth: 275, height: '25vh' }}>
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
      <CardActions style={{ marginTop: 'auto' }}>
        <Button size='small'>Learn More</Button>
        <Button size='small'>Vote</Button>
      </CardActions>
    </Card>
  );
};

export default BasicCard;
