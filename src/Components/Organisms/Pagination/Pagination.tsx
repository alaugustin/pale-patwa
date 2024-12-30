import React from 'react';
import { BlockElement } from '../../UI/BlockLevel/BlockElement';
import Button from '../../UI/Form/Button/Button';
import { Typography } from '../../Typography/Typography';
import { IPaginationProps } from './Pagination.d';

export const Pagination = ({
  prevButtonLabel,
  nextButtonLabel,
  prevButtonDisabled,
  nextButtonDisabled,
  paginationInfo,
  prevOnClickFunc,
  nextOnClickFunc
}: IPaginationProps) => {
  return (
    <BlockElement id='pagination' className='mt-6' variant='nav'>
      <Button
        buttonLabel={prevButtonLabel}
        onClickFunc={prevOnClickFunc}
        buttonDisabled={prevButtonDisabled}
        buttonClass={'mr-3'}
      />

      <Typography
        variant='span'
      >{paginationInfo}</Typography>

      <Button
        buttonLabel={nextButtonLabel}
        onClickFunc={nextOnClickFunc}
        buttonDisabled={nextButtonDisabled}
        buttonClass={'ml-3'}
      />
    </BlockElement>
  );
};
