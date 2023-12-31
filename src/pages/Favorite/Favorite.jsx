import { useSelector } from 'react-redux';
import { useState } from 'react';
import { getFavorites } from '../../redux/selectors';

import CarsList from '../../components/CarsList/CarsList';
import ButtonLink from 'components/ButtonLink/ButtonLink';
import FilterBar from '../../components/FilterBar/FilterBar';

import { Text, Btn } from './Favorite.styled';

const Favorite = () => {
  const [displayedCars, setDisplayedItems] = useState(8);
  const favorite = useSelector(getFavorites);

  const visibleCars = favorite.slice(0, displayedCars);

  const loadMore = () => {
    setDisplayedItems(prevCount => prevCount + 8);
  };

  return (
    <>
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
          <FilterBar />
          <CarsList cars={visibleCars}></CarsList>

          {displayedCars < favorite.length ? (
            <Btn onClick={loadMore}>Load more </Btn>
          ) : null}
        </>
      )}
    </>
  );
};

export default Favorite;
