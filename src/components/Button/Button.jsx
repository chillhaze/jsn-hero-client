import React from 'react';
import { Btn } from './Button.styled';

export default function Button({ children, props, onClick }) {
  return (
    <Btn onClick={onClick} {...props}>
      {children}
    </Btn>
  );
}
