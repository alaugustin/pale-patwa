import React from 'react';
import { AppContentData } from '../../../Data/AppContent';
import { BlockElement } from '../../UI/BlockLevel/BlockElement';
import { Typography } from '../../UI/Typography/Typography';
import { cn } from '../../../Data/AppContent';
import { IWordRelationsProps, IWordGroupProps } from './WordRelations.d';

const {
  wordRelationsContainerClasses,
  wordRelationsItemClasses
} = AppContentData.uiClasses;
const { borderTop } = AppContentData.uiHelperClasses;

const WordGroup = ({
  label,
  data
}: IWordGroupProps) => {
  return data?.[0] && Array.isArray(data) ? (
    <>
      {`(${label}: `}
      {data.map((item, index) => (
        <Typography key={item} variant="span" className={wordRelationsItemClasses}>
          {item}
          {index !== data.length - 1 ? ',' : ''}
        </Typography>
      ))}
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
