import { useState, useEffect } from 'react';
import axios from 'axios';
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

const baseURL = 'http://localhost:8000';

const ComparisonPage = () => {
  const [leftArtwork, setLeftArtwork] = useState({ object_img: '' });
  const [rightArtwork, setRightArtwork] = useState({ object_img: '' });

  useEffect(() => {
    axios.get(`${baseURL}/items/random`).then((res) => {
      setLeftArtwork(res.data[0]);
      setRightArtwork(res.data[1]);
    });
  }, []);

  return (
    <HorizontalContainer maxWidth='md'>
      <Paper elevation={3} style={{ width: '45%' }}>
        <ContainedImage src={leftArtwork?.object_img} alt='image' />
        <BasicCard />
      </Paper>
      <Paper elevation={3} style={{ width: '45%' }}>
        <ContainedImage src={rightArtwork?.object_img} alt='image' />
        <BasicCard />
      </Paper>
    </HorizontalContainer>
  );
};

export default ComparisonPage;
