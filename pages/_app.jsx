import * as React from 'react'
import { Global } from '@emotion/core'
import globalStyles from '../styles/global'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </>
  )
}
