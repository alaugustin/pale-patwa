import React, { useState } from 'react';
import Modal from '../../../Organisms/Modal/Modal';
import { Typography } from '../../../Typography/Typography';
import Button from '../../Form/Button/Button';
import { IListItemProps } from './ListItem.d';

export const ListItem = ({
  word,
  hasLink,
  listItemClass
}: IListItemProps) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleClick = () => {
    setIsPopupOpen(true);
  };

  return (
    <>
      <li className={listItemClass}>
        {hasLink ? (
          <Button
            buttonClass={'p-4 bg-gray-100 hover:bg-gray-200'}
            buttonLabel={word || ''}
            onClickFunc={handleClick}
          />
        ) : (
          <Typography variant='span'>{word}</Typography>
        )}

        {isPopupOpen && (
          <>
            <Modal modalTitle={word} clickHandler={() => setIsPopupOpen(false)} />
          </>
        )}
      </li>
    </>
  );
};
