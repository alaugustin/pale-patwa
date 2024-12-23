import React from 'react';
import { SortedDictionary } from '../../../Data/data';
import { BlockElement } from '../../UI/BlockLevel/BlockElement';
import { Typography } from '../../Typography/Typography';
import WordAttributes from '../WordAttributes/WordAttributes';
import { IModalProps } from './Modal.d';

export default function Modal({
  modalTitle,
  clickHandler
}: IModalProps) {
  const selectedWord = SortedDictionary.find(word => word.word === modalTitle);

  return (
    <BlockElement variant='article' className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
      <BlockElement className='bg-white p-6 rounded-lg shadow-xl max-w-md'>
        <Typography variant='h2' className="text-2xl font-bold mb-2 font-serif">{modalTitle}</Typography>
        <BlockElement className='mb-4'>
          <BlockElement variant='div' className='mb-4'>
            <Typography variant='p'>{selectedWord?.definition}</Typography>

            {selectedWord?.egSentenceKw && (
              <Typography variant='p'>
                <Typography variant='strong'>{selectedWord?.egSentenceKw}</Typography>
              </Typography>
            )}

            {selectedWord?.egSentenceEn && (
              <Typography variant='p'>{selectedWord?.egSentenceEn}</Typography>
            )}
          </BlockElement>

          <WordAttributes
            wordEtymology={selectedWord?.etymology ?? null}
            wordPartOfSpeech={selectedWord?.partOfSpeech ?? null}
            wordDialect={selectedWord?.dialect ?? null}
            containerClasses='text-sm mb-8'
          />
        </BlockElement>

        <button
          onClick={clickHandler}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Close
        </button>
      </BlockElement>
    </BlockElement>
  );
}
