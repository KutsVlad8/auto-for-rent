import styled from '@emotion/styled';
import img from '../../images/R.jpg';

export const Title = styled.h1`
  margin-bottom: 80px;
  margin-top: 140px;
  text-align: center;
  color: black;
  font-size: 40px;
  color: white;
`;

export const Hero = styled.div`
  width: 100%;
  height: 500px;
  border-radius: 10px;
  padding: 30px;

  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url(${img});

  background-repeat: no-repeat, no-repeat;
  background-position: center, center;
  background-size: cover, cover;
`;
