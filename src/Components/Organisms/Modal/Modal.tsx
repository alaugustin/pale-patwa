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
  modalVariant,
  clickHandler
}: IModalProps) {
  const selectedWord = SortedDictionary.find(word => word.word === modalTitle);

  const renderWordList = (words: string[] | string, prefix: string) => {
    return (
      <Typography variant='span'>{`(${prefix}:`}
        {Array.isArray(words) ? words.map((def: string, index: number) => (
          <Typography variant='span' className='first:mx-1 mr-1 last:mr-0' key={index}>
            {def}{index !== words.length - 1 ? ',' : ''}
          </Typography>
        )) : words}
        {')'}</Typography>
    );
  };

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

          <BlockElement className='mb-4 flex flex-row text-sm'>
            {modalVariant && (
              <Typography variant='span' className='mr-1'>{`(var: ${modalVariant})`}</Typography>
            )}

            {modalSynonym && renderWordList(modalSynonym, 'syn')}
            {modalAntonym && renderWordList(modalAntonym, 'opp')}

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
