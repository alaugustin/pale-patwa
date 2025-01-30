import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import { ListItem } from '../../../UI/List/ListItem/ListItem';
import { AppContentData } from '../../../../Data/AppContent';
import { Pagination } from '../../Pagination/Pagination';
import { DictionarySearch } from '../../DictionarySearch/DictionarySearch';
import { Typography } from '../../../UI/Typography/Typography';
import { BlockElement } from '../../../UI/BlockLevel/BlockElement';
import Button from '../../../UI/Form/Button/Button';
import AlphaFilter from '../AlphaFilter/AlphaFilter';
import { IWordSearchPaginationProps } from './WordSearchPagination.d';

const {
  wordlistFilterPlaceholder,
  prevButtonLabel,
  nextButtonLabel,
  paginationItemsPerHeight
} = AppContentData.libraryContent;

const { alphabet } = AppContentData.libraryContent.filter;
const { wordListListClasses, alphabetFilterClasses } = AppContentData.uiClasses;
const { searchFields } = AppContentData.globalPageContent;

const {
  normalizeText,
  getWindowDimensions
} = AppContentData.helperFunc;

export default function WordlistObjects({ data }: IWordSearchPaginationProps) {
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
    return normalizeText(str);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const [activeLetterFilter, setActiveLetterFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    setActiveLetterFilter('');
  };

  const filteredData = data.filter(item => {
    if (activeLetterFilter) {
      return normalizeString(String(item.word)).toLowerCase().startsWith(normalizeString(activeLetterFilter.toLowerCase()));
    }

    return searchFields.some(field =>
      normalizeString(String(item[field as keyof typeof item]).toLowerCase()).includes(normalizeString(searchTerm.toLowerCase()))
    );
  });

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

    return words.map((item) => {
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

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (!isLastPage) {
        increasePage();
      }
    },
    onSwipedRight: () => {
      if (!isFirstPage) {
        decreasePage();
      }
    },
    preventScrollOnSwipe: true,
    trackMouse: true
  });

  return (
    <>
      <BlockElement id='alphabet-filter' className='flex flex-wrap flex-row mb-4'>
        {alphabet.split('').map(letter => (
          <Button
            key={letter}
            buttonClass={alphabetFilterClasses}
            buttonLabel={letter}
            onClickFunc={() => {
              setActiveLetterFilter(letter);
              setSearchTerm('');
            }}
          />
        ))}
      </BlockElement>

      {/* <AlphaFilter alphabetCollection={alphabet} /> */}

      <DictionarySearch
        placeholderLabel={wordlistFilterPlaceholder}
        searchValue={searchTerm}
        onChangeFunc={handleSearch}
        onClickFunc={handleClear}
      />

      <ul className={wordListListClasses} {...swipeHandlers}>
        {addSubscriptsToWords(currentItems).map((item, index) => (
          <ListItem
            key={index}
            word={item.word}
            definition={item.definition}
            egSentenceKw={item.egSentenceKw}
            egSentenceEn={item.egSentenceEn}
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
        setCurrentPage={handlePageChange}
      />
    </>
  );
}
