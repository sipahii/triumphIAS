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
import Image from "../Assets/graphic.jpg";
import Styles from "../CourceDetails/index.module.scss"

const SociologyTestSeries = () => {
  return (
    <>
      <CommanBanner section="SOCIOLOGY TEST SERIES - MENTORSHIP PROGRAMME CSE -2022-23" />
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
                <img src={Image} alt="image" />
                <CommanHeading
                  heading="What We Offer in Test Series?Admission Open"
                />
                <Item para="Admission Open" />
                <Item para="Total Number of Tests - 30" />
                <Item para="CLASSROOM Tests - 10 (6 Syllabus Sectional Tests & 4 Comprehensive UPSC Mock Tests)" />
                <Item para="SELF PRACTICE Tests - 20" />
                <Item para="Test Will be Followed by Class Discussion and Model Content (*of Sectional Tests)" />
                <Item para="One on One Interaction with Vikash Ranjan Sir For Personal Suggestions & Doubt Clearance after the Class Discussion." />
                <Item para="Test Paper Preparation & Evaluative Review By Vikash Ranjan Sir" />
                <Item para="Personal Mentorship of VIKASH RANJAN Sir & SUPPORT till SUCCESS." />
                <Item para="QUESTIONS COVERING ALL THE TOPICS OF SYLLABUS." />
                <Item para="ONLINE DISCUSSION AFTER THE TEST.MODEL HINT FOR REFERENCE." />
                <Item para="MODEL HINT FOR REFERENCE." />
                <Item para='ONE ON ONE COUNCELING FOR " SYLLABUS FOCUSED &] SOLUTION FOCUSED PREPARATION.' />
                <Item para="REVIEW OF THE PAPERS BY VIKASH SIR." />
                <Item para="Online students can write their test according to their flexibility." />
                <Item para="Call or Whatsapp : 7840888102, 9873957772" />
                <Item para="Email : info@triumphias.com" />

                <CommanHeading
                  heading='“UPSC Criterion for Mains”'
                />
                <Item para="main exam is intendedThe to assess the overall intellectual traits and depth of understanding of candidates rather than merely the range of information and memory." />

                <CommanHeading
                  heading="Our Philosophy:"
                />
                <Item para='Test Questions & Discussions of the Test Series should be based on Demand & Dynamism of Previous Five Years CSE Mains Examination. Beginning with “Basics”, we ensure that Fundamentals and Applied Sociological Knowledge is consolidated with every passing Test & Discussion.' />

                <CommanHeading
                  heading="Our Approach & Strategy:"
                />
                <Item para="Our Exam focused approach will help aspirants understand the demand & dynamism of CSE Mains Exam. Our strategy is to develop Knowledge Matrix of Sociology by Correlating Sociology Paper I, Sociology Paper II, General Studies & Current Down to Earth Sociology. Our Personalized & Interactive Tutorial Approach (Whatsapp/Telephonic Discussion of Vikash Ranjan Sir with Aspirants) will continuously improve the aspirant’s performance with every passing Test. " />

                <CommanHeading
                  heading="Our Focus-Your Success:"
                />
                <Item para="Focus on Developing Knowledge Matrix of Sociology by Correlating Sociology Paper I, Sociology Paper II, General Studies & Current Down to Earth Sociology." />
                <Item para="Focus on Structure & Presentation of answer-Content according to requirements -Context of the questions-Key Words." />
                <Item para="Alignment of Concepts, Theory, Facts, Studies & Current Day to Day Observation in your answer. " />

                <CommanHeading
                  heading="Personal Guidance, Key to Success:"
                />
                <Item para="Personal One on One discussion session (Face to face or Telephonic) with Vikash Ranjan Sir for in-depth participatory Collaborative Solution of the Problem." />
                <Item para="Personal Counseling & Feedback session by Vikash Ranjan Sir to fulfill specific competitive needs of the aspirants." />

                <CommanHeading
                  heading="Scientific Evaluation & Assessment System:"
                />
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

                <CommanHeading
                  heading="Test Writing Flexibility:"
                />
                <Item para="We also give our students the flexibility of individual scheduling of Tests as per their convenience. You can reschedule your tests, based on your study plan for CSE Mains 2019-20. Further, you can either come to our centers to write the tests or can write at a place of your choice, and upload the scanned copies of answer sheets for evaluation onwww.triumphias.com or send it to info@triumphias.com" />

                <CommanHeading
                  heading="Instruction for the Students:"
                />
                <Item para="Try to write the answer according to the actual requirement (context) of the questions." />
                <Item para="Focus on Key words & Tail words effectively (Elucidate – Explain, Comment, Examine, Critically examine, Discuss, Analyze, Illustrate, Review, Argue, Jusfy etc.)" />
                <Item para="Understand the context of the questions, Content of the answer should be in the contextual framework." />
                <Item para="Ensure proper structure of the answer. Proper consideration of priority and focus of given Content is must." />
                <Item para="Logical structuring of sentences and their alignment. Present relevant information, choice of words and proper statement." />
                <Item para="Proper Visibility of Content through alignment of Theory, Facts, Sociological Studies & Personal Observation of Current Socio-Economic & Political Affairs according to the requirement of the questions." />
                <Item para="Try to bring Novelty in Expression and Analysis with the help of Knowledge Matrix." />
                <Item para="Give Contextual Beginning and Conclusion of the Answers." />
                <Item para="Give your opinion when asked for it. Incorporate your opinion from different perspective in a balanced manner." />

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

export default SociologyTestSeries;
