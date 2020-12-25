import * as React from 'react'

import Link from 'next/link'
import { Box, Flex } from 'reflexbox'

import { Chip, Layout, Menu } from '../components'
import { A, H1, H2, H3 } from '../styles/shared'
import theme from '../styles/theme'

function Index() {
  return (
    <Layout>
      {/* Header */}
      <Flex width={1} flexDirection="row" mt={32} mb={100}>
        <Link href="/">
          <Box width="50%" textAlign="left">
            <H2>Loreina Chew</H2>
          </Box>
        </Link>
        <Box width="50%" textAlign="right">
          <Chip bg={theme.colors.red[1]} color={theme.colors.red[0]}>
            ⚠️ Website under construction
          </Chip>
        </Box>
      </Flex>
      {/* Nav */}
      <Flex>
        <Menu />
      </Flex>
    </Layout>
  )
}

export default Index
