import CarsList from '../../components/CarsList/CarsList';
import FilterBar from '../../components/FilterBar/FilterBar';
import cars from '../../data/cars.json';

const Catalog = () => {
  return (
    <>
      <FilterBar />
      <CarsList cars={cars} />
    </>
  );
};

export default Catalog;
