import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import * as heroesOperations from '../../redux/heroes/heroes-operations';
import * as heroesSelectors from '../../redux/heroes/heroes-selectors';
import { setChosenHero, setPageOption } from '../../redux/heroes/heroes-slice';
import Pagination from '@mui/material/Pagination';
import noImageKid from '../../images/noImageKid.png';
import {
  Section,
  List,
  ListItem,
  HeroAvatar,
  HeroName,
  PaginationElement,
} from './HeroesList.styled';

export default function HeroesList() {
  const dispatch = useDispatch();
  const currentPage = useSelector(heroesSelectors.getCurrentPage);
  const pageItemsLimit = useSelector(heroesSelectors.getItemsLimit);
  const count = useSelector(heroesSelectors.getHeroesCount);

  const location = useLocation();
  const heroes = useSelector(heroesSelectors.getHeroesData);

  useEffect(() => {
    dispatch(heroesOperations.getHeroes({ currentPage, pageItemsLimit }));
  }, [currentPage, dispatch, location]);

  const handleCurrentPageChange = (_, num) => {
    dispatch(setPageOption(num));
  };

  const handleHeroChoose = hero => {
    dispatch(setChosenHero(hero));
  };

  const totalCount = Math.ceil(count / pageItemsLimit);

  return (
    <Section>
      <List>
        {heroes.map(hero => {
          return (
            <ListItem key={hero._id} onClick={() => handleHeroChoose(hero)}>
              <NavLink to="/hero-info">
                <HeroAvatar
                  src={
                    hero.images[0]
                      ? `http://localhost:8080/${hero.images[0]}`
                      : noImageKid
                  }
                />
                <HeroName>{hero.nickname}</HeroName>
              </NavLink>
            </ListItem>
          );
        })}
      </List>

      <PaginationElement>
        <Pagination
          // size={isMobile ? 'small' : 'large'}
          size={'large'}
          count={totalCount}
          variant="outlined"
          shape="rounded"
          defaultPage={1}
          onChange={handleCurrentPageChange}
          page={currentPage}
          color={currentPage ? 'primary' : 'secondary'}
        />
      </PaginationElement>
    </Section>
  );
}
