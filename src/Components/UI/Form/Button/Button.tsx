import React from 'react';
import { IButtonProps } from './Button.d';

export default function Button({
  buttonLabel,
  buttonClass,
  buttonDisabled,
  ariaLabel,
  onClickFunc
}: IButtonProps) {

  return (
    <button
      className={buttonClass}
      disabled={buttonDisabled}
      onClick={onClickFunc}
      aria-label={ariaLabel}
    >{buttonLabel}</button>
  );
}
