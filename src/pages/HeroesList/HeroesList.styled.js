import styled from '@emotion/styled';

export const Section = styled.section`
  margin-top: ${props => props.theme.spacing(40)};
  margin-bottom: ${props => props.theme.spacing(20)};
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  & li:nth-last-of-type(1) {
    margin-right: 0px;
  }

  @media (max-width: 750px) {
    flex-wrap: wrap;
  }
`;

export const ListItem = styled.li`
  width: 185px;
  height: 277px;
  margin-right: ${props => props.theme.spacing(3)};
  padding: ${props => props.theme.spacing(1)};

  background-color: ${props => props.theme.colors.bgColorMain};
  color: ${props => props.theme.colors.textColorMain};
  border-radius: 3px;

  transition: transform 300ms linear;
  box-shadow: 1px 3px 10px -4px #050505;

  @media (max-width: 750px) {
    flex-direction: column;
    margin-bottom: ${props => props.theme.spacing(3)};
  }

  &:hover,
  &:focus {
    box-shadow: 0px 1px 17px 0px #313232;
    border-radius: 3px;
    transform: scale(1.01);
  }
`;

export const HeroAvatar = styled.img`
  height: 236px;
  width: 250px;
  overflow: hidden;
`;

export const HeroName = styled.p`
  padding-top: ${props => props.theme.spacing(2)};
  padding-bottom: ${props => props.theme.spacing(1)};
  padding-left: ${props => props.theme.spacing(1)};
  padding-right: ${props => props.theme.spacing(1)};

  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
`;
