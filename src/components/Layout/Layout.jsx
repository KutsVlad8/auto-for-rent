import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import SideBar from 'components/SideBar/SideBar';
import { MainContainer, BodyContainer } from './Layout.styled';

const Layout = () => {
  return (
    <BodyContainer>
      <main>
        <MainContainer>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>

          <SideBar></SideBar>
        </MainContainer>
      </main>
    </BodyContainer>
  );
};

export default Layout;
