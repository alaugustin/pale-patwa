import React from 'react';
import { AppContentData } from '../../../Data/AppContent';
import { BlockElement } from '../../UI/BlockLevel/BlockElement';
import Button from '../../UI/Form/Button/Button';
import { Typography } from '../../UI/Typography/Typography';
import { IPaginationProps } from './Pagination.d';

const {
  paginationNumberContainer,
  paginationButton,
  paginationButtonDisabled,
  flexItemsCenter
} = AppContentData.uiClasses;

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
  const buttonStyling = `${paginationButton} ${totalPages === 0 ? `${paginationButtonDisabled}` : 'cursor-pointer'}`;

  return (
    <BlockElement id='pagination' className='mt-6 flex flex-row' variant='nav'>
      <Button
        buttonLabel={prevButtonLabel}
        onClickFunc={prevOnClickFunc}
        buttonDisabled={prevButtonDisabled}
        buttonClass={`mr-3 ${buttonStyling}`}
      />
      <BlockElement variant='div' className={`${flexItemsCenter} flex-row`}>
        <Typography variant='span' className={paginationNumberContainer}>{currentPage}</Typography>
        <Typography variant='span' className='mx-2'>{'of'}</Typography>
        <Typography variant='span' className={paginationNumberContainer}>{totalPages}</Typography>
      </BlockElement>

      <Button
        buttonLabel={nextButtonLabel}
        onClickFunc={nextOnClickFunc}
        buttonDisabled={totalPages === 0 ? true : nextButtonDisabled}
        buttonClass={`ml-3 ${buttonStyling}`}
      />
    </BlockElement>
  );
};
