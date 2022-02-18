import styled from '@emotion/styled';
import DefaultButton from '../../../components/Button/Button';

export const Wrapper = styled.nav`
  margin-top: 275px;

  text-align: center;
`;

export const NavItems = styled.ul`
  display: flex;
  justify-content: center;

  & li:nth-last-of-type(1) {
    margin-right: 0px;
  }
`;

export const NavItem = styled.li`
  margin-right: ${props => props.theme.spacing(2)};
  border-radius: 5px;

  & button {
    padding: ${props => props.theme.spacing(2)} 12px;
    border-radius: 5px;
    border: 1px solid ${props => props.theme.colors.colorMain};

    transition: transform 300ms linear;
    transition: 200ms linear;
    box-shadow: 1px 3px 10px -4px #050505;

    &:hover {
      box-shadow: 0px 2px 17px -1px #313232;
      border-radius: 5px;
      transform: scale(1.05);
    }
    /* 
    & :active {
      outline-style: none;
    } */
  }
`;

export const Button = styled(DefaultButton)``;
