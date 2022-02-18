import React from 'react';
import { Wrapper } from './Button.styled';

export default function Button({ children, props }) {
  return <Wrapper {...props}>{children}</Wrapper>;
}
