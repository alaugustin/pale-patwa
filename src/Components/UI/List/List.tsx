import React from 'react';
import { AppContentData } from '../../../Data/AppContent';
import { ListItem } from './ListItem/ListItem';
import { IListProps } from './List.d';

const { listClass } = AppContentData.uiClasses;

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
          hasLink={hasLink}
          listItemClass={listClass}
        />
      ))}
    </ul>
  );
}
