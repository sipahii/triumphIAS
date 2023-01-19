import React from "react";
import CoursesPage from "./CoursesSection";
import Header from "../Header";
import Navigation from "../Navigation";
import Footer from "../Footer";
import CommanBanner from "../component/CommanBanner";

const CoursePage = () => {
  return (
    <>
      <Header />
      <Navigation />
      <CommanBanner section="Courses_03" />
      <CoursesPage />
      <Footer />
    </>
  );
};

export default CoursePage;
