import React from 'react';
import { Typography } from '../Typography/Typography';
import { AppContentData } from '../../Data/AppContent';
import { IWordOfTheDayProps } from './WordOfTheDay.d';

const { wodTitleH2 } = AppContentData.wordOfTheDayContent;

export default function WordOfTheDay(props: IWordOfTheDayProps) {
  const borderClasses = 'pr-2 mr-2 border border-black border-t-0 border-b-0 border-l-0';
  const {
    kweyoleWord,
    dialect,
    etymology,
    partOfSpeech,
    definition
  } = props;

  return (
    <section className="flex items-center justify-center flex-col mb-10">
      <Typography
        variant="h2"
        text={wodTitleH2}
        className={'text-3xl mb-4'}
      />

      <Typography
        variant="h3"
        text={kweyoleWord}
        className={'text-8xl font-serif mb-2'}
      />

      <section className="text-sm mb-8">
        <Typography
          variant="span"
          text={dialect}
          className={
            (etymology || partOfSpeech) ? `${borderClasses}` : ''
          } />

        {partOfSpeech && (
          <Typography
            variant="span"
            text={partOfSpeech ?? ''}
            className={
              (etymology || partOfSpeech) ? `${etymology ? `${borderClasses}` : ''}` : ''
            } />
        )}

        {etymology ?
          <Typography
            variant="span"
            text={etymology ?? ''}
          /> : ''
        }
      </section>

      <Typography
        variant="p"
        text={definition}
        className="text-6xl font-thin"
      />
    </section>
  );
}
