import React from 'react';
import { Typography } from '../../../UI/Typography/Typography';
import Link from '../../../UI/Link/Link';
import { BlockElement } from '../../../UI/BlockLevel/BlockElement';
import { IPronunciationListProps, IPronunciationListDataItemProps } from './PronounciationList.d';

export default function PronunciationList({
  dataArr,
  listClasses,
  listItemClasses
}: IPronunciationListProps) {
  return (
    <ul className={listClasses}>
      {dataArr.map((item: IPronunciationListDataItemProps, index: number) => {
        const {
          letter,
          pronounciation,
          phoneme,
          link
        } = item;

        return (
          <li key={index}>
            {link ? (
              <Link linkHref={link} linkTarget='_blank' linkClasses={listItemClasses} >
                <Typography variant='span'>{letter}</Typography>
                <Typography variant='span'>{pronounciation}</Typography>
                <Typography variant='span'>{phoneme}</Typography>
              </Link>
            ) : (
              <BlockElement variant='div' className={listItemClasses}>
                <Typography variant='span'>{letter}</Typography>
                <Typography variant='span'>{pronounciation}</Typography>
                <Typography variant='span'>{phoneme}</Typography>
              </BlockElement>
            )}
          </li>
        );
      })}
    </ul>
  );
}
