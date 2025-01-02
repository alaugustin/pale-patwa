import React from 'react';
import { IInputProps } from './Input.d';

export const Input = ({
  type,
  placeholder,
  value,
  onChange,
  className
}: IInputProps) => {

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      className={className}
      onChange={onChange}
    />
  );
};
