import styled from '@emotion/styled';

export const Btn = styled.button`
  display: block;
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  color: #fff;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.42;

  border-radius: 12px;
  background: #3470ff;

  outline: none;
  border: none;
  cursor: pointer;
`;
