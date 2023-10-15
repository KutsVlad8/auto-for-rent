import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { colors } from '../../utils';

export const BtnLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 115px;
  height: 26px;

  padding: 14px 44px;
  margin-left: auto;
  margin-right: auto;

  color: ${colors.btnTextColor};
  font-family: Manrope;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.42;
  text-decoration: none;

  border-radius: 12px;
  background-color: ${colors.btnColor};

  outline: none;
  border: none;
  cursor: pointer;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    background-color: ${colors.btnChangeColor};
  }

  &:hover {
    background-color: ${colors.btnChangeColor};
  }
`;
