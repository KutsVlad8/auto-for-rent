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
    </Head>
  );
};

export default Header;
