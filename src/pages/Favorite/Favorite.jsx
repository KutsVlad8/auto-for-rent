import { Text, Container, Btn } from './Favorite.styled';
import CarsList from '../../components/CarsList/CarsList';
import ButtonLink from 'components/ButtonLink/ButtonLink';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { getFavorites } from '../../redux/selectors';

const Favorite = () => {
  const [displayedCars, setDisplayedItems] = useState(8);
  const favorite = useSelector(getFavorites);

  const visibleCars = favorite.slice(0, displayedCars);

  const loadMore = () => {
    setDisplayedItems(prevCount => prevCount + 8);
  };

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
        <>
          <CarsList cars={visibleCars}></CarsList>

          {displayedCars < favorite.length ? (
            <Btn onClick={loadMore}>Load more </Btn>
          ) : null}
        </>
      )}
    </Container>
  );
};

export default Favorite;
