import React from 'react';
import { Typography } from '../../UI/Typography/Typography';
import { BlockElement } from '../../UI/BlockLevel/BlockElement';
import { IRenderElementHeadProps } from './RenderElementHead.d';

export default function RenderElementHead({
  elementTitle,
  copyWrapperClassName,
  copyData
}: IRenderElementHeadProps) {

  return (
    <>
      <Typography
        variant="h2"
        className='text-3xl mb-4'
      >{elementTitle}</Typography>

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
    </>
  );
}
