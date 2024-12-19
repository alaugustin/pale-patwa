import React from 'react';
import { BlockElement } from '../../UI/BlockLevel/BlockElement';
import { Typography } from '../../Typography/Typography';
import WordAttributes from '../WordAttributes/WordAttributes';
import { IModalProps } from './Modal.d';

export default function Modal({
  modalTitle,
  clickHandler
}: IModalProps) {

  return (
    <BlockElement variant='article' className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
      <BlockElement className='bg-white p-6 rounded-lg shadow-xl max-w-md'>
        <Typography variant='h2' className="text-xl font-bold mb-4">{modalTitle}</Typography>
        <BlockElement className='mb-4'>
          <Typography variant='p' className='mb-4'>
            {'N Monday Mwen hayi alé twavay lé Lendi-a'}
          </Typography>

          <WordAttributes
            wordEtymology={'[< Fr. lundi]'}
            wordPartOfSpeech={'N'}
            wordDialect={'🇱🇨'}
            borderClasses={'borderClasses'}
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
