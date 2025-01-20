import React from 'react';
import { AppContentData } from '../../../Data/AppContent';
import { BlockElement } from '../../UI/BlockLevel/BlockElement';
import { Typography } from '../../UI/Typography/Typography';
import Link from '../../UI/Link/Link';
import { IWordAttributesProps } from './WordAttributes.d';

const { linkClasses } = AppContentData.uiHelperClasses;
const { wordAttributeBorder } = AppContentData.uiClasses;
const { normalizeText } = AppContentData.helperFunc;

export default function WordAttributes({
  wordEtymology,
  wordPartOfSpeech,
  wordDialect,
  containerClasses
}: IWordAttributesProps) {

  const dictionaryLink = 'https://www.collinsdictionary.com/dictionary';
  const parseEtymologyLink = (): string => {
    if (!wordEtymology) return '';

    const etymologyMap: { [key: string]: string } = {
      'Fr.': `${dictionaryLink}/french-english/${filteredWord}`,
      'Eng.': `${dictionaryLink}/english-french/${filteredWord}`
    };

    const matchedLanguage = Object.keys(etymologyMap).find(lang =>
      wordEtymology.includes(lang)
    );

    return matchedLanguage ? etymologyMap[matchedLanguage] : '';
  };

  const extractWord = (text: string): string => {
    const normalized = normalizeText(text);

    const pattern = /(?<=\. )[\w-]+(?=\])/;
    const match = normalized.match(pattern);

    if (!match) return text;

    return text.slice(
      text.indexOf('. ') + 2,
      text.indexOf(']')
    );
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
            linkHref={parseEtymologyLink() || ''}
            linkTarget='_blank'
            linkRel='noreferrer'
            linkClasses={`${linkClasses} underline`}
          >{wordEtymology}</Link>
        </Typography> : ''
      }
    </BlockElement>
  );
}
