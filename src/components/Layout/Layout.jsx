import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../Loader/Loader';

import AppBar from '../AppBar/AppBar';

const Layout = () => {
  return (
    <main>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};
export default Layout;
