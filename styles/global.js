import { css } from '@emotion/react'
import theme from './theme'

const globalStyles = css`
  /* @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap'); */
  /* @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap'); */

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: ${theme.fonts.body};
    font-size: 16px;
    line-height: 1.6;
    color: ${theme.colors.gray800};
    background-color: ${theme.colors.white};
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${theme.colors.gray800};
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
