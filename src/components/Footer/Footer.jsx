import Container from 'components/Container';
import { FooterWrapper, Wrapper, Copyright, Studios } from './Footer.styled';

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <Wrapper>
          <Copyright>© SEVEN.films</Copyright>
          <Studios>L7</Studios>
        </Wrapper>
      </Container>
    </FooterWrapper>
  );
}
