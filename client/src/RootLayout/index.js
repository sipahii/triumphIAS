import React from "react";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../component/ScrollToTop";
import Footer from "../Footer";
import Header from "../Header";
import Navigation from "../Navigation";

const RootLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
