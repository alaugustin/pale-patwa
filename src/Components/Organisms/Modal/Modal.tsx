import React from 'react';
import { SortedDictionary } from '../../../Data/data';
import { AppContentData } from '../../../Data/AppContent';
import { BlockElement } from '../../UI/BlockLevel/BlockElement';
import { Typography } from '../../Typography/Typography';
import WordAttributes from '../WordAttributes/WordAttributes';
import Button from '../../UI/Form/Button/Button';
import { IModalProps } from './Modal.d';

const { flexItemsCenter, primaryButton } = AppContentData.uiClasses;
const { modalClose } = AppContentData.libraryContent;

export default function Modal({
  modalTitle,
  modalDefinition,
  modalSentenceKw,
  modalSentenceEn,
  clickHandler
}: IModalProps) {
  const selectedWord = SortedDictionary.find(word => word.word === modalTitle);

  return (
    <BlockElement variant='article' className={`${flexItemsCenter} fixed inset-0 bg-black bg-opacity-50 z-50`}>
      <BlockElement className='bg-white p-6 rounded-lg shadow-xl max-w-md mx-4'>
        <Typography variant='h2' className="text-2xl font-bold mb-2 font-serif">{modalTitle}</Typography>
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
