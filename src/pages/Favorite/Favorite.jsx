import { Text } from './Favorite.styled';
import ButtonLink from 'components/ButtonLink/ButtonLink';
import { useSelector } from 'react-redux';
import { getFavorites } from '../../redux/selectors';
import CarsListItem from '../../components/CarsListItem/CarsListItem';

import { List } from './Favorite.styled';

const Favorite = () => {
  const favorite = useSelector(getFavorites);

  return (
    <>
      <div>
        {favorite.length === 0 ? (
          <>
            <Text> Go to the catalog to select a car</Text>
            <ButtonLink text={'Go to catalog'} />
          </>
        ) : (
          <List>
            {favorite.map(fav => (
              <CarsListItem key={fav.id} car={fav}></CarsListItem>
            ))}
          </List>
        )}
      </div>
    </>
  );
};

export default Favorite;
