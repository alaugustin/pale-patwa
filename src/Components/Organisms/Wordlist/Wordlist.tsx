import React, { useState, useEffect } from 'react';
import List from '../../UI/List/List';
import { Typography } from '../../UI/Typography/Typography';
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
const {
  wordListContainerClasses,
  wordListListClasses
} = AppContentData.uiClasses;
const searchFields = [
  'word',
  'definition',
  'egSentenceKw',
  'egSentenceEn',
  'etymology'
];

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default function WordList({ data }: IWordlistProps) {
  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
  }

  const { height } = useWindowDimensions();

  const ITEMS_PER_HEIGHT = {
    0: 10,     // default
    667: 15,
    896: 20,
    1024: 25,
    1280: 33
  };

  const PAGINATION_ITEMS_PER_PAGE = Object.entries(ITEMS_PER_HEIGHT)
    .reverse()
    .find(([breakpoint]) => height > Number(breakpoint))?.[1]
    ?? ITEMS_PER_HEIGHT[0];

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

  const indexOfLastItem = currentPage * PAGINATION_ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - PAGINATION_ITEMS_PER_PAGE;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / PAGINATION_ITEMS_PER_PAGE);

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;
  const decreasePage = () => handlePageChange(currentPage - 1);
  const increasePage = () => handlePageChange(currentPage + 1);

  const handleClear = () => {
    handleSearch('');
  };

  return (
    <BlockElement variant='section' className={wordListContainerClasses}>
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
        linkClass={wordListListClasses}
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
