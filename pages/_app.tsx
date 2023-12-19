import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import ym from 'react-yandex-metrika';
import { YMInitializer } from 'react-yandex-metrika';

export default function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  router.events.on('routeChangeComplete', (url: string) => {
    if (typeof window !== 'undefined') {
      ym('hit', url);
    }
  });

  return <>
    <Head>
      <title>My top - наш лучший топ</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
      <link rel="preconnect" href="https://mc.yandex.ru" />
      <meta property='og:url' content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath} />
      <meta property='og:locale' content='ru_RU' />
    </Head>
    <YMInitializer
      accounts={[]}
      options={{ webvisor: true, defer: true }}
      version='2'
    />
    <Component {...pageProps} />
  </>;
}
