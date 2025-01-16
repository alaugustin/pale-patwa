import React from 'react';
import { SortedDictionary } from '../../../Data/data';
import { AppContentData } from '../../../Data/AppContent';
import { BlockElement } from '../../UI/BlockLevel/BlockElement';
import { Typography } from '../../UI/Typography/Typography';
import WordAttributes from '../WordAttributes/WordAttributes';
import Button from '../../UI/Form/Button/Button';
import WordRelations from '../WordRelations/WordRelations';
import { IModalProps } from './Modal.d';

const {
  primaryButton,
  modalContainerClasses,
  modalContentClasses,
  modalH2Classes
} = AppContentData.uiClasses;
const { modalClose } = AppContentData.libraryContent;

export default function Modal({
  modalTitle,
  modalDefinition,
  modalSentenceKw,
  modalSentenceEn,
  modalVariant,
  clickHandler
}: IModalProps) {
  const selectedWord = SortedDictionary.find(word => word.word === modalTitle);
  const { variant, synonym, antonym, etymology, partOfSpeech, dialect } = selectedWord ?? {};

  return (
    <BlockElement variant='article' className={modalContainerClasses}>
      <BlockElement className={modalContentClasses}>
        <Typography variant='h2' className={modalH2Classes}>{modalTitle}</Typography>
        <BlockElement className='mb-4'>
          <BlockElement variant='div' className='mb-4'>
            <Typography variant='p' className='mb-2'>
              {Array.isArray(modalDefinition) ? modalDefinition.map((def: string, index: number) => (
                <Typography variant='span' className='mr-1 last:mr-0' key={index}>{def}{index !== modalDefinition.length - 1 ? ',' : ''}</Typography>
              )) : modalDefinition}
            </Typography>

            {modalSentenceKw && (
              <Typography variant='p' className='mb-1'>
                <Typography variant='strong'>{modalSentenceKw}</Typography>
              </Typography>
            )}

            {modalSentenceEn && (
              <Typography variant='p'>{modalSentenceEn}</Typography>
            )}
          </BlockElement>

          <WordRelations
            varData={variant}
            synData={synonym}
            antData={antonym}
          />

          <WordAttributes
            wordEtymology={etymology || null}
            wordPartOfSpeech={partOfSpeech || null}
            wordDialect={dialect || null}
            containerClasses='text-sm mb-8'
          />
        </BlockElement>

        <Button
          buttonClass={primaryButton}
          buttonLabel={modalClose}
          onClickFunc={clickHandler}
        />
      </BlockElement>
    </BlockElement>
  );
}
