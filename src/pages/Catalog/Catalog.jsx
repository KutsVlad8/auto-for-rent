import CarsList from '../../components/CarsList/CarsList';
import FilterBar from '../../components/FilterBar/FilterBar';
import { useSelector, useDispatch } from 'react-redux';
import { getCars } from '../../redux/selectors';
import { useEffect, useState } from 'react';
import { fetchCars } from '../../redux/operations';
import { Btn } from './Catalog.styled';

const Catalog = () => {
  const [displayedItems, setDisplayedItems] = useState(8);
  const dispach = useDispatch();

  useEffect(() => {
    dispach(fetchCars());
  }, [dispach]);

  const cars = useSelector(getCars);
  const visibleCars = cars.slice(0, displayedItems);
  console.log(displayedItems);

  const loadMore = () => {
    setDisplayedItems(prevCount => prevCount + 8);
  };

  return (
    <>
      <FilterBar />
      <CarsList cars={visibleCars} />

      {displayedItems < cars.length ? (
        <Btn onClick={loadMore}>Load more </Btn>
      ) : null}
    </>
  );
};

export default Catalog;
