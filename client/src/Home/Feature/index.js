import React from "react";
import Styles from "./index.module.scss";
import Item from "./FeatureItem";
import BigFeatureCard from "./BigFeatureCard";
import Container from "../../../src/component/Container";
import { useNavigate } from "react-router-dom";
const Feature = () => {
  const navigate = useNavigate();

  const navigateToAllCourses = () => {
    navigate("/all-course");
  };

  const goToSocioOnline = () => {
    navigate("/sociology-online");
  };

  const goToEssayFoundation = () => {
    navigate("/course-details-essay-foundation-plus-test-2019");
  };

  const goToEssayTestSeries = () => {
    navigate("/essay-test-series");
  };

  const goToSocioTestStudy = () => {
    navigate("/sociology-test-plus-study");
  };

  const goToSocioTestSeries = () => {
    navigate("/course-details-sociology-freshers-test");
  };
  return (
    <div className={Styles.featureSection}>
      <Container>
        <div className={Styles.featureSection__hedding}>
          <h3>Featured Courses</h3>
        </div>
        <div className={Styles.featureSection__featureArea}>
          <div className={Styles.featureSection__featureArea__subjectArea}>
            <div className={Styles.featureSection__featureArea__subjectArea__bigFeatureCard}>
              <BigFeatureCard src="/images/course1.png" onClick={goToSocioOnline} />
            </div>
            <div className={Styles.featureSection__featureArea__subjectArea__mainSubject}>
              <Item onClick={goToEssayFoundation} imageSrc="/images/course2.jpg" hedding="GMET" para="Rmply dummy printing ypesetting industry it’s free" />
              <Item onClick={goToEssayTestSeries} imageSrc="/images/course3.jpg" hedding="Regular MBA" para="Rmply dummy printing ypesetting industry it’s free" />
              <Item onClick={goToSocioTestStudy} imageSrc="/images/course4.jpg" hedding="CSE Science" para="Rmply dummy printing ypesetting industry it’s free" />
              <Item onClick={goToSocioTestSeries} imageSrc="/images/course5.png" hedding="Graphic Design" para="Rmply dummy printing ypesetting industry it’s free" />
            </div>
          </div>
          <div className={Styles.featureSection__featureArea__buttonArea}>
            <button onClick={navigateToAllCourses}>VIEW ALL CORSES</button>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Feature;
