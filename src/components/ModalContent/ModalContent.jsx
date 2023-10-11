import React from 'react';
import { nanoid } from 'nanoid';

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
  Text,
  AcessList,
  AcessListItem,
  RentalList,
  RentalListItem,
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

        <Text>{description}</Text>

        <Text>Accessories and functionalities:</Text>
        <AcessList>
          {accessories.map(acess => (
            <AcessListItem key={nanoid(2)}>{acess}</AcessListItem>
          ))}
        </AcessList>

        <AcessList>
          {functionalities.map(func => (
            <AcessListItem key={nanoid(2)}>{func}</AcessListItem>
          ))}
        </AcessList>

        <Text>Rental Conditions:</Text>
        <RentalList>
          {parts.map(part => (
            <RentalListItem key={nanoid(2)}>{part}</RentalListItem>
          ))}

          <RentalListItem>Millage: {mileage}</RentalListItem>
          <RentalListItem>Price: {rentalPrice}</RentalListItem>
        </RentalList>

        <Btn>Rental Car</Btn>
      </Cardcontent>
    </CardThumb>
  );
};

export default ModalContent;
