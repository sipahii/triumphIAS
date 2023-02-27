import React from "react";
import CoursesPage from "./CoursesSection";
import Header from "../Header";
import Navigation from "../Navigation";
import Footer from "../Footer";
import CommanBanner from "../component/CommanBanner";

const CoursePage = () => {
  return (
    <>
      <CommanBanner section="All Courses" />
      <CoursesPage />
    </>
  );
};

export default CoursePage;
