import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavBar = styled.aside`
  display: flex;
  justify-content: center;

  width: 130px;
  background-color: #cccccc;
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
`;

export const NavigationItem = styled(NavLink)`
  color: white;
  text-decoration: none;

  padding: 5px;
  border-radius: 2px;
  margin-left: 8px;
  &.active {
    color: #0b44cd;
  }
`;
