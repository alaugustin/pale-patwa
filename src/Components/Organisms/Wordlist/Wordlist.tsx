import React, { useState, useEffect } from 'react';
import List from '../../UI/List/List';
import { Typography } from '../../Typography/Typography';
import { AppContentData } from '../../../Data/AppContent';
import { BlockElement } from '../../UI/BlockLevel/BlockElement';
import { Pagination } from '../Pagination/Pagination';
import { DictionarySearch } from '../DictionarySearch/DictionarySearch';
import { IWordlistProps } from './Wordlist.d';

const {
  libraryTitleH2,
  wordlistFilterPlaceholder,
  prevButtonLabel,
  nextButtonLabel
} = AppContentData.libraryContent;
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

  const handleSearch = (value: string) => setSearchTerm(value);

  const filteredData = data.filter(item =>
    searchFields.some(field =>
      normalizeString(String(item[field as keyof typeof item]).toLowerCase()).includes(normalizeString(searchTerm.toLowerCase()))
    )
  );

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;
  const decreasePage = () => handlePageChange(currentPage - 1);
  const increasePage = () => handlePageChange(currentPage + 1);

  const handleClear = () => {
    handleSearch('');
  };

  return (
    <BlockElement variant='section' className={`${flexItemsCenter} ${blockElementPadding} flex-col flex-1 border-t border-gray-100 w-full`}>
      <Typography
        variant='h2'
        className='text-3xl mb-6'
      >{libraryTitleH2}</Typography>

      <DictionarySearch
        placeholderLabel={wordlistFilterPlaceholder}
        searchValue={searchTerm}
        onChangeFunc={handleSearch}
        onClickFunc={handleClear}
      />

      <List
        data={currentItems}
        linkClass='text-xl flex max-w-4xl flex-wrap justify-center items-center gap-4'
        hasLink={true}
      />

      <Pagination
        prevButtonLabel={prevButtonLabel}
        prevOnClickFunc={decreasePage}
        prevButtonDisabled={isFirstPage}
        nextButtonLabel={nextButtonLabel}
        nextOnClickFunc={increasePage}
        nextButtonDisabled={isLastPage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </BlockElement>
  );
}
