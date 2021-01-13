import styled from '@emotion/styled'
import theme from '../theme'

const H2 = styled.h2`
  font-family: ${theme.fonts.header};
  font-size: 24px;
  font-weight: 500;
  color: ${(p) => p.color || theme.colors.black};
  opacity: ${(p) => p.opacity};
  margin: 0;
`

export default H2
