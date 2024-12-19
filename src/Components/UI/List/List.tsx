import React from 'react';
import { ListItem } from './ListItem/ListItem';
import { IListProps } from './List.d';

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
          listItemClass='mr-2 mb-2'
        />
      ))}
    </ul>
  );
}
