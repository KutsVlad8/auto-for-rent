import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavBar = styled.aside`
  position: fixed;
  right: 15px;
  top: 180px;
  width: 80px;
  height: 250px;

  display: flex;
  justify-content: center;

  border-radius: 10px;
  background-color: #939393;
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const NavigationItem = styled(NavLink)`
  position: relative;

  display: flex;
  justify-content: center;
  margin: 0px;

  padding: 5px;
  border-radius: 2px;

  fill: #cccccc;

  &.active {
    fill: #3470ff;
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: -10px;
    width: 80px;
    height: 3px;
    background: linear-gradient(
      270deg,
      rgba(255, 255, 255, 0) 0%,
      #fff 55.73%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`;

export const Svg = styled.svg`
  width: 36px;
  height: 36px;

  &:hover {
    fill: #3470ff;
  }

  &:focus {
    fill: #3470ff;
  }
`;
