import React from 'react';
import { Typography } from '../../../UI/Typography/Typography';
import { IPronunciationListProps } from './PronounciationList.d';

export default function PronunciationList({
  dataArr,
  listClasses,
  listItemClasses
}: IPronunciationListProps) {
  return (
    <ul className={listClasses}>
      {dataArr.map((item: { letter: any; pronounciation: any; sound: any; }, index: React.Key | null | undefined) => {
        const {
          letter,
          pronounciation,
          sound
        } = item;

        return (
          <li key={index} className={listItemClasses}>
            <Typography variant='span'>{letter}</Typography>
            <Typography variant='span'>{pronounciation}</Typography>
            <Typography variant='span'>{sound}</Typography>
          </li>
        );
      })}
    </ul>
  );
}
