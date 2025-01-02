import React from 'react';
import { AppContentData } from '../../../Data/AppContent';
import { BlockElement } from '../../UI/BlockLevel/BlockElement';
import { Input } from '../../UI/Form/Input/Input';
import Button from '../../UI/Form/Button/Button';
import { IDictionarySearchProps } from './DictionarySearch.d';

const { clearInputIcon } = AppContentData.icons;
const {
  dictionarySearchClasses,
  dictionarySearchInputClasses
} = AppContentData.uiClasses;

export const DictionarySearch = ({
  placeholderLabel,
  searchValue,
  onChangeFunc,
  onClickFunc
}: IDictionarySearchProps) => {

  return (
    <BlockElement variant='div' className={dictionarySearchClasses}>
      <Input
        type="text"
        placeholder={placeholderLabel}
        value={searchValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeFunc(e.target.value)}
        className={dictionarySearchInputClasses}
      />
      {
        searchValue && (
          <Button
            buttonClass='text-gray-400'
            buttonLabel={clearInputIcon}
            onClickFunc={onClickFunc}
          />
        )
      }
    </BlockElement>
  );
};
