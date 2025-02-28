import React, { useState } from 'react';
import { AppContentData } from '../../../../Data/AppContent';
import Modal from '../../../Organisms/Modal/Modal';
import { Typography } from '../../Typography/Typography';
import Button from '../../Form/Button/Button';
import { IListItemProps } from './ListItem.d';

const { listButtonClass } = AppContentData.uiClasses;

export const ListItem = ({
  word,
  definition,
  egSentenceKw,
  egSentenceEn,
  hasLink,
  listItemClass,
  variant,
  subscript
}: IListItemProps) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleClick = () => {
    setIsPopupOpen(true);
  };

  const wordDefinitionAriaLabel = `Word: ${word} | ${definition}`;
  const wordSubscriptTreatment = (<>
    {word}{subscript && <sub>{subscript}</sub>}
  </>);

  return (
    <>
      <li className={listItemClass}>
        {hasLink ? (
          <Button
            buttonClass={listButtonClass}
            buttonLabel={wordSubscriptTreatment}
            ariaLabel={wordDefinitionAriaLabel}
            onClickFunc={handleClick}
          />
        ) : (
          <Typography variant='span' ariaLabel={wordDefinitionAriaLabel}>{word}</Typography>
        )}

        {isPopupOpen && (
          <Modal
            modalTitle={word}
            modalDefinition={definition}
            modalSentenceKw={egSentenceKw}
            modalSentenceEn={egSentenceEn}
            modalVariant={variant}
            clickHandler={() => setIsPopupOpen(false)}
          />
        )}
      </li>
    </>
  );
};
