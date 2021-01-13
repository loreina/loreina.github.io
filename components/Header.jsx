import { Chip, Socials } from '../components'
import { H2, H3 } from '../styles/shared'
import { Box, Flex } from 'reflexbox'

import theme from '../styles/theme'

function Header() {
  return (
    <Flex width={1} flexDirection="row" mt={32} mb={100}>
      <Box width="50%" textAlign="left" margin="auto">
        <H2>Loreina Chew</H2>
        {/* <H3 opacity="40%">Product Designer at Stack</H3> */}
      </Box>
      <Box width="50%" textAlign="right">
        {/* <Chip bg={theme.colors.red[1]} color={theme.colors.red[0]}>
          ⚠️ Website under construction
        </Chip> */}
        <Socials />
      </Box>
    </Flex>
  )
}

export default Header
