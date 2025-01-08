import React, { useState, useEffect } from 'react';
import { ListItem } from '../../UI/List/ListItem/ListItem';
import { AppContentData } from '../../../Data/AppContent';
import { BlockElement } from '../../UI/BlockLevel/BlockElement';
import { Pagination } from '../Pagination/Pagination';
import { DictionarySearch } from '../DictionarySearch/DictionarySearch';
import RenderElementHead from '../RenderElementHead/RenderElementHead';
import { IWordlistProps } from './Wordlist.d';
import { Typography } from '../../UI/Typography/Typography';

const {
  libraryTitleH2,
  wordlistFilterPlaceholder,
  prevButtonLabel,
  nextButtonLabel,
  paginationItemsPerHeight
} = AppContentData.libraryContent;
const {
  wordListContainerClasses,
  wordListListClasses,
  centeredBlurbCopyClasses,
} = AppContentData.uiClasses;
const { wordListContent } = AppContentData.libraryContent;
const searchFields = [
  'word',
  'definition',
  'egSentenceKw',
  'egSentenceEn',
  'etymology',
  'synonym',
  'antonym',
  'variant',
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

  const ITEMS_PER_HEIGHT = paginationItemsPerHeight;

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

  const addSubscriptsToWords = (words: any[]) => {
    const wordCounts = new Map();

    return words.map((item, index) => {
      const word = item.word;
      wordCounts.set(word, (wordCounts.get(word) || 0) + 1);

      if (wordCounts.get(word) > 1) {
        return {
          ...item,
          word: <Typography variant='span'>{word}<sub>{wordCounts.get(word)}</sub></Typography>
        };
      }
      return item;
    });
  };

  return (
    <BlockElement variant='section' className={wordListContainerClasses}>
      <RenderElementHead
        elementTitle={libraryTitleH2}
        copyWrapperClassName={centeredBlurbCopyClasses}
        copyData={wordListContent}
      />

      <DictionarySearch
        placeholderLabel={wordlistFilterPlaceholder}
        searchValue={searchTerm}
        onChangeFunc={handleSearch}
        onClickFunc={handleClear}
      />

      <ul className={wordListListClasses}>
        {addSubscriptsToWords(currentItems).map((item) => (
          <ListItem
            key={item.id}
            word={item.word}
            definition={item.definition}
            egSentenceKw={item.egSentenceKw}
            egSentenceEn={item.egSentenceEn}
            synonym={item.synonym}
            antonym={item.antonym}
            crossReference={item.crossReference}
            variant={item.variant}
            hasLink={true}
          />
        ))}
      </ul>

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
