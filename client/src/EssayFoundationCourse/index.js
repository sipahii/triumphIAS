import React from "react";
import Styles from "../CourceDetails/index.module.scss";
import CommanBanner from "../component/CommanBanner";
import Container from "../component/Container";
import TabArea from "../CourceDetails/TabArea";
import CommanHeading from "../component/CommanHeading";
import Item from "../component/Item";
import CourcePrice from "../CourceDetails/CoursePrice";
import PaymentDetails from "../component/PaymentDetails";
import AskQuestion from "../CourceDetails/AskQuestion";
import ApplyNow from "../CourceDetails/SideBarApplyNow";
import CourseCrousel from "../CourceDetails/CourseCrousel";
import Registration from "../Registation";
import Tab from "../widget/Tab";
import useCourse from "../hooks/useCourse";

const EssayFoundationCourse = () => {
  const { onRegistrationHandler, onCourseHandler, courseName, coursePrice, enroll, courseType } = useCourse("20,000", "Online");
  return (
    <>
      {!enroll ? (
        <>
          <CommanBanner section="essay class & test series" />
          <div className={Styles.courcesPage}>
            <Container>
              <div className={Styles.courcesPage__top}>
                <Tab onClick={onCourseHandler} onlineOffline="Online" btnName="Online Course Fee" price="20,000" class={courseType === "Online" ? Styles.active : ""} />
                <Tab onClick={onCourseHandler} onlineOffline="Offline" btnName="Offline Course Fee" price="20,000" class={courseType === "Offline" ? Styles.active : ""} />
              </div>
              <div className={Styles.courcesPage__rowflex}>
                <div className={Styles.courcesPage__rowflex__couresDetails}>
                  <div className={Styles.courcesPage__rowflex__couresDetails__inner}>
                    <h2>Essay Class & Test Series</h2>
                    <p>Bimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specime book. It has survived not only five centuries.</p>
                    <img src="/images/ban2.png" alt="banner" />
                    <TabArea />

                    <CommanHeading heading="COURSE FEATURES" />
                    <Item para="Starts : 1st December 2022" />
                    <Item para="Admission Limited to - 100 Students" />
                    <Item para="Essay Class - 15 Sessions" />
                    <Item para="Essay Mock Test - 6 Test" />
                    <Item para="Model Ans. hint for each test" />
                    <Item para="Essay Self Practice Test - 12 Test (Soft Copy)" />
                    <Item para="Focus on Developing Knowledge Matrix for writing any types of Essay." />
                    <Item para="Special Focus on Learning the art of writing Philosophical Essays." />
                    <Item para="Booklet on Essay - Previous Years Topic Based Study Material" />
                    <Item para="Personal Mentorship one on one Doubts Discussion Sessions with Vikash Ranjan Sir*" />
                    <Item para="Telephonic Support For one on one Doubts Discussion Sessions with Vikash Ranjan Sir" />
                    <br />
                    <Item para="Call or Whatsapp : 7840888102, 7678628820" />

                    <CommanHeading heading="What We Offer in Essay Foundation Course ?" />
                    <Item para="Improvement in Essay writing is a Continuous & Gradual Process. To develop the skill of Essay writing, Triumph IAS offers special “Essay Classes & Test Series” Under Mentorship & Personal Guidance of Vikash Ranjan Sir. This Course includes both, Classes and Test Series. A Good Knowledge base with Good Writing Skills is important for writing the essay logically and coherently." />
                    <Item para="Since there is no definite syllabus of Essay, in this Course, We provide Essay Knowledge-Matrix Classes on different Theme-Topics for improving your Thinking & Knowledge base. Apart from knowledge, Essay demands certain Set of Writing Skills that we ensure in first two classes and consolidate it with every passing Class & Test." />
                    <Item para="Knowledge-Matrix Classes are followed by Test Series. Six Essay Mock Tests based on UPSC on different Themes i.e. polities & Democracy, Economy, Environment, Security, Social issues etc. will be conducted. Each Test will be followed by class discussion." />
                    <Item para="Model Essay Hints for reference will be provided after Each Test." />
                    <Item para="Since Discussion is Key for Improvement, after the expert evaluation & class discussion of test papers, students can do One-on-One Interaction on their Strengths & Weaknesses, with Vikash Ranjan Sir." />

                    <CommanHeading heading="What is the Approach ? " />
                    <Item para="Inculcating Competency in Essay for IAS, which is different from Essay in English, Essay in School or College." />
                    <Item para="Temporal, Sectoral, Elaboration, Explanation, Exemplification of the Topic through General Studies Knowledge Matrix." />

                    <CommanHeading heading="Teaching Objective!" />
                    <Item para="We focus on improving student’s ability to Comprehend the Topic-Sentence (subject), Recall & Relate the Facts, Concepts, Propose Thesis-Statements, and Logically assimilate the Ideas & Counter Ideas with clarity in expression on temporal & Sectoral Scales of knowledge." />

                    <CommanHeading heading="Why to Take Up This Course?" />
                    <Item para="Essay is Low hanging Fruit. Marks in Essay Effectively Contributes in Final Selection in New Pattern of Mains Exam. With a Well Developed ‘Knowledge Matrix and Rigorous Practice’, One can Score up to 170 in Essay. So an IAS Aspirants should never Ignore Essay Preparation." />

                    <CommanHeading heading="Procedure for Online Class:" />
                    <Item para="Account for online classes will be activated within 36 hours of Enrollment." />
                    <Item para="Enrolled students will be provided a Login id and a Password to access their Account on the website." />
                    <Item para="Class Videos will be Uploaded for the enrolled students in their account within 24hrs after the conduct of offline class." />
                    <Item para="Class Videos will be available in Students account for next 6 month from subscription date." />
                    <Item para="In Case of Sharing of Account Id and Password with friends and peers, Students Account will be disabled forever." />
                    <Item para="For One on One Doubt Clearance, Students will have to call or Whatsapp on 8586861046 to Vikash Ranjan Sir with Name, Admission Reference number and Batch." />
                    <Item para="In Case of any issue related to Course Content/Material Dispatch/Test/Assignment Call: 7840888102 or Email:info@triumphias.com" />
                    <Item para="In Case of any technical inconvenience Email: info@triumphias.com" />
                  </div>
                </div>
                <div className={Styles.courcesPage__rowflex__sidebar}>
                  <CourcePrice price={coursePrice} onClick={onRegistrationHandler} courseName="Essay Class & Test Series" />
                  <PaymentDetails />
                  <AskQuestion />
                  <ApplyNow />
                </div>
              </div>
              <div className={Styles.courcesPage__rowflex__couresDetails__crousalArea}>
                <h3>Related Courses</h3>
              </div>

              <CourseCrousel />
            </Container>
          </div>
        </>
      ) : (
        <Registration course={courseName} price={coursePrice} onlineOffline={courseType} />
      )}
    </>
  );
};

export default EssayFoundationCourse;
