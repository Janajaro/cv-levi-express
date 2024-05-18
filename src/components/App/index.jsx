import React from 'react';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import { Footer } from '../Footer';
import { Header } from '../Header';

export const App = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);
