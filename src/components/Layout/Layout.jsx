import Header from 'components/Header/Header';
// import SideBar from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from 'components/Footer/Footer';

import { Container } from './Layout.styled';
// import { Loader } from 'components/Loader/Loader';

const Layout = () => {
  return (
    <Container>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Container>
  );
};

export default Layout;
