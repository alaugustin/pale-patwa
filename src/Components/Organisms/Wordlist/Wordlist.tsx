import React, { useState } from 'react';
import List from '../../UI/List/List';
import { Typography } from '../../Typography/Typography';
import { AppContentData } from '../../../Data/AppContent';
import { BlockElement } from '../../UI/BlockLevel/BlockElement';
import { Input } from '../../UI/Form/Input/Input';
import { IWordlistProps } from './Wordlist.d';

const { libraryTitleH2, wordlistFilterPlaceholder } = AppContentData.libraryContent;
const { flexItemsCenter, blockElementPadding } = AppContentData.uiClasses;

export default function WordList({ data }: IWordlistProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const normalizeString = (str: string) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };
  const filteredData = data.filter(item =>
    normalizeString(item.word.toLowerCase()).includes(normalizeString(searchTerm.toLowerCase()))
  );

  return (
    <BlockElement variant='section' className={`${flexItemsCenter} ${blockElementPadding} flex-col flex-1 border-t border-gray-100 w-full`}>
      <Typography
        variant='h2'
        className='text-3xl mb-6'
      >{libraryTitleH2}</Typography>

      <Input
        type="text"
        placeholder={wordlistFilterPlaceholder}
        value={searchTerm}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
        className="p-2 mb-8 border rounded-md w-64"
      />

      <List
        data={filteredData}
        linkClass='text-xl flex max-w-4xl flex-wrap justify-center items-center gap-4'
        hasLink={true}
      />
    </BlockElement>
  );
}
