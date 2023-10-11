import { Text } from './Favorite.styled';
import ButtonLink from 'components/ButtonLink/ButtonLink';

const Favorite = () => {
  return (
    <>
      <div>
        <Text> Go to the catalog to select a car</Text>
        <ButtonLink text={'Go to catalog'} />
      </div>
    </>
  );
};

export default Favorite;
