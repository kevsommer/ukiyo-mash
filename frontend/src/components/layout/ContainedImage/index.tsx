import styled from '@emotion/styled';

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
  cursor: pointer;
`;

interface AvatarImageProps {
  src: string;
  alt: string;
  onClick(): void;
}

export const AvatarImage = ({ src, alt, onClick }: AvatarImageProps) => (
  <ContainedAvatarImage src={src} alt={alt} onClick={onClick} />
);

export default ContainedImage;
