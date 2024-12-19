import React, { useState } from 'react';
import Modal from '../../../Organisms/Wordlist/Modal/Modal';
import { IListItemProps } from './ListItem.d';

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
          <span>{word}</span>
        )}
      </li>

      {isPopupOpen && (
        <>
          <Modal modalTitle={word} clickHandler={() => setIsPopupOpen(false)} />
        </>
      )}
    </>
  );
};
