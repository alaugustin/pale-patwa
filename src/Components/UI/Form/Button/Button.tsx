import React from 'react';
import { IButtonProps } from './Button.d';

export default function Button({
  buttonLabel,
  buttonClass,
  onClickFunc
}: IButtonProps) {

  return (
    <button
      onClick={onClickFunc}
      className={buttonClass}
    >
      {buttonLabel}
    </button>
  );
}
