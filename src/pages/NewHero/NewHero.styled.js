import styled from '@emotion/styled';
import Button from 'components/Button/Button';

export const Section = styled.section`
  margin-top: ${props => props.theme.spacing(30)};
  margin-bottom: ${props => props.theme.spacing(20)};

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 850px) {
    margin-top: ${props => props.theme.spacing(15)};
    margin-bottom: ${props => props.theme.spacing(10)};
  }
`;

export const Form = styled.form`
  max-width: 500px;
  padding: ${props => props.theme.spacing(5)};
  padding-top: ${props => props.theme.spacing(15)};
  padding-bottom: ${props => props.theme.spacing(15)};
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${props => props.theme.colors.bgColorMain};
  color: ${props => props.theme.colors.textColorMain};
  border: 1px solid ${props => props.theme.colors.colorMain};
  border-radius: 3px;

  transition: transform 300ms linear;
  box-shadow: 1px 3px 10px -4px #050505;

  & button {
    width: 300px;
    padding: ${props => props.theme.spacing(2)};
  }
`;

export const Label = styled.label`
  padding-bottom: ${props => props.theme.spacing(1)};
  display: block;
  display: flex;
  flex-direction: column;
`;

export const LabelText = styled.span`
  margin-bottom: ${props => props.theme.spacing(1)};
`;

export const Input = styled.input`
  width: 300px;
  margin-bottom: ${props => props.theme.spacing(3)};
  padding: ${props => props.theme.spacing(2)};

  font-style: italic;

  background-color: ${props => props.theme.colors.bgColorSecondary};
  border: 1px solid ${props => props.theme.colors.colorMain};
  border-radius: 3px;

  &:hover {
    transform: scale(1.01);
  }
  &:focus {
    transform: scale(1.01);

    outline-offset: 3px;
    outline-style: solid;
    outline: 1px solid ${props => props.theme.colors.colorSecondary};
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  margin: ${props => props.theme.spacing(4)} 0;
  text-align: center;

  & label {
    cursor: pointer;
    border: 1px solid ${props => props.theme.colors.colorSecondary};
    border-radius: 3px;

    &:hover {
      border: 1px solid ${props => props.theme.colors.colorMain};
      background-color: ${props => props.theme.colors.bgColorSecondary};
      border-radius: 4px;
      color: ${props => props.theme.colors.textColorSecondary};
    }

    &:focus,
    &:active {
      border: 1px solid ${props => props.theme.colors.colorMain};
      background-color: ${props => props.theme.colors.bgColorSecondary};
      border-radius: 4px;

      color: ${props => props.theme.colors.textColorSecondary};

      outline-offset: 3px;
      outline-style: solid;
      outline: 1px solid ${props => props.theme.colors.colorSecondary};
    }

    & input {
      display: none;
    }

    & span {
      padding: ${props => props.theme.spacing(1)};
      padding-top: ${props => props.theme.spacing(2)};
      margin-bottom: 0;

      display: flex;
      justify-content: center;
      align-items: center;

      & svg {
        width: 20px;
        height: 20px;
        margin-left: 5px;
      }
    }
  }
`;

export const SubmitButton = styled(Button)``;
