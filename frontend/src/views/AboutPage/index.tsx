import { Container, Typography } from '@mui/material';
import ContainedImage from '../../components/layout/ContainedImage';

const AboutPage = () => (
  <Container maxWidth='md' sx={{ maxHeight: '90vh', overflow: 'auto' }}>
    <Typography variant='h4' sx={{ marginTop: '2vh', textAlign: 'center' }}>
      What is Ukiyo Mash?
    </Typography>
    <Typography sx={{ my: '1em', fontSize: '18px' }}>
      Ukiyo Mash is a little project inspired by the FaceMash application from
      the movie "The Social Network", because I always thought that elo ranking
      is an interesting concept.
    </Typography>
    <Typography variant='h4' sx={{ textAlign: 'center' }}>
      Elo Ranking
    </Typography>
    <Typography variant='body2' sx={{ my: '1em', fontSize: '18px' }}>
      The elo rating system has its roots in chess. It was originally devised by
      Arpad Elo, a Hungarian-American physics professor. The method itself is
      very simple and can be described in only a few formulas.
    </Typography>
    <Typography sx={{ my: '1em', fontSize: '18px' }}>
      First the algorithm computes the expected score of a player A: E_A, which
      dependes on the scores of both players R_B and R_A. And analogously the
      expected score for E_B
    </Typography>
    <img
      src='https://wikimedia.org/api/rest_v1/media/math/render/svg/7c80282e9c95e92d6b210467aab48a8c4c81ef10'
      alt='Elo Expected Score Formula'
    />
    <Typography sx={{ my: '1em', fontSize: '18px' }}>
      Afterwards the update is computed
    </Typography>
    <img
      src='https://wikimedia.org/api/rest_v1/media/math/render/svg/1cad9fb1cfc6a8e845493ac9a40eb98541a4641a'
      alt='Elo Update Formula'
    />
    <Typography sx={{ my: '0.5em', textAlign: 'center' }} variant='h4'>
      Ukiyo-e
    </Typography>

    <ContainedImage
      style={{ width: '40vw', height: '40vh' }}
      src='https://images.metmuseum.org/CRDImages/as/web-large/DP122173.jpg'
      alt='test'
    />
    <Typography sx={{ my: '1em', fontSize: '18px' }}>
      Ukiyo-e is japanese for "pictures of the floating world". It is a popular
      genre of Japanese art, in which artists usually woodblock prints of
      natural scenes, daily life and famous people. In contrast to most art at
      the time, it could be reproduced hundreds or even thousands of times and
      was relatively affordable.
    </Typography>
    <ContainedImage
      style={{ width: '40vw', height: '40vh' }}
      src='https://images.metmuseum.org/CRDImages/as/web-large/DP141240.jpg'
      alt='test'
    />
    <Typography sx={{ my: '1em', fontSize: '18px' }}>
      To me this is what sets style apart from conventional art. Art should be
      accessible to all and the uniqueness of an artwork should not determine
      its worth. While I can appreciate European art as well, I do think it's
      less accessible. Artworks should be something that one can appreciate
      without having an art degree.
    </Typography>
  </Container>
);

export default AboutPage;
