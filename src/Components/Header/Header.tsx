import React from 'react';
import { AppContentData } from '../../Data/AppContent';
import { Typography } from '../Typography/Typography';

const { headingH1 } = AppContentData.globalPageContent;

export default function Header(props: any) {
  return (
    <header className="bg-red-400 pt-6 p-2 basis-14 flex items-center">
      <Typography
        variant="h1"
        text={headingH1}
        className={'text-5xl mr-2'}
      />
      <span className='ml-2'>DAY_OF_WEEK, MONTH DAY_OF_MONTH, YEAR</span>
    </header>
  );
}
