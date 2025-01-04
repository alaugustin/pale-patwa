import React from 'react';
import { Pronounciation } from '../../../Data/Pronounciation';
import { BlockElement } from '../../UI/BlockLevel/BlockElement';
import { Typography } from '../../UI/Typography/Typography';
import { IPronunciationsProps } from './Pronounciation.d';

export default function Pronunciations({
  className,
  titleH2
}: IPronunciationsProps) {
  return (
    <BlockElement variant='section' className={className}>
      <Typography variant='h2' className='text-3xl mb-6'>{titleH2}</Typography>

      <ul className='grid grid-cols-4  md:grid-cols-8 gap-4 w-full'>
        {Pronounciation.map((item, index) => (
          <li key={index} className='flex flex-col items-center justify-center text-xs'>
            <span>{item.letter}</span>
            <span>{item.pronounciation}</span>
            <span>{item.sound}</span>
          </li>
        ))}
      </ul>
    </BlockElement>
  );
}
