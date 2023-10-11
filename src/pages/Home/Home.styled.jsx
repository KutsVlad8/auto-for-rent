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

export const AboutUs = styled.section`
  padding: 30px;
`;

export const SubTitle = styled.h2`
  color: #121417;
  font-family: Manrope;
  font-size: 34px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.8; /* 150% */
  text-align: center;
  margin: 0;
`;

export const Label = styled.h3`
  text-align: center;
  color: #121417;
  font-family: Manrope;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5; /* 150% */
`;

export const List = styled.ul`
    display: flex;
    gap: 50px;
    list-style: none;
    padding: 0;
}`;

export const ListItem = styled.li`
  background-color: lightgrey;
  padding-bottom: 8px;
  padding-top: 8px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 4px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const Content = styled.p`
  color: rgb(15 16 18);
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3; /* 150% */
`;
