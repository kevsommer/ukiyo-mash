import Container from '../../components/Container';
import Heading from '../../components/Heading';
import ContainedImage from '../../components/layout/ContainedImage';
import mash from '../../assets/mash.png';
import ranking from '../../assets/ranking.png';

const WelcomePage = () => (
  <Container>
    <Heading>Explore Ukiyo-e's</Heading>
    <ContainedImage
      style={{ height: '35vh', margin: '5vh 0' }}
      src={
        'https://collectionapi.metmuseum.org/api/collection/v1/iiif/51086/135477/main-image'
      }
    />
    <Heading>Compare Them</Heading>
    <ContainedImage style={{ marginTop: '5vh' }} src={mash} alt='mash' />
    <Heading>View Rankings</Heading>
    <ContainedImage style={{ marginTop: '5vh' }} src={ranking} alt='mash' />
  </Container>
);

export default WelcomePage;
