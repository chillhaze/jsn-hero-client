import React, { useEffect } from 'react';
import {
  Section,
  List,
  ListItem,
  HeroAvatar,
  HeroName,
} from './HeroesList.styled';

import Pagination from './Pagination/Pagination';
import { useDispatch } from 'react-redux';
import * as heroesReducers from '../../redux/heroes/heroes-slice';
import * as heroesOperations from '../../redux/heroes/heroes-operations';
import * as heroesSelectors from '../../redux/heroes/heroes-selectors';
import { NavLink, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function HeroesList() {
  const dispatch = useDispatch();
  const heroes = useSelector(heroesSelectors.getHeroesData);
  // const currentPage = useSelector(heroesSelectors.getCurrentPage);
  // const pageItemsLimit = useSelector(heroesSelectors.getItemsLimit);

  const handleHeroChoose = (e, hero) => {
    dispatch(heroesReducers.setChosenHero(hero));
  };

  return (
    <Section>
      <List>
        {heroes.map(hero => {
          return (
            <ListItem key={hero._id} onClick={e => handleHeroChoose(e, hero)}>
              <NavLink to="/hero-info">
                <HeroAvatar src={`http://localhost:8080/${hero.images[0]}`} />
                <HeroName>{hero.nickname}</HeroName>
              </NavLink>
            </ListItem>
          );
        })}
      </List>

      <Pagination />
    </Section>
  );
}
