import styled from '@emotion/styled';

interface Props {
  id?: number;
  artist_name?: string;
  title?: string;
  object_url?: string;
  object_begin_date?: number;
  object_end_date?: number;
  onVoteClick(id: number): void;
}

const Card = styled('div')`
  min-width: 275px;
  height: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
`;

const CardActions = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 0.5rem;
`;

const Button = styled('button')`
  font-size: 14px;
  border-radius: 0.25rem;
  cursor: pointer;
  font-weight: bold;
  border: none;
  padding: 0.5rem 2rem;
  background-color: transparent;
  border: 1px solid var(--primary-color);
  color: var(--primary-color); 
`;

const VoteButton = styled(Button)`
  background-color: var(--primary-color);
  color: var(--contrast-text);
`;

const ArtistName = styled('div')`\
  color: var(--secondary-color);
  font-size: 14px;
  margin: 0.5rem 0;
`;

const ArtworkTitle = styled('div')`
  font-size: 18px; 
  margin: 0.5rem 0;
`;

const ArtworkDate = styled('div')`
  font-size: 14px;
`;

const BasicCard = ({
  id,
  artist_name,
  title,
  object_url,
  object_begin_date,
  object_end_date,
  onVoteClick,
}: Props) => {
  return (
    <Card>
      <div>
        <ArtistName>{artist_name}</ArtistName>
        <ArtworkTitle>{title}</ArtworkTitle>
        <ArtworkDate>ca. {object_begin_date}-{object_end_date}</ArtworkDate>
      </div>

      <CardActions>
        <Button onClick={() => { window.open(object_url); }}>
          Learn More
        </Button>
        <VoteButton onClick={() => { if (id !== undefined) onVoteClick(id); }}> Vote
        </VoteButton>
      </CardActions>
    </Card>
  );
};

export default BasicCard;
