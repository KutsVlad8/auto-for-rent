import { Suspense } from 'react';
import Header from 'components/Header/Header';

import { Outlet } from 'react-router-dom';
import Footer from 'components/Footer/Footer';
import {
  MainContainer,
  ContentContainer,
  BodyContainer,
} from './Layout.styled';

// import { Loader } from 'components/Loader/Loader';

const Layout = () => {
  return (
    <BodyContainer>
      <Header />

      <main>
        <MainContainer>
          <ContentContainer>
            <Suspense fallback={null}>
              <Outlet />
            </Suspense>
          </ContentContainer>
        </MainContainer>
      </main>
      <Footer />
    </BodyContainer>
  );
};

export default Layout;
