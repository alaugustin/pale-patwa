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
      {data?.map((element, index) => {
        const {
          word,
          definition,
          egSentenceEn,
          egSentenceKw,
          synonym,
          antonym,
          crossReference
        } = element;

        return (
          <ListItem
            key={index}
            word={word}
            definition={definition}
            egSentenceKw={egSentenceKw}
            egSentenceEn={egSentenceEn}
            synonym={synonym}
            antonym={antonym}
            crossReference={crossReference}
            hasLink={hasLink}
            listItemClass={listItemClass}
          />
        );
      })}
    </ul>
  );
}
