import React, { useState } from "react";
import Styles from "./index.module.scss";
import Container from "../../component/Container";
import Image from "../../../src/Assets/graphic.jpg";
import Image1 from "../../Assets/one.jpg";
import Image2 from "../../Assets/img2.jpg";
import Image3 from "../../Assets/sideBar.jpg";
import CommanBanner from "../../component/CommanBanner";
import CommonTitle from "../CommonTitle";
import TabArea from "./TabArea";
import CourcePrice from "./CoursePrice";
import AskQuestion from "./AskQuestion";
import ApplyNow from "./SideBarApplyNow";
import CourseReview from "./CourseReview";
import CourseCrousel from "./CourseCrousel";

const CoursesDetails = () => {
  const [show, setShow] = useState("Features");
  const [active, setActive] = useState("Features");
  const menuChangeHandler = (name) => {
    setShow(name);
    setActive(name);
  };
  return (
    <>
      <CommanBanner section="Courses Details" />
      <div className={Styles.courcesPage}>
        <Container>
          <div className={Styles.courcesPage__rowflex}>
            <div className={Styles.courcesPage__rowflex__couresDetails}>
              <div className={Styles.courcesPage__rowflex__couresDetails__inner}>
                <h2>Advance WordPress Development Class</h2>
                <p>
                  Bimply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specime book. It has survived
                  not only five centuries.
                </p>
                <img src={Image} alt="" />
                <TabArea />
              </div>

              <div
                className={
                  Styles.courcesPage__rowflex__couresDetails__crousalArea}>
                <h3>Related Courses</h3>
              </div>
              <CourseCrousel />
            </div>
            <div className={Styles.courcesPage__rowflex__sidebar}>
              <CourcePrice />
              <CourseReview />
              <AskQuestion />
              <ApplyNow />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default CoursesDetails;
