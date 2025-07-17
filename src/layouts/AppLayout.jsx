// src/layouts/AppLayout.jsx


import { Outlet } from 'react-router-dom';
import Footer from '../components/footer';
import Header from '../components/header';
import ScrollToTop from '../components/ScrollToTop';

function AppLayout() {
  return (
    <>

    {/* ScrollToTop is for scrolling all item top to buttom */}
      <ScrollToTop />

      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default AppLayout;
