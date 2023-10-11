import CarsList from '../../components/CarsList/CarsList';
import FilterBar from '../../components/FilterBar/FilterBar';
import { useSelector, useDispatch } from 'react-redux';
import { getCars } from '../../redux/selectors';
import { useEffect } from 'react';
import { fetchCars } from '../../redux/operations';

const Catalog = () => {
  const dispach = useDispatch();

  useEffect(() => {
    dispach(fetchCars());
  }, [dispach]);

  const cars = useSelector(getCars);

  return (
    <>
      <FilterBar />
      <CarsList cars={cars} />
    </>
  );
};

export default Catalog;
