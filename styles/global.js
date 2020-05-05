import { css } from '@emotion/core'

const globalStyles = css`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
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
    color: #202225;
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: #298cf1;
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
