import React from 'react';
import { BlockElement } from '../../UI/BlockLevel/BlockElement';
import { ITwoColProps } from './TwoCol.d';

export default function TwoCol({
  twoColData,
}: ITwoColProps) {
  console.log(twoColData);

  return (
    <BlockElement className='flex flex-col md:flex-row flex-wrap w-full max-w-screen-sm'>
      {Array.isArray(twoColData) && twoColData.map((colData, index) => (
        <BlockElement className='flex flex-col basis-50 flex-1 md:odd:pr-2 md:even:pl-2' key={index}>
          {colData}
        </BlockElement>
      ))}
    </BlockElement>
  );
}
