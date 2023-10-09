import { NavBar, Navigation, NavigationItem, Svg } from './SideBar.styled';
import sprite from '../../images/sprite.svg';

const SideBar = () => {
  return (
    <NavBar>
      <Navigation>
        <NavigationItem to="/">
          <Svg>
            <use href={sprite + `#icon-home`}></use>
          </Svg>
        </NavigationItem>
        <NavigationItem to="/catalog">
          <Svg>
            <use href={sprite + `#icon-car`}></use>
          </Svg>
        </NavigationItem>
        <NavigationItem to="/favorite">
          <Svg>
            <use href={sprite + `#icon-heart`}></use>
          </Svg>
        </NavigationItem>
      </Navigation>
    </NavBar>
  );
};

export default SideBar;
