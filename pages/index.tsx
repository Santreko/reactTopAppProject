/* eslint-disable @typescript-eslint/no-unused-vars */
import { GetStaticProps } from 'next';
import { Button, Htag, Input, P, Rating, Tag, Textarea } from '@/components';
import { withLayout } from '../layout/Layout';
import React, { useState } from 'react';
import axios from 'axios';
import { MenuItem } from '@/interfaces/menu.interface';
import { API } from '@/helpers/api';

function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag='h1'>Заголовок</Htag>
      <Button appearance='primary' arrow='right' >Кнопка</Button>
      <Button appearance='ghost'>Кнопка</Button>
      <P size='small'>Маленький</P>
      <P>Средний</P>
      <P size='large'>Большой</P>
      <Tag color="red">Зелёный</Tag>
      <Tag color="red">Зелёный</Tag>
      <Rating rating={rating} isEditable setRating={setRating}></Rating>
      <Input placeholder='Тест'></Input>
      <Textarea placeholder='Тест'></Textarea>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}