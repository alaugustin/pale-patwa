import React from 'react';
import { AppContentData } from '../../../Data/AppContent';
import { BlockElement } from '../../UI/BlockLevel/BlockElement';
import Button from '../../UI/Form/Button/Button';
import { Typography } from '../../UI/Typography/Typography';
import { IPaginationProps } from './Pagination.d';

const {
  paginationNumberContainer,
  paginationButtonDisabled,
  paginationBoardClasses,
} = AppContentData.uiClasses;

const shouldShowButton = (currentPage: number, currentPageComparator: number, totalPages: number) => {
  return (
    (currentPage === currentPageComparator || totalPages === 0) ? paginationButtonDisabled : 'cursor-pointer'
  );
};

export const Pagination = ({
  prevButtonLabel,
  nextButtonLabel,
  prevButtonDisabled,
  nextButtonDisabled,
  currentPage,
  totalPages,
  prevOnClickFunc,
  nextOnClickFunc
}: IPaginationProps) => {

  return (
    <BlockElement id='pagination' className='mt-6 flex flex-row' variant='nav'>
      <Button
        buttonLabel={prevButtonLabel}
        onClickFunc={prevOnClickFunc}
        buttonDisabled={prevButtonDisabled}
        buttonClass={`${shouldShowButton(currentPage, 1, totalPages)} mr-3`}
      />
      <BlockElement variant='div' className={paginationBoardClasses}>
        <Typography variant='span' className={paginationNumberContainer}>{currentPage}</Typography>
        <Typography variant='span' className='mx-2'>{'of'}</Typography>
        <Typography variant='span' className={paginationNumberContainer}>{totalPages}</Typography>
      </BlockElement>

      <Button
        buttonLabel={nextButtonLabel}
        onClickFunc={nextOnClickFunc}
        buttonDisabled={totalPages === 0 ? true : nextButtonDisabled}
        buttonClass={`${shouldShowButton(currentPage, totalPages, totalPages)} ml-3`}
      />
    </BlockElement>
  );
};
