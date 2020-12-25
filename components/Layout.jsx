import styled from '@emotion/styled'

const Layout = styled.div`
  display: flex;
  display: -webkit-flex;
  display: -ms-flexbox;
  flex-flow: column wrap;
  align-content: flex-start;
  justify-content: space-around;
  box-sizing: border-box;
  max-width: 90%;
  padding: 0 5%;
  margin: 4rem auto 6rem;

  @media only screen and (min-width: 1200px) {
    max-width: 80%;
    padding: 0 10%;
  }
`

export default Layout
