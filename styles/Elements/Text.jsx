import styled from '@emotion/styled'
import theme from '../theme'

const Text = styled.p`
  color: ${(p) => p.color || theme.colors.gray800};
  margin: 0;

  ${(p) =>
    p.bold &&
    `
    font-weight: bold;
  `}
`

export default Text
