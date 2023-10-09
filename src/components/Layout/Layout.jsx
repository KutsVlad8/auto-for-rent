import { Suspense } from 'react';
// import Header from 'components/Header/Header';
import SideBar from '../SideBar/SideBar';
import { Outlet } from 'react-router-dom';
import Footer from 'components/Footer/Footer';
import { MainContainer, ContentContainer } from './Layout.styled';

// import { Loader } from 'components/Loader/Loader';

const Layout = () => {
  return (
    <>
      {/* <Header /> */}

      <main>
        <MainContainer>
          <ContentContainer>
            <Suspense fallback={null}>
              <Outlet />
            </Suspense>
          </ContentContainer>
          <SideBar />
        </MainContainer>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
