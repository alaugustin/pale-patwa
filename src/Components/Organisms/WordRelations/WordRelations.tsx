import React from 'react';
import { BlockElement } from '../../UI/BlockLevel/BlockElement';
import { Typography } from '../../UI/Typography/Typography';
import { IWordRelationsProps } from './WordRelations.d';

const WordGroup = ({ label, data }: { label: string; data: string[] }) => {
  return data?.[0] && Array.isArray(data) ? (
    <>
      {`(${label}: `}
      {data.map((item, index) => (
        <Typography key={item} variant="span" className="font-bold">
          {item}
          {index !== data.length - 1 ? ',' : ''}
        </Typography>
      ))}
      {')'}
    </>
  ) : null;
};

export default function WordRelations({
  varData = [],
  synData = [],
  antData = []
}: IWordRelationsProps) {
  const hasContent = varData?.[0] || synData?.[0] || antData?.[0];

  return hasContent ? (
    <BlockElement className="mb-4 flex flex-row text-sm flex-wrap">
      <WordGroup label="var" data={varData} />
      <WordGroup label="syn" data={synData} />
      <WordGroup label="ant" data={antData} />
    </BlockElement>
  ) : null;
}
