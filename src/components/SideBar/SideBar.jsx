import { Aside, Navigation, NavigationItem, Svg } from './SideBar.styled';
import sprite from '../../images/sprite.svg';

const SideBar = () => {
  return (
    <Aside>
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
    </Aside>
  );
};

export default SideBar;
