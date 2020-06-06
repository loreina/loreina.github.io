import * as React from 'react'

import { Grid, Layout } from '../components/components'
import { A, H2, H3, Text } from '../styles/shared'
import { Box } from 'reflexbox'

function Index() {
  return (
    <Layout>
      <Grid gap={32}>
        <Grid gap={16}>
          <Box mx={32} />
          <H2>Loreina Chew</H2>
          <Text>
            👋 I'm a web developer, product designer, and computer science
            student at McGill University.
          </Text>
          <Text>
            This summer, I'm managing product at{' '}
            <A
              href="https://letsweav.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Weav
            </A>{' '}
            and researching at McGill's{' '}
            <A
              href="http://socialstudies.cs.mcgill.ca/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Social Studies of Computer Science Lab
            </A>
            .
          </Text>
        </Grid>
        <Grid gap={24}>
          <H3>Projects</H3>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Index
