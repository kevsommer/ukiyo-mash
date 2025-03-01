import ContainedImage from '../../components/layout/ContainedImage';
import Container from '../../components/Container';
import Heading from '../../components/Heading';
import styled from '@emotion/styled';

const StyledImage = styled('img')`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Paragraph = styled('p')`
  color: var(--secondary-color);
`;

const AboutPage = () => (
  <Container>
    <Heading>What is Ukiyo Mash?</Heading>
    <Paragraph>
      Ukiyo Mash is a little project inspired by the FaceMash application from
      the movie "The Social Network", because I always thought that elo ranking
      is an interesting concept.
    </Paragraph>
    <Heading>Elo Ranking</Heading>
    <Paragraph>
      The elo rating system has its roots in chess. It was originally devised by
      Arpad Elo, a Hungarian-American physics professor. The method itself is
      very simple and can be described in only a few formulas.
    </Paragraph>
    <Paragraph>
      First the algorithm computes the expected score of a player A: E_A, which
      dependes on the scores of both players R_B and R_A. And analogously the
      expected score for E_B
    </Paragraph>
    <StyledImage
      src='https://wikimedia.org/api/rest_v1/media/math/render/svg/7c80282e9c95e92d6b210467aab48a8c4c81ef10'
      alt='Elo Expected Score Formula'
    />
    <Paragraph>
      Afterwards the update is computed
    </Paragraph>
    <StyledImage
      src='https://wikimedia.org/api/rest_v1/media/math/render/svg/1cad9fb1cfc6a8e845493ac9a40eb98541a4641a'
      alt='Elo Update Formula'
    />
    <Heading >
      Ukiyo-e
    </Heading>
    <ContainedImage
      style={{ width: '40vw', height: '40vh' }}
      src='https://images.metmuseum.org/CRDImages/as/web-large/DP122173.jpg'
      alt='test'
    />
    <Paragraph>
      Ukiyo-e is japanese for "pictures of the floating world". It is a popular
      genre of Japanese art, in which artists usually woodblock prints of
      natural scenes, daily life and famous people. In contrast to most art at
      the time, it could be reproduced hundreds or even thousands of times and
      was relatively affordable.
    </Paragraph>
    <ContainedImage
      style={{ width: '40vw', height: '40vh' }}
      src='https://images.metmuseum.org/CRDImages/as/web-large/DP141240.jpg'
      alt='test'
    />
    <Paragraph>
      To me this is what sets style apart from conventional art. Art should be
      accessible to all and the uniqueness of an artwork should not determine
      its worth. While I can appreciate European art as well, I do think it's
      less accessible. Artworks should be something that one can appreciate
      without having an art degree.
    </Paragraph>
    <Heading>
      Implementation
    </Heading>
    <Paragraph>
      Since this is only a small side project, the implementation is very
      light-weight as well. The frontend uses React and utilises material-ui.
      While the backend is built using FastAPI, which is Python-based
      light-weight backend framework. It is heavily inspired by flask, but is
      more modern and has a great documentation. The database is built using
      sqllite3 and is handled using the sqlalchemy library. You can view the
      project code on github and deploy it very quickly yourself using Docker.
    </Paragraph>
  </Container>
);

export default AboutPage;
