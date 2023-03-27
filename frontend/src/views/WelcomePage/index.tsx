import { Container, Typography } from '@mui/material';
import ContainedImage from '../../components/layout/ContainedImage';
import mash from '../../assets/mash.png';
import ranking from '../../assets/ranking.png';

const WelcomePage = () => (
  <Container maxWidth='md' sx={{ maxHeight: '90vh', overflow: 'auto' }}>
    <Typography
      color='secondary'
      variant='h4'
      sx={{ marginTop: '2vh', textAlign: 'center' }}
    >
      Explore Ukiyo-e's
    </Typography>
    <ContainedImage
      style={{ height: '35vh', margin: '5vh 0' }}
      src={
        'https://collectionapi.metmuseum.org/api/collection/v1/iiif/51086/135477/main-image'
      }
    />
    <Typography sx={{ textAlign: 'center' }} color='secondary' variant='h4'>
      Compare Them
    </Typography>
    <Typography
      color='secondary'
      sx={{ my: '1em', fontSize: '18px' }}
    ></Typography>
    <ContainedImage style={{ marginTop: '5vh' }} src={mash} alt='mash' />
    <Typography
      sx={{ textAlign: 'center', margin: '5vh 0' }}
      color='secondary'
      variant='h4'
    >
      View Rankings
    </Typography>
    <ContainedImage style={{ marginTop: '5vh' }} src={ranking} alt='mash' />
  </Container>
);

export default WelcomePage;
