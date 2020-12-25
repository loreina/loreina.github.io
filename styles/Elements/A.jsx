import styled from '@emotion/styled'
import theme from '../theme'

const A = styled.a`
  text-decoration: none;
  color: ${(p) => p.color || theme.colors.purple};
  display: inline-block;
  position: relative;
  cursor: pointer;
  z-index: 1;

  &:hover {
    text-decoration: none;
  }
`

export default A
