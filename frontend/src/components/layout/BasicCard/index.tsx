import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from '@mui/material';

const BasicCard = () => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          Katsushika Hokusai
        </Typography>
        <Typography variant='h5' component='div'>
          Under the Wave off Kanagawa
        </Typography>
        <Typography sx={{ mb: 1 }} color='text.secondary'>
          ca. 1830–32
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          Edo period (1615–1868)
        </Typography>
        <Typography variant='body2'>
          Under the Wave off Kanagawa (Kanagawa oki nami ura), also known as The
          Great Wave, from the series Thirty-six Views of Mount Fuji (Fugaku
          sanjūrokkei)
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default BasicCard;
