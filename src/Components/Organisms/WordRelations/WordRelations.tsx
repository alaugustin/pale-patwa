import React from 'react';
import { AppContentData } from '../../../Data/AppContent';
import { BlockElement } from '../../UI/BlockLevel/BlockElement';
import { Typography } from '../../UI/Typography/Typography';
import { IWordRelationsProps, IWordGroupProps } from './WordRelations.d';

const {
  wordRelationsContainerClasses,
  wordRelationsItemClasses
} = AppContentData.uiClasses;

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

  return hasContent ? (
    <BlockElement className={wordRelationsContainerClasses}>
      <Typography variant="span" className="mr-1 last:mr-0">
        <WordGroup label="var" data={varData} />
      </Typography>

      <Typography variant="span" className="mr-1 last:mr-0">
        <WordGroup label="syn" data={synData} />
      </Typography>

      <Typography variant="span" className="mr-1 last:mr-0">
        <WordGroup label="ant" data={antData} />
      </Typography>
    </BlockElement>
  ) : null;
}
