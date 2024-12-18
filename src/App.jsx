import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './layouts/header/Header';
import Footer from './layouts/footer/Footer';

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="px-4 py-2 md:py-4 md:px-8 lg-py-8 lg:px-16">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
}
