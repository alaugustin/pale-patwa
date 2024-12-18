import React from 'react';
import List from '../List/List';
import { Typography } from '../Typography/Typography';
import { IListWordDataProps } from './Wordlist.d';

export default function WordList({ data }: { data: IListWordDataProps[] }) {

  return (
    <section className='flex flex-col justify-center items-center'>
      <Typography variant='h2' className='text-3xl mb-4' text={'Library'} />

      <List data={data} />
    </section>
  );
}
