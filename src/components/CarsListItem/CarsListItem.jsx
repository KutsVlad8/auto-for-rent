import {
  Item,
  CardThumb,
  CardImg,
  Cardcontent,
  TitleList,
  TitleListItem,
  Model,
  Price,
  AttributeList,
  AttributeListItem,
} from './CarsListItem.styled';

import Button from '../Button/Button';
import { locationCity, locationCountry } from '../../utils';

const CarsListItem = ({ car }) => {
  return (
    <Item>
      <CardThumb>
        <CardImg src={car.img} alt={car.make} width={274} height={268} />
        <Cardcontent>
          <TitleList>
            <TitleListItem>
              {car.make} <Model>{car.model}</Model>,{car.year}
            </TitleListItem>
            <TitleListItem>
              <Price>{car.rentalPrice}</Price>
            </TitleListItem>
          </TitleList>

          <AttributeList>
            <AttributeListItem>{locationCity(car.address)}</AttributeListItem>

            <AttributeListItem>
              {locationCountry(car.address)}
            </AttributeListItem>
            <AttributeListItem>{car.rentalCompany}</AttributeListItem>

            <AttributeListItem>{car.type}</AttributeListItem>
            <AttributeListItem>{car.make}</AttributeListItem>
            <AttributeListItem>{car.id}</AttributeListItem>
            <AttributeListItem>{car.accessories[0]}</AttributeListItem>
          </AttributeList>
          <Button
            text={'Learn more'}
            width={'100%'}
            height={'44px'}
            type={'button'}
          />
        </Cardcontent>
      </CardThumb>
    </Item>
  );
};

export default CarsListItem;
