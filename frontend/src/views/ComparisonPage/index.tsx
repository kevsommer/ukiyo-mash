import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import { Container, Paper } from '@mui/material';
import BasicCard from '../../components/layout/BasicCard';

const ContainedImage = styled('img')`
  height: 25vh;
  width: 20vw;
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

const baseURL = 'http://localhost:8000';

interface Artwork {
  object_img_small: string;
  artist_name: string;
  title: string;
}

const ComparisonPage = () => {
  const [leftArtwork, setLeftArtwork] = useState<Artwork | undefined>(
    undefined
  );
  const [rightArtwork, setRightArtwork] = useState<Artwork | undefined>(
    undefined
  );

  useEffect(() => {
    axios.get(`${baseURL}/items/random`).then((res) => {
      setLeftArtwork(res.data[0]);
      setRightArtwork(res.data[1]);
    });
  }, []);

  return (
    <HorizontalContainer maxWidth='md'>
      <Paper elevation={3} style={{ width: '45%', height: '25vh' }}>
        <ContainedImage src={leftArtwork?.object_img_small} alt='Loading...' />
        <BasicCard
          author={leftArtwork?.artist_name}
          title={leftArtwork?.title}
        />
      </Paper>
      <Paper elevation={3} style={{ width: '45%' }}>
        <ContainedImage src={rightArtwork?.object_img_small} alt='Loading...' />
        <BasicCard
          author={rightArtwork?.artist_name}
          title={rightArtwork?.title}
        />
      </Paper>
    </HorizontalContainer>
  );
};

export default ComparisonPage;
