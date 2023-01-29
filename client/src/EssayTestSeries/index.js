import React from "react";
import Image from "../Assets/graphic.jpg";
import CommanBanner from "../component/CommanBanner";
import CommanHeading from "../component/CommanHeading";
import Container from "../component/Container";
import Item from "../component/Item";
import PaymentDetails from "../component/PaymentDetails";
import AskQuestion from "../CourceDetails/AskQuestion";
import CourseCrousel from "../CourceDetails/CourseCrousel";
import CourcePrice from "../CourceDetails/CoursePrice";
import Styles from "../CourceDetails/index.module.scss"
import ApplyNow from "../CourceDetails/SideBarApplyNow";


const EssayTestSeries = () => {
  return (
    <>
      <CommanBanner section="ESSAY TEST SERIES -PERSONAL MENTORSHIP PROGRAMME CSE -2020-21" />
      <div className={Styles.courcesPage}>
        <Container>
          <div className={Styles.courcesPage__rowflex}>
            <div className={Styles.courcesPage__rowflex__couresDetails}>
              <div className={Styles.courcesPage__rowflex__couresDetails__inner}>
                <h2>TOPPERS WITH VIKASH RANJAN SIR</h2>
                <p>
                  Bimply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specime book. It has survived
                  not only five centuries.
                </p>
                <img src={Image} alt="image" />
                <CommanHeading
                  heading="TEST SERIES FEATURES"
                />
                <Item para="Admission Open" />
                <Item para="Admission Limited to 100 Students / Batch for Personal Mentoring." />
                <Item para="Total Essay-‘Write to Learn’ Tests-18" />
                <Item para="Number of Class Tests- 6" />
                <Item para="Number of Self Practice Tests- 12" />
                <Item para="One on One Interaction with Vikash Ranjan Sir For Personal Suggestions & Doubt Clearance." />
                <Item para="Focus on developing Knowledge Matrix for Essay" />
                <Item para="Model Content will be Provided for all 6 Classroom Tests" />
                <Item para="Test Paper Preparation & Evaluative Review By Vikash Ranjan Sir" />
                <Item para="Personal One on One Interaction Sessions with Vikash Ranjan Sir" />
                <Item para="Flexi-Module & Online Support for Discussion with Vikash Ranjan Sir" />
                <Item para="Flexibility of Opting Online or Offline Mode after Admission." />
                <Item para="Previous years Toppers Paper for Self Evaluation and Learning" />
                <Item para="Personal Mentorship of Vikash Ranjan Sir & SUPPORT till SUCCESS." />
                <br />
                <Item para="Call or Whatsapp : 7678628820" />
                <Item para="Email : info@triumphias.com" />

                <CommanHeading
                  heading="APPROACH"
                />
                <Item para="“Write to Learn, Learn to Score” with the help of KNOWLEDGE MATRIX Approach." />

                <CommanHeading
                  heading="OBJECTIVE"
                />
                <Item para="Inculcating Writing Competency in Essay for IAS, which is Different from Essay in English, Essay in School and College." />

                <CommanHeading
                  heading="What We Offer in “Test Series”?"
                />
                <Item para="Triumph’s Essay Upgradation Test Series (Under Personal Guidance of Vikash Ranjan Sir) doesn’t only focus on improving student’s linguistic skills but also focus on improving student’s ability to comprehend the topic-sentence (subject) recall & relate the facts, concepts, propose thesis-statements, and logically assimilate the ideas & counter ideas with clarity in expression on temporal & Sectoral Scales of knowledge." />
                <Item para="Six Theme-Wise Essay Tests . After the expert evaluation of papers, each test topic is discussed in detail in tne Class." />
                <Item para="Further students are provided one-on-one INTERACTION* Session with Vikash Ranjan Sir. Students get personal feedback on their strength and weaknesses,regarding what is ‘good about their essay and what more should be done to make it a better one’ by Vikash Ranjan Sir." />

                <CommanHeading
                  heading="Why to Take Up This Course ?"
                />
                <Item para="Essay is Low hanging Fruit. Marks in Essay is Effectively Contributing in Final Selection in New Pattern of Mains Exam. With a Well Developed ‘Knowledge Matrix and Rigorous Practice’, One can Score upto 160 + in Essay. So IAS Aspirants should never Ignore Essay Preparation" />


                <CommanHeading
                  heading="Procedure for Online Class:"
                />
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
              <CourcePrice />
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
  );
};

export default EssayTestSeries;
