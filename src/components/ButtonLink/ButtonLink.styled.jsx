import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const BtnLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 115px;
  height: 26px;

  padding: 14px 44px;
  margin-left: auto;
  margin-right: auto;

  color: #fff;
  font-family: Manrope;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.42;
  text-decoration: none;

  border-radius: 12px;
  background: #3470ff;

  outline: none;
  border: none;
  cursor: pointer;
`;
