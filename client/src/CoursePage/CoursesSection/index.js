import React, { useState } from "react";
import Styles from "./index.module.scss";
import Container from "../../component/Container";
import TabItem from "./courseTab";
import PagesItem from "./coursePagess";
import { useNavigate } from "react-router-dom";
const CoursesPage = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState("ALL");
  const relatedCourseChangehandler = (name) => {
    setShow(name);
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
    <>
      <div className={Styles.courseSection}>
        <Container>
          <TabItem relatedCourseChangehandler={relatedCourseChangehandler} />
          {show === "ALL" && (
            <div className={Styles.courseSection__coursePagesection}>
              <PagesItem onClick={goToSocioOnline} imageSrc="/images/course1.png" subjectName="Sociology" month="7 Months" courses="Course" desc="With Daily Answer Writing Focused On Applied Sociology" classDay="30" classes="Classes" time="10 pm - 11 pm" />
              <PagesItem onClick={goToEssayFoundation} imageSrc="/images/course2.jpg" subjectName="Essay" desc="With Essay Foundation And Test (Online)" month="3 Months" courses="Course" classDay="30" classes="Classes" time="10 pm - 11 pm" />
              <PagesItem onClick={goToEssayTestSeries} imageSrc="/images/course3.jpg" subjectName="Essay Test" desc="Series CUM Mentorship Programme By Vikash Ranjan" month="1 Year" courses="Course" classDay="30" classes="Classes" time="09 pm - 11 pm" />
              <PagesItem onClick={goToSocioTestStudy} imageSrc="/images/course4.jpg" subjectName="Sociology Test + Study" desc="Series CUM Mentorship Programme By Vikash Ranjan" month="2 Month" courses="Course" classDay="30" classes="Classes" time="02 pm - 04 pm" />
              <PagesItem onClick={goToSocioTestSeries} imageSrc="/images/course5.png" subjectName="Sociology Test" desc="Series CUM Mentorship Programme By Vikash Ranjan" month="4 Months" courses="Course" classDay="30" classes="Classes" time="08 pm - 10 pm" />
            </div>
          )}
          {show === "DIPLOMA" && (
            <div className={Styles.courseSection__coursePagesection}>
              <PagesItem imageSrc="course1.jpg" subjectName="Basic Philosopphy" month="7 Months" courses="Course" classDay="30" classes="Classes" time="10 pm - 11 pm" />
              <PagesItem imageSrc="course2.jpg" subjectName="GMAT" month="3 Months" courses="Course" classDay="30" classes="Classes" time="10 pm - 11 pm" />
              <PagesItem imageSrc="course3.jpg" subjectName="IELTS" month="1 Year" courses="Course" classDay="30" classes="Classes" time="09 pm - 11 pm" />
              <PagesItem imageSrc="course5.jpg" subjectName="Diploma" month="4 Months" courses="Course" classDay="30" classes="Classes" time="08 pm - 10 pm" />
            </div>
          )}
          {show === "CSS" && (
            <div className={Styles.courseSection__coursePagesection}>
              <PagesItem imageSrc="course6.jpg" subjectName="Mathematics" month="1 Year" courses="Course" classDay="30" classes="Classes" time="10 pm - 12 pm" />
              <PagesItem imageSrc="course7.jpg" subjectName="Basic Philosopphy" month="3 Year" courses="Course" classDay="30" classes="Classes" time="09 pm - 11 pm" />
              <PagesItem imageSrc="course8.jpg" subjectName="GMAT" month="8 Months" courses="Course" classDay="30" classes="Classes" time="05 pm - 08 pm" />
              <PagesItem imageSrc="course4.jpg" subjectName="CSE" month="2 Month" courses="Course" classDay="30" classes="Classes" time="02 pm - 04 pm" />
            </div>
          )}
          {show === "MATHEMATICS" && (
            <div className={Styles.courseSection__coursePagesection}>
              <PagesItem imageSrc="course3.jpg" subjectName="IELTS" month="1 Year" courses="Course" classDay="30" classes="Classes" time="09 pm - 11 pm" />
              <PagesItem imageSrc="course6.jpg" subjectName="Mathematics" month="1 Year" courses="Course" classDay="30" classes="Classes" time="10 pm - 12 pm" />
              <PagesItem imageSrc="course7.jpg" subjectName="Basic Philosopphy" month="3 Year" courses="Course" classDay="30" classes="Classes" time="09 pm - 11 pm" />
              <PagesItem imageSrc="course8.jpg" subjectName="GMAT" month="8 Months" courses="Course" classDay="30" classes="Classes" time="05 pm - 08 pm" />
            </div>
          )}
          {show === "ENGLISH" && (
            <div className={Styles.courseSection__coursePagesection}>
              <PagesItem imageSrc="course1.jpg" subjectName="Basic Philosopphy" month="7 Months" courses="Course" classDay="30" classes="Classes" time="10 pm - 11 pm" />
              <PagesItem imageSrc="course4.jpg" subjectName="CSE" month="2 Month" courses="Course" classDay="30" classes="Classes" time="02 pm - 04 pm" />
              <PagesItem imageSrc="course5.jpg" subjectName="Diploma" month="4 Months" courses="Course" classDay="30" classes="Classes" time="08 pm - 10 pm" />
              <PagesItem imageSrc="course7.jpg" subjectName="Basic Philosopphy" month="3 Year" courses="Course" classDay="30" classes="Classes" time="09 pm - 11 pm" />
            </div>
          )}
          {show === "MEDICAL" && (
            <div className={Styles.courseSection__coursePagesection}>
              <PagesItem imageSrc="course1.jpg" subjectName="Basic Philosopphy" month="7 Months" courses="Course" classDay="30" classes="Classes" time="10 pm - 11 pm" />
              <PagesItem imageSrc="course2.jpg" subjectName="GMAT" month="3 Months" courses="Course" classDay="30" classes="Classes" time="10 pm - 11 pm" />
              <PagesItem imageSrc="course6.jpg" subjectName="Mathematics" month="1 Year" courses="Course" classDay="30" classes="Classes" time="10 pm - 12 pm" />
              <PagesItem imageSrc="course8.jpg" subjectName="GMAT" month="8 Months" courses="Course" classDay="30" classes="Classes" time="05 pm - 08 pm" />
            </div>
          )}
        </Container>
      </div>
    </>
  );
};
export default CoursesPage;
