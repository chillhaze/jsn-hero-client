import React from 'react';
import { useSelector } from 'react-redux';
import { Wrapper, NavItems, NavItem, Button } from './Pagination.styled';
import * as heroesSelectors from '../../../redux/heroes/heroes-selectors';
import { PAGE_LIMIT } from '../../../constants/pageItemsLimit';

export default function Pagination({ currentPage, handleCurrentPageChange }) {
  const count = useSelector(heroesSelectors.getHeroesCount);

  const indexOfLastPost = currentPage * PAGE_LIMIT;
  const indexOfFirstPost = indexOfLastPost - PAGE_LIMIT;

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(count / PAGE_LIMIT); i++) {
    pageNumbers.push(i);
  }

  const handleChange = number => {
    console.log(number);
    handleCurrentPageChange(number);
  };

  return (
    <Wrapper>
      <NavItems>
        <NavItem>
          <Button>{'<'}</Button>
        </NavItem>

        {pageNumbers.map((number, index) => {
          return (
            <NavItem key={number}>
              <button onClick={number => handleChange(number)}>{number}</button>
            </NavItem>
          );
        })}

        <NavItem>
          <Button>{'>'}</Button>
        </NavItem>
      </NavItems>
    </Wrapper>
  );
}
