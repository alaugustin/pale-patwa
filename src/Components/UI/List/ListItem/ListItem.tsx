import React, { useState } from 'react';
import { AppContentData } from '../../../../Data/AppContent';
import Modal from '../../../Organisms/Modal/Modal';
import { Typography } from '../../../Typography/Typography';
import Button from '../../Form/Button/Button';
import { IListItemProps } from './ListItem.d';

const { listButtonClass } = AppContentData.uiClasses;

export const ListItem = ({
  word,
  definition,
  egSentenceKw,
  egSentenceEn,
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
            buttonClass={listButtonClass}
            buttonLabel={word || ''}
            onClickFunc={handleClick}
          />
        ) : (
          <Typography variant='span'>{word}</Typography>
        )}

        {isPopupOpen && (
          <>
            <Modal
              modalTitle={word}
              modalDefinition={definition}
              modalSentenceKw={egSentenceKw}
              modalSentenceEn={egSentenceEn}
              clickHandler={() => setIsPopupOpen(false)}
            />
          </>
        )}
      </li>
    </>
  );
};
