import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from '@mui/material';

interface Props {
  author?: string;
  title?: string;
}

const BasicCard = ({ author, title }: Props) => {
  return (
    <Card sx={{ minWidth: 275, height: '25vh' }}>
      <CardContent sx={{ height: '65%' }}>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          {author}
        </Typography>
        <Typography sx={{ fontSize: 18 }} component='div'>
          {title}
        </Typography>
        <Typography sx={{ mb: 1 }} color='text.secondary'>
          ca. 1830–32
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
