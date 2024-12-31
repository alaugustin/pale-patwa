import React from 'react';
import { BlockElement } from '../../UI/BlockLevel/BlockElement';
import { Input } from '../../UI/Form/Input/Input';
import Button from '../../UI/Form/Button/Button';
import { IDictionarySearchProps } from './DictionarySearch.d';

export const DictionarySearch = ({
  placeholderLabel,
  searchValue,
  onChangeFunc,
  onClickFunc
}: IDictionarySearchProps) => {

  return (
    <BlockElement variant='div' className={'flex flex-row items-center justify-center rounded border border-gray-200 mb-8'}>
      <Input
        type="text"
        placeholder={placeholderLabel}
        value={searchValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeFunc(e.target.value)}
        className="p-2 w-64 border-r border-gray-200"
      />
      {
        searchValue && (
          <Button
            buttonClass='text-gray-400'
            buttonLabel={
              <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='m-2 fill-gray-400' viewBox='0 0 16 16'>
                <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16' />
                <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708' />
              </svg>
            }
            onClickFunc={onClickFunc}
          />
        )
      }
    </BlockElement>
  );
};
