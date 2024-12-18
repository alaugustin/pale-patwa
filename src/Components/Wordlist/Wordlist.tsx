import React from 'react';
import List from '../List/List';
import { Typography } from '../Typography/Typography';

interface ListWordData {
  word: string;
}

export default function WordList({ data }: { data: ListWordData[] }) {

  return (
    <section className='flex flex-col justify-center items-center'>
      <Typography variant='h2' className='text-3xl mb-4' text={'Library'} />

      <List data={data} />
    </section>
  );
}
