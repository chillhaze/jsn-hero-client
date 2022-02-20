import styled from '@emotion/styled';

export const Section = styled.section`
  margin-top: ${props => props.theme.spacing(10)};
  margin-bottom: ${props => props.theme.spacing(20)};
  padding-left: ${props => props.theme.spacing(20)};
  padding-right: ${props => props.theme.spacing(20)};
`;

export const HeroWrapper = styled.div`
  padding: ${props => props.theme.spacing(5)};
  margin-bottom: ${props => props.theme.spacing(10)};

  background-color: ${props => props.theme.colors.colorMain};
  border: 1px solid ${props => props.theme.colors.colorMain};
  border-radius: 3px;

  box-shadow: 1px 3px 10px -4px #050505;

  position: relative;

  & > button {
    display: none;
    position: absolute;
    top: -12px;
    right: -8px;
    z-index: 10;

    padding: 0;
    margin: 0;

    /* color: ${props => props.theme.colors.red}; */

    background-color: transparent;
    border: none;

    &:hover {
      background-color: transparent;
      border: none;

      padding: 0;
      margin: 0;
    }

    & > svg {
      fill: ${props => props.theme.colors.textColorMain};
      width: 25px;
      height: 25px;
      background-color: ${props => props.theme.colors.bgColorMain};
      border: 1px solid transparent;
      border-radius: 50%;
      box-shadow: 4px 3px 10px -4px #050505;

      &:hover {
        fill: ${props => props.theme.colors.red};
        border: 1px solid ${props => props.theme.colors.red};
        transition: 200ms linear;
      }
    }

    & > span {
      position: absolute;
      top: 5px;
      right: -75px;
      z-index: 10;

      /* background-color: ${props => props.theme.colors.bgColorSecondary}; */
    }
  }

  &:hover {
    & > button {
      display: block;
    }
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > button {
    display: flex;
    align-items: center;
    padding: 5px 12px;

    background-color: ${props => props.theme.colors.bgColorSecondary};
    color: ${props => props.theme.colors.textColorSecondary};
    border: 1px solid ${props => props.theme.colors.bgColorSecondary};
    border-radius: 3px;

    &:hover {
      background-color: ${props => props.theme.colors.bgColorMain};
      color: ${props => props.theme.colors.textColorMain};
      border: 1px solid ${props => props.theme.colors.bgColorSecondary};
    }

    & > svg {
      margin-left: 5px;
    }
  }

  & button:nth-of-type(1) {
    padding-left: 3px;
  }

  @media (max-width: 850px) {
    margin-bottom: ${props => props.theme.spacing(3)};
  }
`;

export const InfoWrapper = styled.div`
  display: flex;

  @media (max-width: 850px) {
    flex-direction: column;
    margin-bottom: ${props => props.theme.spacing(3)};
  }
`;

export const HeroAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  & img {
    min-width: 250px;
    max-width: 250px;

    @media (max-width: 450px) {
      min-width: 150px;
      max-width: 150px;
    }
  }
`;

export const HeroDescription = styled.div`
  padding: ${props => props.theme.spacing(5)};
  padding-top: ${props => props.theme.spacing(2)};

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
  line-height: 20px;

  color: ${props => props.theme.colors.textColorMain};
`;

export const Title = styled.h2`
  margin: ${props => props.theme.spacing(10)} 0;
  margin-bottom: ${props => props.theme.spacing(5)};
  font-size: 42px;
  line-height: 48px;
  font-weight: 700;
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
  margin-bottom: ${props => props.theme.spacing(3)};
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
