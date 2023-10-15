import styled from '@emotion/styled';
import { colors } from '../../utils';

export const Btn = styled.button`
  display: block;
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  color: ${colors.btnTextColor};
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.42;

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
