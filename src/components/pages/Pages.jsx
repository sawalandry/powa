import React from 'react';

import Header from '../common/header/Header';
import Footer from '../common/footer/Footer';

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import About from '../about/About';
import Blog from '../blog/Blog';
import Contact from '../contact/Contact';
import Home from '../home/Home';
import Pricing from '../pricing/Pricing';
import Services from '../services/Services';



const Layout = () => {
  return (
    <>
      <Header />
        <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/services',
          element: <Services />,
        },
        {
          path: '/blog',
          element: <Blog />,
        },
        {
          path: '/pricing',
          element: <Pricing />,
        },
        {
          path: '/contact',
          element: <Contact />,
        },
      ]
  }
]);

const Pages = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default Pages