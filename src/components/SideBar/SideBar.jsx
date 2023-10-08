import { NavBar, Navigation, NavigationItem } from './SideBar.styled';

const SideBar = () => {
  return (
    <NavBar>
      <Navigation>
        <NavigationItem to="/">Home</NavigationItem>
        <NavigationItem to="/catalog">Catalog</NavigationItem>
        <NavigationItem to="/favorite">Favorite</NavigationItem>
      </Navigation>
    </NavBar>
  );
};

export default SideBar;
