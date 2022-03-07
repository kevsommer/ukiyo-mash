import styled from '@emotion/styled';
import { Container, Paper } from '@mui/material';
import BasicCard from '../../components/layout/BasicCard';

const ContainedImage = styled('img')`
  height: 25vh;
  object-fit: scale-down;
  display: flex;
  margin: 0 auto;
`;

const HorizontalContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5vh;
`;

const ComparisonPage = () => (
  <HorizontalContainer maxWidth='md'>
    <Paper elevation={3} style={{ width: '45%' }}>
      <ContainedImage
        src={
          'https://collectionapi.metmuseum.org/api/collection/v1/iiif/45434/134438/main-image'
        }
        alt='image'
      />
      <BasicCard />
    </Paper>
    <Paper elevation={3} style={{ width: '45%' }}>
      <ContainedImage
        src={
          'https://collectionapi.metmuseum.org/api/collection/v1/iiif/53789/140370/main-image'
        }
        alt='image'
      />
      <BasicCard />
    </Paper>
  </HorizontalContainer>
);

export default ComparisonPage;
