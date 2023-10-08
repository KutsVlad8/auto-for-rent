import { Item, CardThumb, CardImg, Cardcontent } from './CarsListItem.styled';

const CarsListItem = ({ car }) => {
  return (
    <Item>
      <CardThumb>
        <CardImg src={car.img} alt={car.make} width="401" height="268" />
        <Cardcontent>
          <p>
            {car.make} {car.model},{car.year} {car.rentalPrice}
          </p>
        </Cardcontent>
      </CardThumb>
    </Item>
  );
};

export default CarsListItem;
