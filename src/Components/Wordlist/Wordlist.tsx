import React from 'react';
import List from '../UI/List/List';
import { Typography } from '../Typography/Typography';
import { AppContentData } from '../../Data/AppContent';
import { IWordlistProps } from './Wordlist.d';

const { libraryTitleH2 } = AppContentData.libraryContent;

export default function WordList({ data }: IWordlistProps) {

  return (
    <section className='flex flex-col justify-center items-center'>
      <Typography
        variant='h2'
        className='text-3xl mb-4'
        text={libraryTitleH2}
      />

      <List
        data={data}
        linkClass='flex max-w-4xl flex-wrap justify-center items-center'
        hasLink={true}
      />
    </section>
  );
}
