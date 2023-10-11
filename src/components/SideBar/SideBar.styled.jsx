import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Aside = styled.aside`
  position: fixed;
  top: 0;
  right: 0;

  width: 75px;
  height: 100vh;

  display: flex;
  flex-direction: column;
  background-color: grey;
`;

export const Navigation = styled.nav`
  padding-top: 30px;

  display: flex;
  flex-direction: column;
  gap: 75px;
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
  }

  &:hover {
    fill: #3470ff;
  }

  &:focus {
    fill: #3470ff;
  }
`;

export const Svg = styled.svg`
  width: 36px;
  height: 36px;
`;

export const Logo = styled.svg`
  width: 54px;
  height: 54px;
  fill: red;
`;
