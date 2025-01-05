import React from 'react';
import { SortedDictionary } from '../../../Data/data';
import { AppContentData } from '../../../Data/AppContent';
import { BlockElement } from '../../UI/BlockLevel/BlockElement';
import { Typography } from '../../UI/Typography/Typography';
import WordAttributes from '../WordAttributes/WordAttributes';
import Button from '../../UI/Form/Button/Button';
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
  modalSynonym,
  modalAntonym,
  modalCrossRef,
  clickHandler
}: IModalProps) {
  const selectedWord = SortedDictionary.find(word => word.word === modalTitle);

  return (
    <BlockElement variant='article' className={modalContainerClasses}>
      <BlockElement className={modalContentClasses}>
        <Typography variant='h2' className={modalH2Classes}>{modalTitle}</Typography>
        <BlockElement className='mb-4'>
          <BlockElement variant='div' className='mb-4'>
            <Typography variant='p'>{modalDefinition}</Typography>

            {modalSentenceKw && (
              <Typography variant='p'>
                <Typography variant='strong'>{modalSentenceKw}</Typography>
              </Typography>
            )}

            {modalSentenceEn && (
              <Typography variant='p'>{modalSentenceEn}</Typography>
            )}
          </BlockElement>

          <BlockElement className='mb-4 flex flex-row'>
            {modalSynonym && (
              <Typography variant='span' className='mr-1'>{`(syn: ${modalSynonym})`}</Typography>
            )}

            {modalAntonym && (
              <Typography variant='span' className='mr-1'>{`(opp: ${modalAntonym})`}</Typography>
            )}

            {modalCrossRef && (
              <Typography variant='span'>{`(xref: ${modalCrossRef})`}</Typography>
            )}
          </BlockElement>

          <WordAttributes
            wordEtymology={selectedWord?.etymology ?? null}
            wordPartOfSpeech={selectedWord?.partOfSpeech ?? null}
            wordDialect={selectedWord?.dialect ?? null}
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
