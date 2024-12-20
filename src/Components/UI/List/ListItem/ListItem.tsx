import React, { useState } from 'react';
import Modal from '../../../Organisms/Modal/Modal';
import { IListItemProps } from './ListItem.d';
import { Typography } from '../../../Typography/Typography';

export const ListItem = ({
  word,
  hasLink,
  listItemClass
}: IListItemProps) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsPopupOpen(true);
  };

  return (
    <>
      <li className={listItemClass}>
        {hasLink ? (
          <a href={`/${word}`} onClick={handleClick}>{word}</a>
        ) : (
          <Typography variant='span'>{word}</Typography>
        )}

        {isPopupOpen && (
          <Modal modalTitle={word} clickHandler={() => setIsPopupOpen(false)} />
        )}
      </li>
    </>
  );
};
