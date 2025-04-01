import React from 'react';
import { AppContentData } from '../../../Data/AppContent';
import { BlockElement } from '../../UI/BlockLevel/BlockElement';
import { Typography } from '../../UI/Typography/Typography';
import Link from '../../UI/Link/Link';
import { cn } from '../../../Data/AppContent';
import { IWordAttributesProps } from './WordAttributes.d';

const { wordAttributesLinkClasses, borderTop } = AppContentData.uiHelperClasses;

const { wordAttributeBorder } = AppContentData.uiClasses;
const { collinsDictionaryLink } = AppContentData.libraryContent;
const { normalizeText } = AppContentData.helperFunc;

export default function WordAttributes({
  wordEtymology,
  wordPartOfSpeech,
  wordDialect,
  containerClasses
}: IWordAttributesProps) {

  const parseEtymologyLink = (): string => {
    if (!wordEtymology) return '';

    const frLink = `${collinsDictionaryLink}/french-english/${filteredWord}`;
    const enLink = `${collinsDictionaryLink}/english-french/${filteredWord}`;

    const etymologyMap: { [key: string]: string } = {
      'Fr.': frLink,
      'Eng.': enLink
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
    <BlockElement variant='div' className={cn(containerClasses, (wordDialect || wordPartOfSpeech || wordEtymology) ? `${borderTop} pt-4` : '')}>
      <Typography
        variant="span"
        className={`${(wordPartOfSpeech && wordAttributeBorder) || (wordEtymology && wordAttributeBorder)}`}
      >{wordDialect}</Typography>

      {wordPartOfSpeech && (
        <Typography
          variant="span"
          className={cn(wordEtymology && wordAttributeBorder, 'font-mono text-xs')}
        >{wordPartOfSpeech ?? ''}</Typography>
      )}

      {wordEtymology ?
        <Typography variant="span">
          <Link
            linkHref={parseEtymologyLink() || ''}
            linkTarget='_blank'
            linkRel='noreferrer'
            linkClasses={cn(wordAttributesLinkClasses, 'underline')}
          >{wordEtymology}</Link>
        </Typography> : ''
      }
    </BlockElement>
  );
}
