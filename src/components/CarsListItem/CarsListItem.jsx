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
  Btn,
  FavBtn,
} from './CarsListItem.styled';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../Modal/Modal';
import ModalContent from 'components/ModalContent/ModalContent';
import { locationCity, locationCountry } from '../../utils';
import { addToFavorites } from '../../redux/carsSlice';
import { getFavorites } from '../../redux/selectors';
import sprite from '../../images/sprite.svg';

const CarsListItem = ({ car }) => {
  const {
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    img,
    id,
    accessories,
    description,
    functionalities,
    mileage,
    rentalConditions,
  } = car;

  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useDispatch();

  // ================== открытие модального окна =============

  const handleOpenModal = () => {
    const body = document.querySelector('body');
    body.style.overflow = 'hidden';
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    const body = document.querySelector('body');
    body.style.overflow = 'auto';
    setIsOpenModal(false);
  };

  // ========= добавление удаление избранного =======

  const handleToggleFavorite = () => {
    dispatch(addToFavorites(car));
  };

  const favoriteCars = useSelector(getFavorites);

  const isFavorite = favoriteCars.some(
    favoriteCar => favoriteCar.id === car.id
  );

  // const isFavorite =

  return (
    <>
      <Item>
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
              <AttributeListItem>{accessories[0]}</AttributeListItem>
            </AttributeList>
            <Btn onClick={handleOpenModal}>Learn more</Btn>

            {isFavorite ? (
              <FavBtn onClick={handleToggleFavorite}>
                <svg>
                  <use href={sprite + `#icon-active-heart`}></use>
                </svg>
              </FavBtn>
            ) : (
              <FavBtn onClick={handleToggleFavorite}>
                <svg>
                  <use href={sprite + `#icon-heart-white`}></use>
                </svg>
              </FavBtn>
            )}
          </Cardcontent>
        </CardThumb>

        {isOpenModal && (
          <Modal onClose={handleCloseModal}>
            <ModalContent
              id={id}
              img={img}
              make={make}
              model={model}
              year={year}
              type={type}
              rentalPrice={rentalPrice}
              address={address}
              rentalCompany={rentalCompany}
              accessories={accessories}
              description={description}
              functionalities={functionalities}
              mileage={mileage}
              rentalConditions={rentalConditions}
            />
          </Modal>
        )}
      </Item>
    </>
  );
};

export default CarsListItem;
