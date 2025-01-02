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
      className={buttonClass}
      disabled={buttonDisabled}
      onClick={onClickFunc}
    >
      {buttonLabel}
    </button>
  );
}
