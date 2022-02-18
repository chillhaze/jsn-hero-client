import React from 'react';
import { useSelector } from 'react-redux';
import { Wrapper, NavItems, NavItem, Button } from './Pagination.styled';
// import * as transactionsSelectors from '../../redux/transactions/transactions-selectors';

export default function Pagination({
  isMobile,
  currentPage,
  pageItemsLimit,
  handleCurrentPageChange,
}) {
  // const handleChangePage = (_, num) => {
  //   // dispatch(setPageOption(num));
  //   handleCurrentPageChange(num);
  // };

  // const totalCount = Math.ceil(
  //   useSelector(transactionsSelectors.getTransactionsCount) / pageItemsLimit,
  // );

  return (
    <Wrapper>
      <NavItems>
        <NavItem>
          <Button>{'<'}</Button>
        </NavItem>

        <NavItem>
          <Button>1</Button>
        </NavItem>
        <NavItem>
          <Button>2</Button>
        </NavItem>
        <NavItem>
          <Button>3</Button>
        </NavItem>
        <NavItem>
          <Button>4</Button>
        </NavItem>
        <NavItem>
          <Button>5</Button>
        </NavItem>

        <NavItem>
          <Button>{'>'}</Button>
        </NavItem>
      </NavItems>
    </Wrapper>
  );
}

// <Wrapper>
//   {/* <Stack spacing={2}>
//     <PaginationStyled
//       size={isMobile ? 'small' : 'large'}
//       // size={'large'}
//       count={totalCount}
//       variant="outlined"
//       shape="rounded"
//       defaultPage={1}
//       onChange={handleChangePage}
//       page={currentPage}
//       color={currentPage ? 'primary' : 'secondary'}
//     />
//   </Stack> */}
// </Wrapper>;
