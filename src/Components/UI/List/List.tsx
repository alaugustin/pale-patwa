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
      {data?.map((element, index) => {
        const {
          word,
          definition,
          egSentenceEn,
          egSentenceKw,
          synonym,
          antonym,
          crossReference,
          variant
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
            variant={variant}
            hasLink={hasLink}
          />
        );
      })}
    </ul>
  );
}
