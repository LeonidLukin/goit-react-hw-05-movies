import Container from 'components/Container';
import { LoaderWrapper, Text } from './Loader.styled';

export default function Loader() {
  return (
    <Container>
      <LoaderWrapper>
        <Text>Loading...</Text>
      </LoaderWrapper>
    </Container>
  );
}
