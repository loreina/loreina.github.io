import styled from '@emotion/styled'
import theme from '../theme'

const H3 = styled.h3`
  font-family: ${theme.fonts.header};
  font-weight: 400;
  color: black;
  opacity: ${(p) => p.opacity};
  margin: 0;
`

export default H3
