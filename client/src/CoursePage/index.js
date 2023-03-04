import React from "react";
import CoursesPage from "./CoursesSection";
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
