import CarsList from '../../components/CarsList/CarsList';
import FilterBar from '../../components/FilterBar/FilterBar';
import { useSelector, useDispatch } from 'react-redux';
import { getCars } from '../../redux/selectors';
import { useEffect, useState } from 'react';
import { fetchCars } from '../../redux/operations';
import { Btn } from './Catalog.styled';

const Catalog = () => {
  const [displayedCars, setDisplayedItems] = useState(8);
  const dispach = useDispatch();

  useEffect(() => {
    dispach(fetchCars());
  }, [dispach]);

  const cars = useSelector(getCars);
  const visibleCars = cars.slice(0, displayedCars);

  const loadMore = () => {
    setDisplayedItems(prevCount => prevCount + 8);
  };

  return (
    <>
      <FilterBar />
      <CarsList cars={visibleCars} />

      {displayedCars < cars.length ? (
        <Btn onClick={loadMore}>Load more </Btn>
      ) : null}
    </>
  );
};

export default Catalog;
