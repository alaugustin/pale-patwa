import React from 'react';
import { AppContentData } from '../../../Data/AppContent';
import { ListItem } from './ListItem/ListItem';
import { IListProps } from './List.d';

const { listItemClass } = AppContentData.uiClasses;

export default function List({
  data,
  linkClass,
  hasLink
}: IListProps) {

  return (
    <ul className={linkClass}>
      {data?.map((element, index) => (
        <ListItem
          key={index}
          word={element.word}
          definition={element.definition}
          egSentenceKw={element.egSentenceKw}
          egSentenceEn={element.egSentenceEn}
          synonym={element.synonym}
          antonym={element.antonym}
          crossReference={element.crossReference}
          hasLink={hasLink}
          listItemClass={listItemClass}
        />
      ))}
    </ul>
  );
}
