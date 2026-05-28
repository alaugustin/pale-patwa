import React from 'react';
import { AppContentData } from '../../../Data/AppContent';
import { SortedDictionary } from '../../../Data/data';
import { BlockElement } from '../../UI/BlockLevel/BlockElement';
import { Typography } from '../../UI/Typography/Typography';
import { cn } from '../../../Data/AppContent';
import { IWordRelationsProps, IWordGroupProps } from './WordRelations.types';

const { borderTop } = AppContentData.uiHelperClasses;

const {
  wordRelationsContainerClasses,
  wordRelationsItemClasses
} = AppContentData.uiClasses;

// Helper function to check if a word exists in the dictionary
const isWordInDictionary = (word: string): boolean => {
  return SortedDictionary.some(entry =>
    entry.word.toLowerCase() === word.toLowerCase()
  );
};

const WordGroup = ({
  label,
  data
}: IWordGroupProps) => {
  return data?.[0] && Array.isArray(data) ? (
    <>
      {`(${label}: `}
      {data.filter((item): item is string => item !== null).map((item, index, arr) => {
        const isInDictionary = isWordInDictionary(item);
        return (
          <Typography
            key={item}
            variant="span"
            className={cn(
              wordRelationsItemClasses,
              isInDictionary ? 'underline' : ''
            )}
          >
            {item}
            {index !== arr.length - 1 ? ',' : ''}
          </Typography>
        );
      })}
      {')'}
    </>
  ) : null;
};

export default function WordRelations({
  varData,
  synData,
  antData
}: IWordRelationsProps) {
  const hasContent = varData?.[0] || synData?.[0] || antData?.[0];

  const wordTypes = [
    { type: 'var', data: varData },
    { type: 'syn', data: synData },
    { type: 'ant', data: antData }
  ];

  return hasContent ? (
    <BlockElement className={cn(wordRelationsContainerClasses, hasContent ? `${borderTop} pt-4` : '')}>
      {wordTypes.map(({ type, data }) =>
        data?.[0] && Array.isArray(data) && (
          <Typography key={type} variant="span" className="mr-1 last:mr-0">
            <WordGroup label={type} data={data} />
          </Typography>
        )
      )}
    </BlockElement>
  ) : null;
}
