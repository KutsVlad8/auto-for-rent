import styled from '@emotion/styled';
import { colors } from '../../utils';

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${colors.backdrop};
`;

export const ModalContent = styled.div`
  position: absolute;
  width: 541px;
  padding: 40px;
  display: flex;
  flex-wrap: wrap;

  background-color: white;
  border-radius: 24px;

  height: 700px;
  overflow: auto;
`;

export const BtnClose = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
  fill: #121417;

  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    fill: #0b44cd;
  }

  &:hover {
    fill: #0b44cd;
  }
`;

export const Svg = styled.svg`
  width: 24px;
  height: 24px;
`;
