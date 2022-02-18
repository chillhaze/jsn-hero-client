import React from 'react';
import Container from 'components/Container/Container';
import { Wrapper, HeaderNav, Logo, LinkTo } from './Header.styled';
import { useLocation, Link } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  return (
    <Wrapper>
      <Container>
        <HeaderNav>
          <Logo>
            <a href="/">SuperheroApp</a>
          </Logo>

          {location.pathname !== '/' ? (
            <LinkTo to="/">Home</LinkTo>
          ) : (
            <LinkTo to="/new-hero">Create new Hero</LinkTo>
          )}

          {/* <Link href="/new-hero">Create new Hero</Link> */}
        </HeaderNav>
      </Container>
    </Wrapper>
  );
}
