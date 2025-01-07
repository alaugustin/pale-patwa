import React from 'react';
import { AppContentData } from '../../../Data/AppContent';
import { BlockElement } from '../../UI/BlockLevel/BlockElement';
import { ITwoColProps } from './TwoCol.d';

const { twoColContainerClasses, twoColColumnClasses } = AppContentData.uiClasses;

export default function TwoCol({
  twoColData,
}: ITwoColProps) {

  return (
    <BlockElement className={twoColContainerClasses}>
      {Array.isArray(twoColData) && twoColData.map((colData, index) => (
        <BlockElement
          key={index}
          className={twoColColumnClasses}
        >
          {colData}
        </BlockElement>
      ))}
    </BlockElement>
  );
}
