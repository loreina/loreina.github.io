import * as React from 'react'

import Link from 'next/link'
import { Box, Flex } from 'reflexbox'

import { Header, Layout, Menu } from '../components'
import { A, H1, H2, H3 } from '../styles/shared'
import theme from '../styles/theme'

function Index() {
  return (
    <Layout>
      <Header />
      {/* Nav */}
      {/* <Flex>
        <Menu />
      </Flex> */}
    </Layout>
  )
}

export default Index
