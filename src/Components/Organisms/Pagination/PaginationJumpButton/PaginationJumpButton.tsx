import React from 'react';
import { AppContentData } from '../../../../Data/AppContent';
import Button from '../../../UI/Form/Button/Button';
import { IPaginationJumpButtonProps } from './PaginationJumpButton.d';

const {
  paginationButtonDisabled,
  paginationNextJumpClasses,
  paginationPrevJumpClasses
} = AppContentData.uiClasses;

export const PaginationJumpButton = ({
  amount,
  currentPage,
  totalPages,
  onPageChange
}: IPaginationJumpButtonProps) => {
  const isForward = amount > 0;
  const isDisabled = isForward
    ? currentPage + amount > totalPages
    : currentPage + amount <= 0;

  return (
    <Button
      buttonLabel={`${amount > 0 ? '+' : ''}${amount}`}
      onClickFunc={() => onPageChange(currentPage + amount)}
      buttonDisabled={isDisabled}
      buttonClass={`${isForward ?
        paginationNextJumpClasses :
        paginationPrevJumpClasses} ${isDisabled ?
        paginationButtonDisabled :
        ''}`
      }
    />
  );
};
