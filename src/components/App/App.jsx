import React, { Suspense, lazy, useEffect } from 'react';
import Loader from 'components/Loader/Loader';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from '../Header/Header';
// import Main from '../Main/Main';
import Container from 'components/Container/Container';

// import Filter from "../Filter/Filter";

import { Main } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';

import * as heroesOperations from 'redux/heroes/heroes-operations';
import * as heroesSelectors from 'redux/heroes/heroes-selectors';

const HeroesList = lazy(() => import('pages/HeroesList/HeroesList'));
const HeroInfo = lazy(() => import('pages/HeroInfo/HeroInfo'));
const NewHero = lazy(() => import('pages/NewHero/NewHero'));

export default function App() {
  const dispatch = useDispatch();
  const currentPage = useSelector(heroesSelectors.getCurrentPage);
  const pageItemsLimit = useSelector(heroesSelectors.getItemsLimit);

  useEffect(() => {
    dispatch(heroesOperations.getHeroes({ currentPage, pageItemsLimit }));
  }, [dispatch]);

  return (
    <>
      <Header />

      <Main>
        <Container>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" exact element={<HeroesList />} />
              <Route path="/hero-info" exact element={<HeroInfo />} />
              <Route path="/new-hero" exact element={<NewHero />} />

              {/* any route below*/}
              <Route path="*" element={<Navigate replace to={'/'} />} />
            </Routes>
          </Suspense>
        </Container>
      </Main>
    </>
  );
}
