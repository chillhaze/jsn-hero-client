import styled from '@emotion/styled';

export const Section = styled.section`
  margin-top: ${props => props.theme.spacing(40)};
  margin-bottom: ${props => props.theme.spacing(20)};
  padding-left: ${props => props.theme.spacing(20)};
  padding-right: ${props => props.theme.spacing(20)};
`;

export const Wrapper = styled.div`
  margin-bottom: ${props => props.theme.spacing(10)};
  display: flex;

  background-color: ${props => props.theme.colors.colorMain};
  border: 1px solid ${props => props.theme.colors.colorMain};
  border-radius: 3px;

  box-shadow: 1px 3px 10px -4px #050505;

  position: relative;

  & button {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 10;

    padding: 3px 7px;

    background-color: ${props => props.theme.colors.bgColorSecondary};
    color: ${props => props.theme.colors.textColorSecondary};
    border: 1px solid ${props => props.theme.colors.bgColorSecondary};
    border-radius: 3px;

    &:hover {
      background-color: ${props => props.theme.colors.bgColorMain};
      color: ${props => props.theme.colors.textColorMain};
      border: 1px solid ${props => props.theme.colors.bgColorSecondary};
    }

    & svg {
      margin-left: 5px;
    }
  }
`;

export const HeroAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  & img {
    width: 250px;
    /* height: 450px; */
  }
`;

export const HeroDescription = styled.div`
  padding: ${props => props.theme.spacing(10)};
  padding-top: ${props => props.theme.spacing(15)};

  display: flex;
  flex-direction: column;

  & p {
    margin-bottom: ${props => props.theme.spacing(5)};
    font-size: 16px;
    font-style: italic;
  }
`;

export const InfoSubtitle = styled.div`
  font-size: 12px;
  line-height: 22px;

  color: ${props => props.theme.colors.textColorMain};
`;

export const Title = styled.h2`
  margin: ${props => props.theme.spacing(10)} 0;
  font-size: 42px;
  line-height: 48px;
  font-weight: 700;
  /* font-style: italic; */
`;

export const RealName = styled.p``;

export const OriginDescription = styled.p``;

export const Superpowers = styled.p``;

export const Phrase = styled.p``;

export const HeroImages = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ImageItem = styled.li`
  width: 185px;
  height: 277px;
  margin-right: ${props => props.theme.spacing(3)};
  padding: ${props => props.theme.spacing(1)};

  position: relative;

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
  &:focus-visible {
    box-shadow: 0px 1px 17px 0px #313232;
    border-radius: 3px;
    transform: scale(1.01);

    & button {
      display: block;
    }
  }

  & button {
    display: none;
    position: absolute;
    top: -9px;
    right: -8px;
    z-index: 10;

    padding: 0;
    margin: 0;

    background-color: transparent;
    border: none;

    &:hover {
      background-color: transparent;
      border: none;
    }

    & svg {
      fill: ${props => props.theme.colors.textColorMain};
      width: 25px;
      height: 25px;
      background-color: ${props => props.theme.colors.bgColorMain};
      border-radius: 50%;
      box-shadow: 4px 3px 10px -4px #050505;

      &:hover {
        fill: ${props => props.theme.colors.red};
        transition: 200ms linear;
      }
    }
  }

  & img {
    height: 236px;
    width: 250px;
    overflow: hidden;
  }
`;
