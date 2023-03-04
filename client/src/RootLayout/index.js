import React from "react";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../component/ScrollToTop";
import Footer from "../Footer";
import Header from "../Header";
import Navigation from "../Navigation";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Navigation />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
