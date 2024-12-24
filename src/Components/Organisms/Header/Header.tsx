import React, { useEffect, useState } from 'react';
import { AppContentData } from '../../../Data/AppContent';
import { Typography } from '../../Typography/Typography';
import { dataDays } from '../../../Data/Calendar/Days';
import { dataMonths } from '../../../Data/Calendar/Months';
import { BlockElement } from '../../UI/BlockLevel/BlockElement';
import { IHeaderProps } from './Header.d';

const { mainHeading, date } = AppContentData.globalPageContent;

const kweyolDays = {
  'Sunday': dataDays[0].word,
  'Monday': dataDays[1].word,
  'Tuesday': dataDays[2].word,
  'Wednesday': dataDays[3].word,
  'Thursday': dataDays[4].word,
  'Friday': dataDays[5].word,
  'Saturday': dataDays[6].word
};

const kweyolMonths = {
  'January': dataMonths[0].word,
  'February': dataMonths[1].word,
  'March': dataMonths[2].word,
  'April': dataMonths[3].word,
  'May': dataMonths[4].word,
  'June': dataMonths[5].word,
  'July': dataMonths[6].word,
  'August': dataMonths[7].word,
  'September': dataMonths[8].word,
  'October': dataMonths[9].word,
  'November': dataMonths[10].word,
  'December': dataMonths[11].word
};

export default function Header({ headerContainerClass }: IHeaderProps) {
  const [currentDay, setCurrentDay] = useState('');
  const [currentMonth, setCurrentMonth] = useState('');
  const [currentYear, setCurrentYear] = useState('');
  const [currentDayOfMonth, setCurrentDayOfMonth] = useState('');

  useEffect(() => {
    const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
    const month = date.toLocaleDateString('en-US', { month: 'long' });
    const dayOfMonth = date.getDate();
    const year = date.getFullYear();

    setCurrentDay(kweyolDays[dayName as keyof typeof kweyolDays]);
    setCurrentMonth(kweyolMonths[month as keyof typeof kweyolMonths]);
    setCurrentYear(`${year}`);
    setCurrentDayOfMonth(`${dayOfMonth}`);
  }, []);

  const headerDate = `${currentDay} ${currentDayOfMonth === '1' ?
    'pwèmyé' :
    currentDayOfMonth} ${currentMonth}, ${currentYear}`;

  return (
    <BlockElement variant='header' className={headerContainerClass}>
      <Typography
        variant="h1"
        className={'text-2xl sm:text-2xl md:text-3xl lg:text-4xl mr-2'}
      >{mainHeading}</Typography>

      <Typography variant='span' className='ml-2 text-xs md:text-sm lg:text-lg'>{headerDate}</Typography>
    </BlockElement>
  );
}
