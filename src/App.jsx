import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <div className='bg mt-48'>
      <Footer />
      </div>
    </>
  );
};

export default App;