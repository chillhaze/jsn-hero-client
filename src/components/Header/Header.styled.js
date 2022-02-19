import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Wrapper = styled.header`
  background-color: ${props => props.theme.colors.bgColorMain};
  box-shadow: 1px 3px 10px -4px #050505;
`;

export const HeaderNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  padding: ${props => props.theme.spacing(3)} 0;
  color: ${props => props.theme.colors.textColorMain};

  @media (max-width: 750px) {
    padding: ${props => props.theme.spacing(2)} 0;
  }

  & > a {
    font-size: 32px;
    line-height: 38px;
    font-weight: 500;

    & > a :focus-visible {
      outline-offset: ${props => props.theme.spacing(2)};
      outline-style: solid;
      outline: 1px solid ${props => props.theme.colors.colorSecondary};
      border-radius: 3px;
    }

    @media (max-width: 750px) {
      font-size: 20px;
      line-height: 32px;
    }
  }
`;

export const LinkTo = styled(Link)`
  padding: ${props => props.theme.spacing(1)} ${props => props.theme.spacing(8)};

  display: block;

  color: ${props => props.theme.colors.textColorMain};
  border: 1px solid ${props => props.theme.colors.colorSecondary};
  border-radius: 3px;
  cursor: pointer;

  transition: 200ms linear;

  &:hover {
    color: ${props => props.theme.colors.textColorSecondary};
    background-color: ${props => props.theme.colors.colorSecondary};
  }

  & :focus-visible {
    color: ${props => props.theme.colors.textColorSecondary};
    background-color: ${props => props.theme.colors.colorSecondary};

    outline-offset: 3px;
    outline-style: solid;
    outline: 1px solid ${props => props.theme.colors.colorSecondary};
  }

  @media (max-width: 750px) {
    padding: 4px ${props => props.theme.spacing(2)};

    font-size: 12px;
  }
`;
