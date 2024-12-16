import React from 'react';
import { Typography } from '../Typography/Typography';

export default function WordOfTheDay(props: any) {
  const borderClasses = 'pr-2 mr-2 border border-black border-t-0 border-b-0 border-l-0';
  const {
    headingH2,
    kweyoleWord,
    dialect,
    etymology,
    partOfSpeech,
    definition
  } = props;

  return (
    <section className="flex items-center justify-center flex-col">

      <Typography
        variant="h2"
        text={headingH2}
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
