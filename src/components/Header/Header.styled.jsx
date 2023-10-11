import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Head = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 120px;
  padding: 8px;
  width: 100vw;

  background-color: #939393;
`;

export const Navigation = styled.nav`
  display: flex;
`;

export const NavigationItem = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0px;

  padding: 5px;
  border-radius: 2px;
  text-decoration: none;
  color: #fff;
  font-family: Gayathri;
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  fill: #cccccc;

  &.active {
    fill: #3470ff;
    color: #3470ff;
  }

  &:hover {
    fill: #3470ff;
    color: #3470ff;
  }

  &:focus {
    fill: #3470ff;
    color: #3470ff;
  }
`;

export const Svg = styled.svg`
  width: 36px;
  height: 36px;
  margin-right: 8px;

  // &:hover {
  //   fill: #3470ff;
  // }

  // &:focus {
  //   fill: #3470ff;
  // }
`;

export const Logo = styled.svg`
  width: 54px;
  height: 54px;
  fill: red;

  // &:hover {
  //   fill: #3470ff;
  // }

  // &:focus {
  //   fill: #3470ff;
  // }
`;
