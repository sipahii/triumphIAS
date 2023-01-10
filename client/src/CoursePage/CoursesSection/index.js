import React, { useState } from "react";
import Styles from "./index.module.scss";
import Container from "../../component/Container";
import TabItem from "./courseTab";
import PagesItem from "./coursePagess";
const CoursesPage = () => {
  const [show, setShow] = useState("ALL");
  const relatedCourseChangehandler = (name) => {
    setShow(name);
  };
  return (
    <>
      <div className={Styles.courseSection}>
        <Container>
          <TabItem relatedCourseChangehandler={relatedCourseChangehandler} />
          {show === "ALL" && (
            <div className={Styles.courseSection__coursePagesection}>
              <PagesItem
                imageSrc="course1.jpg"
                subjectName="Basic Philosopphy"
                month="7 Months"
                courses="Course"
                classDay="30"
                classes="Classes"
                time="10 pm - 11 pm"
              />
              <PagesItem
                imageSrc="course2.jpg"
                subjectName="GMAT"
                month="3 Months"
                courses="Course"
                classDay="30"
                classes="Classes"
                time="10 pm - 11 pm"
              />
              <PagesItem
                imageSrc="course3.jpg"
                subjectName="IELTS"
                month="1 Year"
                courses="Course"
                classDay="30"
                classes="Classes"
                time="09 pm - 11 pm"
              />
              <PagesItem
                imageSrc="course4.jpg"
                subjectName="CSE"
                month="2 Month"
                courses="Course"
                classDay="30"
                classes="Classes"
                time="02 pm - 04 pm"
              />
              <PagesItem
                imageSrc="course5.jpg"
                subjectName="Diploma"
                month="4 Months"
                courses="Course"
                classDay="30"
                classes="Classes"
                time="08 pm - 10 pm"
              />
              <PagesItem
                imageSrc="course6.jpg"
                subjectName="Mathematics"
                month="1 Year"
                courses="Course"
                classDay="30"
                classes="Classes"
                time="10 pm - 12 pm"
              />
              <PagesItem
                imageSrc="course7.jpg"
                subjectName="Basic Philosopphy"
                month="3 Year"
                courses="Course"
                classDay="30"
                classes="Classes"
                time="09 pm - 11 pm"
              />
              <PagesItem
                imageSrc="course8.jpg"
                subjectName="GMAT"
                month="8 Months"
                courses="Course"
                classDay="30"
                classes="Classes"
                time="05 pm - 08 pm"
              />
            </div>
          )}
          {show === "DIPLOMA" && (
            <div className={Styles.courseSection__coursePagesection}>
              <PagesItem
                imageSrc="course1.jpg"
                subjectName="Basic Philosopphy"
                month="7 Months"
                courses="Course"
                classDay="30"
                classes="Classes"
                time="10 pm - 11 pm"
              />
              <PagesItem
                imageSrc="course2.jpg"
                subjectName="GMAT"
                month="3 Months"
                courses="Course"
                classDay="30"
                classes="Classes"
                time="10 pm - 11 pm"
              />
              <PagesItem
                imageSrc="course3.jpg"
                subjectName="IELTS"
                month="1 Year"
                courses="Course"
                classDay="30"
                classes="Classes"
                time="09 pm - 11 pm"
              />
              <PagesItem
                imageSrc="course5.jpg"
                subjectName="Diploma"
                month="4 Months"
                courses="Course"
                classDay="30"
                classes="Classes"
                time="08 pm - 10 pm"
              />
            </div>
          )}
          {show === "CSS" && (
            <div className={Styles.courseSection__coursePagesection}>
              <PagesItem
                imageSrc="course6.jpg"
                subjectName="Mathematics"
                month="1 Year"
                courses="Course"
                classDay="30"
                classes="Classes"
                time="10 pm - 12 pm"
              />
              <PagesItem
                imageSrc="course7.jpg"
                subjectName="Basic Philosopphy"
                month="3 Year"
                courses="Course"
                classDay="30"
                classes="Classes"
                time="09 pm - 11 pm"
              />
              <PagesItem
                imageSrc="course8.jpg"
                subjectName="GMAT"
                month="8 Months"
                courses="Course"
                classDay="30"
                classes="Classes"
                time="05 pm - 08 pm"
              />
              <PagesItem
                imageSrc="course4.jpg"
                subjectName="CSE"
                month="2 Month"
                courses="Course"
                classDay="30"
                classes="Classes"
                time="02 pm - 04 pm"
              />
            </div>
          )}
          {show === "MATHEMATICS" && (
            <div className={Styles.courseSection__coursePagesection}>
              <PagesItem
                imageSrc="course3.jpg"
                subjectName="IELTS"
                month="1 Year"
                courses="Course"
                classDay="30"
                classes="Classes"
                time="09 pm - 11 pm"
              />
              <PagesItem
                imageSrc="course6.jpg"
                subjectName="Mathematics"
                month="1 Year"
                courses="Course"
                classDay="30"
                classes="Classes"
                time="10 pm - 12 pm"
              />
              <PagesItem
                imageSrc="course7.jpg"
                subjectName="Basic Philosopphy"
                month="3 Year"
                courses="Course"
                classDay="30"
                classes="Classes"
                time="09 pm - 11 pm"
              />
              <PagesItem
                imageSrc="course8.jpg"
                subjectName="GMAT"
                month="8 Months"
                courses="Course"
                classDay="30"
                classes="Classes"
                time="05 pm - 08 pm"
              />
            </div>
          )}
          {show === "ENGLISH" && (
            <div className={Styles.courseSection__coursePagesection}>
              <PagesItem
                imageSrc="course1.jpg"
                subjectName="Basic Philosopphy"
                month="7 Months"
                courses="Course"
                classDay="30"
                classes="Classes"
                time="10 pm - 11 pm"
              />
              <PagesItem
                imageSrc="course4.jpg"
                subjectName="CSE"
                month="2 Month"
                courses="Course"
                classDay="30"
                classes="Classes"
                time="02 pm - 04 pm"
              />
              <PagesItem
                imageSrc="course5.jpg"
                subjectName="Diploma"
                month="4 Months"
                courses="Course"
                classDay="30"
                classes="Classes"
                time="08 pm - 10 pm"
              />
              <PagesItem
                imageSrc="course7.jpg"
                subjectName="Basic Philosopphy"
                month="3 Year"
                courses="Course"
                classDay="30"
                classes="Classes"
                time="09 pm - 11 pm"
              />
            </div>
          )}
          {show === "MEDICAL" && (
            <div className={Styles.courseSection__coursePagesection}>
              <PagesItem
                imageSrc="course1.jpg"
                subjectName="Basic Philosopphy"
                month="7 Months"
                courses="Course"
                classDay="30"
                classes="Classes"
                time="10 pm - 11 pm"
              />
              <PagesItem
                imageSrc="course2.jpg"
                subjectName="GMAT"
                month="3 Months"
                courses="Course"
                classDay="30"
                classes="Classes"
                time="10 pm - 11 pm"
              />
              <PagesItem
                imageSrc="course6.jpg"
                subjectName="Mathematics"
                month="1 Year"
                courses="Course"
                classDay="30"
                classes="Classes"
                time="10 pm - 12 pm"
              />
              <PagesItem
                imageSrc="course8.jpg"
                subjectName="GMAT"
                month="8 Months"
                courses="Course"
                classDay="30"
                classes="Classes"
                time="05 pm - 08 pm"
              />
            </div>
          )}
        </Container>
      </div>
    </>
  );
};
export default CoursesPage;
