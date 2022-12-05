import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import { persistor, store } from '../store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Head>
            <title>Turing Commons</title>
            <meta name="description" content="" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}
