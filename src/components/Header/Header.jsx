import { Head, Navigation, NavigationItem, Svg, Logo } from './Header.styled';
import sprite from '../../images/sprite.svg';

const Header = () => {
  return (
    <Head>
      <div>
        <Logo>
          <use href={sprite + `#icon-logo`}></use>
        </Logo>
      </div>
      <Navigation>
        <NavigationItem to="/">
          <Svg>
            <use href={sprite + `#icon-home`}></use>
          </Svg>
          Home
        </NavigationItem>
        <NavigationItem to="/catalog">
          <Svg>
            <use href={sprite + `#icon-car`}></use>
          </Svg>
          Catalog
        </NavigationItem>
        <NavigationItem to="/favorite">
          <Svg>
            <use href={sprite + `#icon-heart`}></use>
          </Svg>
          Favorite
        </NavigationItem>
      </Navigation>
    </Head>
  );
};

export default Header;
