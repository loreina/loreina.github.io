import * as React from 'react'

import { Chip, Layout, Menu } from '../components'
import { A, H1, H2, H3, Text } from '../styles/shared'
import { Box, Flex } from 'reflexbox'

import theme from '../styles/theme'

function About() {
  return (
    <Layout>
      {/* Header */}
      <Flex width={1} flexDirection="row" mt={32} mb={100}>
        <Box width="50%" textAlign="left">
          <H2>Loreina Chew</H2>
        </Box>
        <Box width="50%" textAlign="right">
          <Chip bg={theme.colors.red[1]} color={theme.colors.red[0]}>
            ⚠️ Website under construction
          </Chip>
        </Box>
      </Flex>
      {/* Nav */}
      <Flex mb={60}>
        <Menu />
      </Flex>
      {/* Profile */}
      <Flex width={1} mb={60}>
        <img src="/profile.png" objectFit="contain" width="100%" />
      </Flex>
      {/* About Me */}
      <Flex flexDirection="row" flexWrap="wrap" mb={60}>
        <Box width={1 / 3} mb={12}>
          <Text bold color={theme.colors.purple}>
            ABOUT ME
          </Text>
        </Box>
        <Box width={[1, 1 / 2]}>
          <Text color={theme.colors.gray500}>
            Hey, I’m Loreina! 👋
            <br />
            <br />
            I’m a designer from Toronto who’s gotten to wear many hats in my
            short time in the industry as a product manager, web developer, and
            undergraduate researcher. <br />
            <br />
            I’m pursuing a B.A. in international development and computer
            science at McGill University, and will be joining PwC as a tech
            consultant in 2021.
          </Text>
        </Box>
      </Flex>
    </Layout>
  )
}

export default About
