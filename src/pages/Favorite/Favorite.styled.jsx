import styled from '@emotion/styled';

export const Container = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const Text = styled.p`
  margin-bottom: 50px;
  margin-top: 50px;
  text-align: center;
  color: black;
  font-size: 30px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;

  list-style: none;
`;

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
  background: #3470ff;

  outline: none;
  border: none;
  cursor: pointer;
`;
