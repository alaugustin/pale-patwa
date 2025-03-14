import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import { ListItem } from '../../../UI/List/ListItem/ListItem';
import { AppContentData } from '../../../../Data/AppContent';
import { Pagination } from '../../Pagination/Pagination';
import { DictionarySearch } from '../../DictionarySearch/DictionarySearch';
import { BlockElement } from '../../../UI/BlockLevel/BlockElement';
import Button from '../../../UI/Form/Button/Button';
import { IWordSearchPaginationProps } from './WordSearchPagination.d';

const { alphabet } = AppContentData.libraryContent.filter;
const { searchFields } = AppContentData.globalPageContent;

const {
  wordListListClasses,
  alphabetFilterClasses,
  alphabetFilterClassesAllButton,
  alphabetFilterHolderClasses
} = AppContentData.uiClasses;

const {
  wordlistFilterPlaceholder,
  paginationItemsPerHeight
} = AppContentData.libraryContent;

const {
  prevButtonLabel,
  back5Label,
  back10Label,
  nextButtonLabel,
  fwd5Label,
  fwd10Label
} = AppContentData.libraryContent.pagination;

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
  };

  const filteredData = data.filter(item => {
    const matchesAlphaFilter = !activeLetterFilter ||
      normalizeString(String(item.word)).toLowerCase().startsWith(normalizeString(activeLetterFilter.toLowerCase()));

    const matchesSearch = !searchTerm || (
      activeLetterFilter
        ? normalizeString(String(item.word)).toLowerCase().includes(normalizeString(searchTerm.toLowerCase()))
        : searchFields.some(field =>
          normalizeString(String(item[field as keyof typeof item]).toLowerCase()).includes(normalizeString(searchTerm.toLowerCase()))
        )
    );

    return matchesAlphaFilter && matchesSearch;
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

  // Group items by word to assign subscripts
  const groupedItems = currentItems.reduce((acc, item) => {
    const normalizedWord = normalizeString(item.word).toLowerCase();
    if (!acc[normalizedWord]) {
      acc[normalizedWord] = [];
    }
    acc[normalizedWord].push(item);
    return acc;
  }, {} as Record<string, typeof currentItems>);

  return (
    <>
      <BlockElement id='alphabet-filter' className={alphabetFilterHolderClasses}>
        <Button
          buttonClass={alphabetFilterClassesAllButton}
          buttonLabel="All"
          onClickFunc={() => {
            setActiveLetterFilter('');
            setSearchTerm('');
          }}
        />
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

      <DictionarySearch
        placeholderLabel={wordlistFilterPlaceholder}
        searchValue={searchTerm}
        onChangeFunc={handleSearch}
        onClickFunc={handleClear}
      />

      <ul className={wordListListClasses} {...swipeHandlers}>
        {Object.values(groupedItems).flat().map((item, index) => {
          const normalizedWord = normalizeString(item.word).toLowerCase();
          const subscript = groupedItems[normalizedWord].length > 1
            ? groupedItems[normalizedWord].indexOf(item) + 1
            : undefined;
          return (
            <ListItem
              key={index}
              word={item.word}
              definition={item.definition}
              egSentenceKw={item.egSentenceKw}
              egSentenceEn={item.egSentenceEn}
              variant={item.variant}
              hasLink={true}
              subscript={subscript} // Pass subscript to ListItem
            />
          );
        })}
      </ul>

      <Pagination
        prevButtonLabel={prevButtonLabel}
        prev5ButtonLabel={back5Label}
        prev10ButtonLabel={back10Label}
        prevOnClickFunc={decreasePage}
        prevButtonDisabled={isFirstPage}
        nextButtonLabel={nextButtonLabel}
        next5ButtonLabel={fwd5Label}
        next10ButtonLabel={fwd10Label}
        nextOnClickFunc={increasePage}
        nextButtonDisabled={isLastPage}
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={handlePageChange}
      />
    </>
  );
}
