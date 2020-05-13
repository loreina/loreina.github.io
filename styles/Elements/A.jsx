import styled from '@emotion/styled'
import theme from '../theme'

const A = styled.a`
  text-decoration: none;
  color: ${theme.colors.gray800};
  display: inline-block;
  position: relative;
  z-index: 1;

  &:hover {
    text-decoration: none;
  }

  &:after {
    content: '';
    text-decoration: none;
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: ${(props) =>
      props.color ? theme.colors[props.color][1] : theme.colors.blue[3]};
    bottom: 2px;
    left: 0;
    right: 0;
    z-index: -1;

    border-radius: 1px;
  }

  &:hover:after {
    text-decoration: none;
    height: 2px;
    background-color: ${(props) =>
      props.color ? theme.colors[props.color][0] : theme.colors.blue[0]};
    bottom: -1px;
    border-radius: 1px;
    transition: all 0.2s ease-in-out;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    -webkit-transition: all 0.2s ease-in-out;
  }
`

export default A
