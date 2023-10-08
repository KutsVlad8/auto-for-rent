import CarsListItem from '../CarsListItem/CarsListItem';
import { List } from './CarsList.styled';
const CarsList = ({ cars }) => {
  console.log(cars);
  return (
    <List>
      {cars.map(car => (
        <CarsListItem key={car.id} car={car}></CarsListItem>
      ))}
    </List>
  );
};

export default CarsList;
