import React from 'react';
import Container from 'components/Container/Container';
import { Wrapper, HeaderNav, Logo, LinkTo } from './Header.styled';
import { useLocation } from 'react-router-dom';
import { setChosenHero } from 'redux/heroes/heroes-slice';
import { useDispatch } from 'react-redux';

export default function Header() {
  const location = useLocation();

  const dispatch = useDispatch();

  const handleHomeLinkClick = () => {
    dispatch(setChosenHero(null));
  };
  return (
    <Wrapper>
      <Container>
        <HeaderNav>
          <Logo>
            <a href="/">SuperheroApp</a>
          </Logo>

          {location.pathname !== '/' ? (
            <LinkTo to="/" onClick={handleHomeLinkClick}>
              Home
            </LinkTo>
          ) : (
            <LinkTo to="/new-hero">Create new Hero</LinkTo>
          )}
        </HeaderNav>
      </Container>
    </Wrapper>
  );
}
