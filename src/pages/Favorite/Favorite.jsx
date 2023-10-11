import { Text, Container } from './Favorite.styled';
import ButtonLink from 'components/ButtonLink/ButtonLink';
import { useSelector } from 'react-redux';
import { getFavorites } from '../../redux/selectors';
import CarsListItem from '../../components/CarsListItem/CarsListItem';

import { List } from './Favorite.styled';

const Favorite = () => {
  const favorite = useSelector(getFavorites);

  return (
    <Container>
      {favorite.length === 0 ? (
        <>
          <Text>
            Sorry, at the moment, our catalog doesn't have any available cars.
          </Text>
          <Text>Please return to the catalog to add cars.</Text>
          <ButtonLink text={'Go to catalog'} />
        </>
      ) : (
        <List>
          {favorite.map(fav => (
            <CarsListItem key={fav.id} car={fav}></CarsListItem>
          ))}
        </List>
      )}
    </Container>
  );
};

export default Favorite;
