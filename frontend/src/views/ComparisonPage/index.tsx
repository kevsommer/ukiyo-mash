import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import { Container, Paper } from '@mui/material';
import BasicCard from '../../components/layout/BasicCard';
import ContainedImage from '../../components/layout/ContainedImage';

const HorizontalContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5vh;
`;

const baseURL = 'http://localhost:8000';

interface Artwork {
  id: number;
  object_img_small: string;
  artist_name: string;
  title: string;
  object_begin_date: number;
  object_end_date: number;
}

const ComparisonPage = () => {
  const [leftArtwork, setLeftArtwork] = useState<Artwork | undefined>(
    undefined
  );
  const [rightArtwork, setRightArtwork] = useState<Artwork | undefined>(
    undefined
  );

  const [reload, setReload] = useState<boolean>(true);

  useEffect(() => {
    if (reload) {
      axios.get(`${baseURL}/items/random`).then((res) => {
        setLeftArtwork(res.data[0]);
        setRightArtwork(res.data[1]);
      });
      setReload(false);
    }
  }, [reload]);

  const voteArtwork = (id: number): void => {
    if (leftArtwork?.id === id) {
      axios
        .patch(`${baseURL}/items/vote/${id}/${rightArtwork?.id}`)
        .then((res) => {
          if (res.status === 200) {
            setLeftArtwork(undefined);
            setRightArtwork(undefined);
            setReload(true);
            console.log(res.data);
          }
        });
    } else {
      axios
        .patch(`${baseURL}/items/vote/${id}/${leftArtwork?.id}`)
        .then((res) => {
          if (res.status === 200) {
            setLeftArtwork(undefined);
            setRightArtwork(undefined);
            setReload(true);
            console.log(res.data);
          }
        });
    }
  };

  return (
    <HorizontalContainer maxWidth='lg'>
      <Paper elevation={3} style={{ width: '45%', height: '50vh' }}>
        <ContainedImage src={leftArtwork?.object_img_small} alt='...' />
        <BasicCard {...leftArtwork} onVoteClick={voteArtwork} />
      </Paper>
      <Paper elevation={3} style={{ width: '45%', height: '50vh' }}>
        <ContainedImage src={rightArtwork?.object_img_small} alt='Loading...' />
        <BasicCard {...rightArtwork} onVoteClick={voteArtwork} />
      </Paper>
    </HorizontalContainer>
  );
};

export default ComparisonPage;
