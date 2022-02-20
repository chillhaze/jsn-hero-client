import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastBar, Toaster } from 'react-hot-toast';
import Loader from 'components/Loader/Loader';
import Header from '../Header/Header';
import Container from 'components/Container/Container';
import { Main } from './App.styled';
import { useSelector } from 'react-redux';
import { getChosenHero } from 'redux/heroes/heroes-selectors';

// Lazy load
const HeroesList = lazy(() => import('pages/HeroesList/HeroesList'));
const HeroInfo = lazy(() => import('pages/HeroInfo/HeroInfo'));
const NewHero = lazy(() => import('pages/NewHero/NewHero'));

export default function App() {
  const chosenHero = useSelector(getChosenHero);
  return (
    <>
      <Toaster
        position="top-center"
        // reverseOrder={true}
        toastOptions={{
          success: {
            style: {
              borderRadius: '5px',
              background: '#e4eafc',
              color: '#75aba8',
            },
          },
          error: {
            style: {
              borderRadius: '5px',
              background: 'tomato',
              color: '#e4eafc',
            },
          },
        }}
        containerStyle={{
          top: 10,
        }}
      >
        {t => (
          <ToastBar
            toast={t}
            style={{
              ...t.style,
              animation: t.visible
                ? 'custom-enter 1s ease'
                : 'custom-exit 1s ease',
            }}
          />
        )}
      </Toaster>
      <Header />

      <Main>
        <Container>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" exact element={<HeroesList />} />

              {chosenHero && (
                <Route path="/hero-info" exact element={<HeroInfo />} />
              )}

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
