import styled from '@emotion/styled'
import { Text } from '../styles/shared'
import theme from '../styles/theme'

const Box = styled.div`
  display: inline-block;
  padding: 0.3rem 1rem;
  border-radius: 6px;

  background-color: ${(p) => p.bg || theme.colors.purple};
`

function Chip(props) {
  return (
    <Box bg={props.bg}>
      <Text color={props.color}>{props.children}</Text>
    </Box>
  )
}

export default Chip
