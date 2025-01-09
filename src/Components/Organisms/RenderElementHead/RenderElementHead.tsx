import React from 'react';
import { Typography } from '../../UI/Typography/Typography';
import { BlockElement } from '../../UI/BlockLevel/BlockElement';
import { IRenderElementHeadProps } from './RenderElementHead.d';

export default function RenderElementHead({
  elementTitle,
  copyWrapperClassName,
  copyData,
  headingIcon
}: IRenderElementHeadProps) {

  return (
    <>
      <Typography variant='span' className='flex'>
        {headingIcon && headingIcon}
        <Typography
          variant="h2"
          className='text-3xl mb-4'
        >{elementTitle}</Typography>
      </Typography>

      {copyData && (
        <BlockElement className={copyWrapperClassName}>{
          copyData.map((blurbCopy, index) => (
            <Typography
              key={index}
              className='mb-2'
            >
              {blurbCopy}
            </Typography>
          ))
        }</BlockElement>
      )}
    </>
  );
}
