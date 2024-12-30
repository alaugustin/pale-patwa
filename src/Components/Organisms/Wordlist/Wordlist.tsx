import React, { useState, useEffect } from 'react';
import List from '../../UI/List/List';
import { Typography } from '../../Typography/Typography';
import { AppContentData } from '../../../Data/AppContent';
import { BlockElement } from '../../UI/BlockLevel/BlockElement';
import { Input } from '../../UI/Form/Input/Input';
import Button from '../../UI/Form/Button/Button';
import { IWordlistProps } from './Wordlist.d';

const { libraryTitleH2, wordlistFilterPlaceholder } = AppContentData.libraryContent;
const { flexItemsCenter, blockElementPadding } = AppContentData.uiClasses;
const searchFields = ['word', 'definition', 'egSentenceKw', 'egSentenceEn', 'etymology'];
const ITEMS_PER_PAGE = 25;

export default function WordList({ data }: IWordlistProps) {
  const normalizeString = (str: string) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };

  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const filteredData = data.filter(item =>
    searchFields.some(field =>
      normalizeString(String(item[field as keyof typeof item]).toLowerCase()).includes(normalizeString(searchTerm.toLowerCase()))
    )
  );

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

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
        data={currentItems}
        linkClass='text-xl flex max-w-4xl flex-wrap justify-center items-center gap-4'
        hasLink={true}
      />

      <BlockElement id='pagination' variant='nav'>
        <Button
          // buttonClass={primaryButton}
          buttonLabel='Previous'
          onClickFunc={() => handlePageChange(currentPage - 1)}
          buttonDisabled={currentPage === 1}
        />

        <Typography
          variant='span'
        >{currentPage} of {totalPages}</Typography>

        <Button
          // buttonClass={primaryButton}
          buttonLabel='Next'
          onClickFunc={() => handlePageChange(currentPage + 1)}
          buttonDisabled={currentPage === totalPages}
        />
      </BlockElement>
    </BlockElement>
  );
}
