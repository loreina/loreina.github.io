import Link from 'next/link'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'

import { A } from '../styles/shared'
import theme from '../styles/theme'

const Control = styled.div`
  display: inline-block;

  border-radius: 6px;
  background-color: ${theme.colors.purple20};
`

const Tab = styled.div`
  position: relative;
  display: inline-block;
  padding: 0.2rem 2rem;
  border-radius: 6px;
  transition: left, right, ease 0.5s;
`

const LeftA = styled(A)`
  ${(p) =>
    p.active &&
    `
    ${Tab} {
      background-color: ${theme.colors.purple};
      transition: background-color 0.5s ease;
    }

    // &:hover ${Tab} {
    //   left: 10px;
    // }
  `}
`

const RightA = styled(A)`
  ${(p) =>
    p.active &&
    `
    ${Tab} {
      background-color: ${theme.colors.purple};
      transition: background-color 0.5s ease;
    }

    // &:hover ${Tab} {
    //   right: 10px;
    // }
  `}
`

function Menu() {
  const router = useRouter()

  return (
    <Control>
      <Link href="/">
        <LeftA
          active={router.pathname == '/' ? true : false}
          color={
            router.pathname == '/' ? theme.colors.white : theme.colors.gray800
          }
        >
          <Tab>Work</Tab>
        </LeftA>
      </Link>
      <Link href="/about">
        <RightA
          active={router.pathname == '/about' ? true : false}
          color={
            router.pathname == '/about'
              ? theme.colors.white
              : theme.colors.gray800
          }
        >
          <Tab>About</Tab>
        </RightA>
      </Link>
    </Control>
  )
}

export default Menu
