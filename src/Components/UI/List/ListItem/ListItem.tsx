import React from 'react';
import { IListItemProps } from './ListItem.d';

export const ListItem = ({ word, hasLink, listItemClass }: IListItemProps) => {

  return (
    <li className={listItemClass}>{
      hasLink ? <a href={`/${word}`}>{word}</a> : <span>{word}</span>
    }</li>
  );
};
