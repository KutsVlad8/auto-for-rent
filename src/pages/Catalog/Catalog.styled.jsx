import styled from '@emotion/styled';

export const Btn = styled.button`
  display: block;
  width: 136px;
  height: 44px;

  margin-left: auto;
  margin-right: auto;

  color: #fff;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.42;

  border-radius: 12px;
  background-color: #3470ff;

  outline: none;
  border: none;
  cursor: pointer;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    background-color: #0b44cd;
  }

  &:hover {
    background-color: #0b44cd;
  }
`;
