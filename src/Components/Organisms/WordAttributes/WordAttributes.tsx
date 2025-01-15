import React from 'react';
import { AppContentData } from '../../../Data/AppContent';
import { BlockElement } from '../../UI/BlockLevel/BlockElement';
import { Typography } from '../../UI/Typography/Typography';
import Link from '../../UI/Link/Link';
import { IWordAttributesProps } from './WordAttributes.d';

const { linkClasses } = AppContentData.uiHelperClasses;
const { wordAttributeBorder } = AppContentData.uiClasses;

export default function WordAttributes({
  wordEtymology,
  wordPartOfSpeech,
  wordDialect,
  containerClasses
}: IWordAttributesProps) {

  const parseEtymologyLink = (): string => {
    if (wordEtymology?.search('Fr.') !== undefined && wordEtymology.search('Fr.') > 0) {
      return `https://www.collinsdictionary.com/dictionary/french-english/${filteredWord}`;
    }
    if (wordEtymology?.search('Eng.') !== undefined && wordEtymology.search('En.') > 0) {
      return `https://www.collinsdictionary.com/dictionary/english-french/${filteredWord}`;
    }
    return ''; // Add a default return value
  };

  const extractWord = (text: string) => {
    const match = text.normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .match(/(?<=\. )\w+(?=\])/);

    if (!match) return text;

    const startIndex = text.indexOf('. ') + 2;
    const endIndex = text.indexOf(']');
    return text.slice(startIndex, endIndex);
  };

  const filteredWord = wordEtymology ? extractWord(wordEtymology) : '';

  return (
    <BlockElement variant='div' className={containerClasses}>
      <Typography
        variant="span"
        className={`${(wordPartOfSpeech && wordAttributeBorder) || (wordEtymology && wordAttributeBorder)}`}
      >{wordDialect}</Typography>

      {wordPartOfSpeech && (
        <Typography
          variant="span"
          className={`font-mono text-xs ${wordEtymology && wordAttributeBorder}`}
        >{wordPartOfSpeech ?? ''}</Typography>
      )}

      {wordEtymology ?
        <Typography
          variant="span"
        >
          <Link
            linkHref={parseEtymologyLink() || ''} // Provide a fallback empty string
            linkTarget='_blank'
            linkRel='noreferrer'
            linkClasses={`${linkClasses} underline`}
          >{wordEtymology}</Link>
        </Typography> : ''
      }
    </BlockElement>
  );
}
