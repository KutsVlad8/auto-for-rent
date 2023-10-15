import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { colors } from '../../utils';

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

  fill: #cccccc;

  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    fill: ${colors.btnChangeColor};
  }

  &:hover {
    fill: ${colors.btnChangeColor};
  }

  &:focus {
    fill: ${colors.btnChangeColor};
  }
`;

export const Svg = styled.svg`
  width: 36px;
  height: 36px;
`;
