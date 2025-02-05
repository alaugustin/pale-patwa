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

        const typographyItems = [
          { content: letter },
          { content: pronounciation },
          { content: phoneme }
        ];

        return (
          <li key={index}>
            {link ? (
              <Link linkHref={link} linkTarget='_blank' linkClasses={listItemClasses} >
                {typographyItems.map(({ content }) => (
                  <Typography key={content} variant='span'>{content}</Typography>
                ))}
              </Link>
            ) : (
              <BlockElement variant='div' className={listItemClasses}>
                {typographyItems.map(({ content }) => (
                  <Typography key={content} variant='span'>{content}</Typography>
                ))}
              </BlockElement>
            )}
          </li>
        );
      })}
    </ul>
  );
}
