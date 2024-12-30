import React from 'react';
import { IButtonProps } from './Button.d';

export default function Button({
  buttonLabel,
  buttonClass,
  buttonDisabled,
  onClickFunc
}: IButtonProps) {

  return (
    <button
      onClick={onClickFunc}
      className={buttonClass}
      disabled={buttonDisabled}
    >
      {buttonLabel}
    </button>
  );
}
