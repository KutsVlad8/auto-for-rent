import ButtonLink from 'components/ButtonLink/ButtonLink';

import {
  Hero,
  Title,
  AboutUs,
  SubTitle,
  Label,
  List,
  ListItem,
  Content,
} from './Home.styled';

const Home = () => {
  return (
    <>
      <Hero>
        <Title> Find Your Perfect Rid</Title>
        <ButtonLink text={'Go to catalog'} />
      </Hero>
      <AboutUs>
        <SubTitle>Why Choose Us</SubTitle>
        <List>
          <ListItem>
            <Label>Convenience and Flexibility</Label>
            <Content>
              Our customers can rent a car on their own convenient schedule and
              use it for various purposes, whether it's for travel, business
              trips, or everyday commuting.
            </Content>
          </ListItem>

          <ListItem>
            <Label>Variety of Choices</Label>
            <Content>
              Our company offers a variety of cars from different brands,
              models, and classes, allowing our customers to choose a car that
              best suits their needs and budget.
            </Content>
          </ListItem>

          <ListItem>
            <Label>Time and Cost Savings</Label>
            <Content>
              Car rental can be more economical than purchasing your own car,
              especially for short trips or temporary use. It also helps avoid
              the expenses of car maintenance and repair.
            </Content>
          </ListItem>

          <ListItem>
            <Label>Support and Safety</Label>
            <Content>
              Our company provides technical support to customers and takes care
              of the safety and maintenance of the vehicles. Our customers can
              feel confident and safe in the rented cars.
            </Content>
          </ListItem>
        </List>
      </AboutUs>
    </>
  );
};

export default Home;
