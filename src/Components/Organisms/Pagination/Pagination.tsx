import React from 'react';
import { AppContentData } from '../../../Data/AppContent';
import { BlockElement } from '../../UI/BlockLevel/BlockElement';
import Button from '../../UI/Form/Button/Button';
import { Typography } from '../../UI/Typography/Typography';
import { PaginationJumpButton } from './PaginationJumpButton/PaginationJumpButton';
import { IPaginationProps } from './Pagination.d';

const {
  paginationNumberContainer,
  paginationButtonDisabled,
  paginationBoardClasses,
  paginationContainerClasses,
} = AppContentData.uiClasses;

const shouldShowButton = (
  currentPage: number,
  currentPageComparator: number,
  totalPages: number
) => {
  return (
    (currentPage === currentPageComparator || totalPages === 0) ?
      paginationButtonDisabled :
      'cursor-pointer'
  );
};

export const Pagination = ({
  prevButtonLabel,
  prev5ButtonLabel,
  prev10ButtonLabel,
  nextButtonLabel,
  next5ButtonLabel,
  next10ButtonLabel,
  prevButtonDisabled,
  nextButtonDisabled,
  currentPage,
  totalPages,
  prevOnClickFunc,
  nextOnClickFunc,
  setCurrentPage,
}: IPaginationProps) => {
  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const jumpButtons = {
    prevButtons: [
      { amount: prev10ButtonLabel },
      { amount: prev5ButtonLabel }
    ],
    nextButtons: [
      { amount: next5ButtonLabel },
      { amount: next10ButtonLabel }
    ]
  };

  const { prevButtons, nextButtons } = jumpButtons;

  return (
    <BlockElement id='pagination' className={paginationContainerClasses} variant='nav'>
      {prevButtons.map((button) => (
        <PaginationJumpButton
          key={button.amount}
          amount={button.amount}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      ))}

      <Button
        buttonLabel={prevButtonLabel}
        onClickFunc={prevOnClickFunc}
        buttonDisabled={prevButtonDisabled}
        buttonClass={`${shouldShowButton(currentPage, 1, totalPages)} mr-3`}
      />

      <BlockElement variant='div' className={paginationBoardClasses}>
        <Typography variant='span' className={paginationNumberContainer}>{currentPage}</Typography>
        <Typography variant='span' className='mx-2 md:mx-4'>{'of'}</Typography>
        <Typography variant='span' className={paginationNumberContainer}>{totalPages}</Typography>
      </BlockElement>

      <Button
        buttonLabel={nextButtonLabel}
        onClickFunc={nextOnClickFunc}
        buttonDisabled={totalPages === 0 ? true : nextButtonDisabled}
        buttonClass={`${shouldShowButton(currentPage, totalPages, totalPages)} ml-3`}
      />

      {nextButtons.map((button) => (
        <PaginationJumpButton
          key={button.amount}
          amount={button.amount}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      ))}
    </BlockElement>
  );
};
