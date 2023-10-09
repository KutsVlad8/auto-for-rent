import styled from '@emotion/styled';
import img from '../../images/R.jpg';

export const Title = styled.h1`
  margin-top: 8px;
  text-align: center;
  color: darkslategray;
`;

export const Hero = styled.div`
  width: 100%;
  height: 500px;
  border-radius: 10px;

  background-image: url(${img});

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
