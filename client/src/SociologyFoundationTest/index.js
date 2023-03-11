import React from "react";
import CommanBanner from "../component/CommanBanner";
import CommanHeading from "../component/CommanHeading";
import Container from "../component/Container";
import Item from "../component/Item";
import PaymentDetails from "../component/PaymentDetails";
import AskQuestion from "../CourceDetails/AskQuestion";
import CourseCrousel from "../CourceDetails/CourseCrousel";
import CourcePrice from "../CourceDetails/CoursePrice";
import ApplyNow from "../CourceDetails/SideBarApplyNow";
import Styles from "../CourceDetails/index.module.scss";
import Registration from "../Registation";
import useCourse from "../hooks/useCourse";

const SociologyFoundationTest = () => {
  const { onRegistrationHandler, courseName, coursePrice, enroll } = useCourse();
  return (
    <>
      {!enroll ? (
        <>
          <CommanBanner section="Sociology Foundation + Test" />
          <div className={Styles.courcesPage}>
            <Container>
              <div className={Styles.courcesPage__rowflex}>
                <div className={Styles.courcesPage__rowflex__couresDetails}>
                  <div className={Styles.courcesPage__rowflex__couresDetails__inner}>
                    <h2>Sociology Foundation + Test</h2>
                    <p>Bimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specime book. It has survived not only five centuries.</p>
                    <img src="/images/socioFound+Test.jpeg" alt="banner" />

                    <CommanHeading heading="SOCIOLOGY FOUNDATION WITH DAILY ANSWER WRITING" />
                    <Item para="Daily 2 hours Classes. At the End of the Lecture Assignment related to the Topic is given based on Previous Year Question." />
                    <Item para="Daily After Attending the Online Lec. do Telephonic Doubt discussion with Vikash Sir." />
                    <Item para="Duration of the Class is Four months but Your Direct Contact with Sir and Mentorship of Vikash Sir will remain till your Final Success." />
                    <Item para="Classn begins with Basics & Equal Focus on Fundamentals & #Applied #Sociology along with Coverage of CURRENT Sociology. APPLIED UNDERSTANDING OF SYLLABUS help you retain the Concepts and Theories." />
                    <Item para="Previous Years Questions are well Integrated in Foundation Course itself." />
                    <Item para="15 Quick Revision & CONTEMPORARY/ CURRENT ISSUES UPDATION CLASS After Your Prelims Test. In this class We do INTELLIGENT GUESSWORK for CSE Mains of that Particular Year. (Exclusively for Triumph IAS Students)" />

                    <CommanHeading heading="STUDY MATERIAL / NOTES :" />
                    <Item para="PRINTED BOOKLETS For Each Topic which is Concise, Well Updated, & Exam Oriented." />
                    <Item para="MINUTES REVISION CARDS (5-MRC) for Regular Revision of the the Concepts & Theories." />

                    <CommanHeading heading="PRACTICE WORKBOOK FOR TEST:-" />
                    <Item para="Students Will get 2 PRACTICE WORKBOOK consisting of 10 Set of UPSC Based MockTest Papers." />

                    <CommanHeading heading="PERSONAL MENTORSHIP :" />
                    <Item para="Get PERSONAL MENTORSHIP of Vikash Sir for GENERAL STUDIES STRATEGY, ESSAY & PERSONALIT-YDEVELOPMENT for Civil Services...till Your Final Success." />
                    <Item para="Regular One-on-One Interaction & Individual Councelling for Stress Management and Refinement of Strategy for Exam by Vikash Ranjan Sir." />

                    <CommanHeading heading="SOCIOLOGY TEST SERIES - MENTORSHIP PROGRAMME" />
                    <Item para="CLASSROOM Tests - 10 (6 Syllabus Sectional Tests & 4 Comprehensive UPSC Mock Tests)" />
                    <Item para="Questions will Cover All The Topics of Syllabus." />
                    <Item para=" Live Feedback by Vikash Sir during Review of the Papers." />
                    <Item para="Online Discussion of Test Papers on Triumph IAS Portal." />
                    <Item para="Model Hint for Reference." />
                    <Item para='One-On-One Telephonic Counseling For "Syllabus Focused & Solution Focused Preparation" by Vikash Sir.' />
                    <Item para="Students will have Flexibility in Writing Tests." />

                    <CommanHeading heading="CLASSROOMS INTERACTION & PARTICIPATORY DISCUSSION:" />
                    <Item para="main exam is intendedThe to assess the overall intellectual traits and depth of understanding of candidates rather than merely the range of information and memory." />

                    <CommanHeading heading="“UPSC Criterion for Mains”" />
                    <Item para="Study support from Triumph IAS & Personal Mentorship of Vikash Sir will be provided to Students till final Selection. The students can consult Vikash Ranjan Sir even after completion of their course .The Students can seek an appointment at the institute or Contact via Phone & Whatsapp #8586861046." />
                    <Item para="Vikash Sir provides Special Guidance Session for “Essay & Mains General Study” too." />

                    <CommanHeading heading="Our Philosophy:" />
                    <Item para="Test Questions & Discussions of the Test Series should be based on Demand & Dynamism of Previous Five Years CSE Mains Examination. Beginning with “Basics”, we ensure that Fundamentals and Applied Sociological Knowledge is consolidated with every passing Test & Discussion. " />

                    <CommanHeading heading="Our Approach & Strategy:" />
                    <Item para="Our Exam focused approach will help aspirants understand the demand & dynamism of CSE Mains Exam. Our strategy is to develop Knowledge Matrix of Sociology by Correlating Sociology Paper I, Sociology Paper II, General Studies & Current Down to Earth Sociology. Our Personalized & Interactive Tutorial Approach (Whatsapp/Telephonic Discussion of Vikash Ranjan Sir with Aspirants) will continuously improve the aspirant’s performance with every passing Test." />

                    <CommanHeading heading="Our Focus-Your Success:" />
                    <Item para="Focus on Developing Knowledge Matrix of Sociology by Correlating Sociology Paper I, Sociology Paper II, General Studies & Current Down to Earth Sociology." />
                    <Item para="Focus on Structure & Presentation of answer-Content according to requirements -Context of the questions-Key Words." />
                    <Item para="Alignment of Concepts, Theory, Facts, Studies & Current Day to Day Observation in your answer." />

                    <CommanHeading heading="Personal Guidance, Key to Success:" />
                    <Item para="Personal One on One discussion session (Face to face or Telephonic) with Vikash Ranjan Sir for in-depth participatory Collaborative Solution of the Problem." />
                    <Item para="Personal Counseling & Feedback session by Vikash Ranjan Sir to fulfill specific competitive needs of the aspirants." />

                    <CommanHeading heading="Scientific Evaluation & Assessment System:" />
                    <Item para="Hybrid (objective & Subjective) Performance Analysis, Paper Wise & Sectional Assessment." />
                    <Item para="Inter-Paper & Intra Papers Correlation Analysis, Analysis of Applied Sociology in Answers." />
                    <Item para="Analysis of Test Papers based on Difficulty Level & Nature & Scope of questions." />
                    <Item para="All India Rank & Comparison with toppers." />
                    <Item para="Integrated Score Card," />
                    <Item para="Evaluation of the answer sheet is done in the context of Demand and Dynamism and Emerging Trends in Marking Pattern of UPSC on following indicators." />
                    <Item para="Introduction" />
                    <Item para="Content-Prioritization" />
                    <Item para="Alignment-Articulation-Flow" />
                    <Item para="Contexual Justification" />
                    <Item para="Novelty-Correction & Application" />
                    <Item para="language Competency" />
                    <Item para="Legibility of Concepts , Theories & Facts" />
                    <Item para="Conclusion" />

                    <CommanHeading heading="Test Writing Flexibility:" />
                    <Item para="We also give our students the flexibility of individual scheduling of Tests as per their convenience. You can reschedule your tests, based on your study plan for CSE Mains 2019-20. Further, you can either come to our centers to write the tests or can write at a place of your choice, and upload the scanned copies of answer sheets for evaluation onwww.triumphias.com or send it to info@triumphias.com" />

                    <CommanHeading heading="Instruction for the Students:" />
                    <Item para="Try to write the answer according to the actual requirement (context) of the questions." />
                    <Item para="Focus on Key words & Tail words effectively (Elucidate – Explain, Comment, Examine, Critically examine, Discuss, Analyze, Illustrate, Review, Argue, Jusfy etc.)" />
                    <Item para="Understand the context of the questions, Content of the answer should be in the contextual framework." />
                    <Item para="Ensure proper structure of the answer. Proper consideration of priority and focus of given Content is must." />
                    <Item para="Logical structuring of sentences and their alignment. Present relevant information, choice of words and proper statement." />
                    <Item para="Proper Visibility of Content through alignment of Theory, Facts, Sociological Studies & Personal Observation of Current Socio-Economic & Political Affairs according to the requirement of the questions." />
                    <Item para="Try to bring Novelty in Expression and Analysis with the help of Knowledge Matrix." />
                    <Item para="Give Contextual Beginning and Conclusion of the Answers." />
                    <Item para="Give your opinion when asked for it. Incorporate your opinion from different perspective in a balanced manner." />

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
                  <CourcePrice price="65000" onClick={onRegistrationHandler} courseName="Sociology Foundation + Test" />
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
        <Registration course={courseName} price={coursePrice} onlineOffline="Offline" />
      )}
    </>
  );
};

export default SociologyFoundationTest;
