import CarsList from '../../components/CarsList/CarsList';
import cars from '../../data/cars.json';

const Catalog = () => {
  return (
    <>
      <CarsList cars={cars} />
    </>
  );
};

export default Catalog;
