import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './layouts/header/Header';
import Footer from './layouts/footer/Footer';
import Loader from './components/loader/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <div className="App">
      <Header />
      <ToastContainer/>
      <Outlet />
      <Footer />
    </div>
  );
}
