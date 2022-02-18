import styled from '@emotion/styled';

export const LoaderWrapper = styled.div`
  display: flex;
  text-align: center;
  height: 80vh;

  position: relative;

  & svg {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 999;
  }
`;
