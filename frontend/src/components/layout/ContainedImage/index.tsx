import styled from '@emotion/styled';
import { Button } from '@mui/material';

const ContainedImage = styled('img')`
  height: 50vh;
  width: 100%;
  object-fit: scale-down;
  display: flex;
  margin: 0 auto;
`;

const ContainedAvatarImage = styled('img')`
  height: 10vh;
  width: 100%;
  object-fit: scale-down;
`;

interface AvatarImageProps {
  src: string;
  alt: string;
  onClick(): void;
}

export const AvatarImage = ({ src, alt, onClick }: AvatarImageProps) => (
  <Button
    sx={{
      display: 'flex',
      margin: '0 auto',
    }}
    onClick={onClick}
  >
    <ContainedAvatarImage src={src} alt={alt} />
  </Button>
);

export default ContainedImage;
