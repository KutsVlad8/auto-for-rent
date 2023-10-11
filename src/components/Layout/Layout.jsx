import { Suspense } from 'react';

import SideBar from 'components/SideBar/SideBar';
import { Outlet } from 'react-router-dom';

import {
  MainContainer,
  ContentContainer,
  BodyContainer,
} from './Layout.styled';

// import { Loader } from 'components/Loader/Loader';

const Layout = () => {
  return (
    <BodyContainer>
      <main>
        <MainContainer>
          <ContentContainer>
            <Suspense fallback={null}>
              <Outlet />
            </Suspense>
          </ContentContainer>
          <SideBar></SideBar>
        </MainContainer>
      </main>
    </BodyContainer>
  );
};

export default Layout;
