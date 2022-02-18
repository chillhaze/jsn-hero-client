import React from 'react';
import { TailSpin } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

export default function Loader() {
  return (
    <LoaderWrapper>
      <TailSpin type="TailSpin" color="#75aba8" height={66} width={66} />
    </LoaderWrapper>
  );
}
