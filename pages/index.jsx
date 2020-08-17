import * as React from 'react'

import { Layout } from '../components/components'
import { A, H2, H3 } from '../styles/shared'
import { Box, Flex } from 'reflexbox'

function Index() {
  return (
    <Layout>
      <Flex flexDirection="column" my={32}>
        <Flex flexDirection="column" my={16}>
          <Box mb={2}>
            <H2>Loreina Chew</H2>
          </Box>
          <Box mt={16}>
            👋 I'm a web developer, product designer, and computer science
            student at McGill University.
          </Box>
          <Box mt={16}>
            This summer, I'm interning at{' '}
            <A
              href="https://thesweaterguys.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sweater Guys
            </A>
            , and researching at McGill's{' '}
            <A
              href="http://socialstudies.cs.mcgill.ca/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Social Studies of Computing Lab
            </A>
            .
          </Box>
          <Box mt={16}>
            I also lead product at{' '}
            <A
              href="https://letsweav.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Weav
            </A>
            , a long-distance ridesharing app for students, and organize
            McGill's largest annual hackathon,{' '}
            <A
              href="https://mchacks.ca"
              target="_blank"
              rel="noopener noreferrer"
            >
              McHacks
            </A>
            .
          </Box>
        </Flex>
        <Flex flexDirection="column" my={16}>
          <H3>Projects</H3>
        </Flex>
      </Flex>
    </Layout>
  )
}

export default Index
