import React, {useState} from 'react';
import List from '../UI/List/List';
import { Typography } from '../Typography/Typography';
import { AppContentData } from '../../Data/AppContent';
import { IWordlistProps } from './Wordlist.d';

const { libraryTitleH2 } = AppContentData.libraryContent;

export default function WordList({ data }: IWordlistProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const normalizeString = (str: string) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };
  const filteredData = data.filter(item =>
    normalizeString(item.word.toLowerCase()).includes(normalizeString(searchTerm.toLowerCase()))
  );

  return (
    <section className='flex flex-col justify-center items-center'>
      <Typography
        variant='h2'
        className='text-3xl mb-4'
        text={libraryTitleH2}
      />

      <input
        type="text"
        placeholder="Search words..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 mb-4 border rounded-md w-64"
      />

      <List
        data={filteredData}
        linkClass='flex max-w-4xl flex-wrap justify-center items-center'
        hasLink={true}
      />
    </section>
  );
}
