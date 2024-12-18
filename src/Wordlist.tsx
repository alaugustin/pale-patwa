import React from 'react';
import List from './Components/List/List';

interface ListWordData {
  word: string;
}

export default function WordList({ data }: { data: ListWordData[] }) {

  return (
    <section>
      <List data={data} />
    </section>
  );
}
