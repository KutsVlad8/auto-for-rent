import {
  Item,
  CardThumb,
  CardImg,
  Cardcontent,
  Model,
  Price,
} from './CarsListItem.styled';

import Button from '../Button/Button';

const CarsListItem = ({ car }) => {
  return (
    <Item>
      <CardThumb>
        <CardImg src={car.img} alt={car.make} />
        <Cardcontent>
          <p>
            {car.make} <Model>{car.model}</Model>,{car.year}
            <Price>{car.rentalPrice}</Price>
          </p>
        </Cardcontent>
      </CardThumb>

      <Button text={'Learn more'} />
    </Item>
  );
};

export default CarsListItem;
