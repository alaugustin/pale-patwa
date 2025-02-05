import React, { useEffect, useState } from 'react';
import { AppContentData } from '../../../Data/AppContent';
import { Typography } from '../../UI/Typography/Typography';
import { dataDays } from '../../../Data/Calendar/Days';
import { dataMonths } from '../../../Data/Calendar/Months';
import { BlockElement } from '../../UI/BlockLevel/BlockElement';
import { IHeaderProps } from './Header.d';

const {
  date,
  daysOfTheWeekArr,
  monthsOfTheYearArr
} = AppContentData.globalPageContent;

const {
  headerH1Classes,
  headerDateClasses
} = AppContentData.uiClasses;

const kweyolDays = Object.fromEntries(
  daysOfTheWeekArr.map((day, index) => [day, dataDays[index].word])
);

const kweyolMonths = Object.fromEntries(
  monthsOfTheYearArr.map((month, index) => [month, dataMonths[index].word])
);

export default function Header({
  headerContainerClass,
  mainHeading
}: IHeaderProps) {
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

  const headerContent = [
    { variant: 'h1', className: headerH1Classes, content: mainHeading },
    { variant: 'span', className: headerDateClasses, content: headerDate }
  ];

  return (
    <BlockElement variant='header' className={headerContainerClass}>
      {headerContent.map(({ variant, className, content }) => (
        <Typography
          key={content}
          variant={variant as 'h1' | 'span' }
          className={className}
        >{content}</Typography>
      ))}
    </BlockElement>
  );
}
