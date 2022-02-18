import styled from '@emotion/styled';

export const Wrapper = styled.button`
  color: ${props => props.theme.colors.textColorMain};
  background-color: ${props => props.theme.colors.bgColorMain};
  border: 1px solid ${props => props.theme.colors.bgColorSecondary};
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.textColorSecondary};
    background-color: ${props => props.theme.colors.bgColorSecondary};
    border: 1px solid ${props => props.theme.colors.bgColorMain};
    border-radius: 4px;
    transition: 200ms linear;
  }

  &:active {
    color: ${props => props.theme.colors.textColorSecondary};
    background-color: ${props => props.theme.colors.bgColorSecondary};
    transition: 200ms linear;
  }

  &:focus-visible {
    color: ${props => props.theme.colors.textColorSecondary};
    background-color: ${props => props.theme.colors.bgColorSecondary};
    outline-offset: 3px;
    outline-style: solid;
    outline: 1px solid ${props => props.theme.colors.colorSecondary};
    transition: 200ms linear;
  }
`;
