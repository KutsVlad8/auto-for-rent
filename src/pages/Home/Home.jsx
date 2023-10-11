import { Hero, Title } from './Home.styled';
import ButtonLink from 'components/ButtonLink/ButtonLink';

const Home = () => {
  return (
    <Hero>
      <Title> Go to the catalog to select a car</Title>
      <ButtonLink text={'Go to catalog'} />
    </Hero>
  );
};

export default Home;
