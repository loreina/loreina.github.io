import { css } from '@emotion/core'
import theme from './theme'

const globalStyles = css`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: ${theme.fonts.body};
    line-height: 1.6;
    font-size: 18px;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${theme.colors.black};
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: ${theme.colors.blue};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  img {
    max-width: 100%;
    display: block;
  }
`

export default globalStyles
