import React from 'react';

import {
  CardThumb,
  CardImg,
  Cardcontent,
  TitleList,
  TitleListItem,
  Model,
  Price,
  AttributeList,
  AttributeListItem,
  Btn,
} from './ModalContent.styled';
import { locationCity, locationCountry } from '../../utils';

export const ModalContent = ({
  id,
  img,
  make,
  model,
  year,
  type,
  rentalPrice,
  address,
  rentalCompany,
  accessories,
  description,
  functionalities,
  mileage,
  rentalConditions,
}) => {
  const parts = rentalConditions.split('\n');

  console.log(parts);

  return (
    <CardThumb>
      <CardImg src={img} alt={make} width={274} height={268} />
      <Cardcontent>
        <TitleList>
          <TitleListItem>
            {make} <Model>{model}</Model>,{year}
          </TitleListItem>
          <TitleListItem>
            <Price>{rentalPrice}</Price>
          </TitleListItem>
        </TitleList>

        <AttributeList>
          <AttributeListItem>{locationCity(address)}</AttributeListItem>

          <AttributeListItem>{locationCountry(address)}</AttributeListItem>
          <AttributeListItem>{rentalCompany}</AttributeListItem>

          <AttributeListItem>{type}</AttributeListItem>
          <AttributeListItem>{make}</AttributeListItem>
          <AttributeListItem>{id}</AttributeListItem>
          <AttributeListItem>{accessories}</AttributeListItem>
        </AttributeList>

        <p>{description}</p>

        <p>Accessories and functionalities:</p>
        <ul>
          {accessories.map(acess => (
            <li>{acess}</li>
          ))}
        </ul>

        <ul>
          {functionalities.map(func => (
            <li>{func}</li>
          ))}
        </ul>

        <p>Rental Conditions:</p>
        <ul>
          {parts.map(part => (
            <li>{part}</li>
          ))}

          <li>{mileage}</li>
          <li>{rentalPrice}</li>
        </ul>

        <Btn>Rental Car</Btn>
      </Cardcontent>
    </CardThumb>
  );
};

export default ModalContent;
