import React from 'react';
import { ListItem } from '../../Components/List/ListItem/ListItem';
import { IListDataProps } from './List.d';

export default function List({ data }: { data: IListDataProps[] }) {

  return (
    <ul className='flex max-w-4xl flex-wrap justify-center items-center'>
      {data?.map((element, index) => (
        <ListItem
          key={index}
          word={element.word}
          hasLink={true}
          listItemClass='mr-2 mb-2'
        />
      ))}
    </ul>
  );
}
