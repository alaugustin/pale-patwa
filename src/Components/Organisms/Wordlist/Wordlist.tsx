import React from 'react';
import { AppContentData } from '../../../Data/AppContent';
import { BlockElement } from '../../UI/BlockLevel/BlockElement';
import RenderElementHead from '../RenderElementHead/RenderElementHead';
import WordlistObjects from './WordSearchPagination/WordSearchPagination';
import { IWordlistProps } from './Wordlist.d';

const {
  libraryTitleH2,
  wordListContent
} = AppContentData.libraryContent;

const {
  wordListContainerClasses,
  centeredBlurbCopyClasses,
  bookIconClasses
} = AppContentData.uiClasses;

const { bookIcon } = AppContentData.icons;

export default function WordList({ data }: IWordlistProps) {
  return (
    <BlockElement variant='div' id='main-content' className={wordListContainerClasses}>
      <RenderElementHead
        elementTitle={libraryTitleH2}
        copyWrapperClassName={centeredBlurbCopyClasses}
        copyData={wordListContent}
        headingIcon={bookIcon(bookIconClasses)}
      />

      <WordlistObjects data={data} />
    </BlockElement>
  );
}
