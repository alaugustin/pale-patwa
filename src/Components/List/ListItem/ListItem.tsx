import React from 'react';
import { IListItemProps } from './ListItem.d';

export const ListItem = ({ word, definition, etymology, partOfSpeech, dialect }: IListItemProps) => {
  let etymologyHandler;

  if (Number(definition)) {
    etymologyHandler = null;
  } else if (String(definition)) {
    etymologyHandler = etymology ? <div>Etymology: {etymology}</div> : <div>Etymology: n/a</div>;
  }

  return (
    <li>
      <div>Kwéyòl: {word} <span>{partOfSpeech && partOfSpeech}</span></div>
      <div>English: {definition}</div>
      {(dialect && dialect.length > 0) ? <div>Dialect: {dialect}</div> : ''}
      {etymologyHandler}
    </li>
  );
};
