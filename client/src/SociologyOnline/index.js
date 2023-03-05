import React from "react";
import Styles from "../CourceDetails/index.module.scss";
import CommanBanner from "../component/CommanBanner";
import CommanHeading from "../component/CommanHeading";
import Container from "../component/Container";
import Item from "../component/Item";
import CourseCrousel from "../CourceDetails/CourseCrousel";
import CourcePrice from "../CourceDetails/CoursePrice";
import PaymentDetails from "../component/PaymentDetails";
import ApplyNow from "../CourceDetails/SideBarApplyNow";
import TabArea from "../CourceDetails/TabArea";
import AskQuestion from "../CourceDetails/AskQuestion/";
import Registration from "../Registation";
import useCourse from "../hooks/useCourse";

const SociologyOnline = () => {
  const { onRegistrationHandler, courseName, coursePrice, enroll } = useCourse();
  return (
    <>
      {!enroll ? (
        <>
          <CommanBanner section="Sociology Online" />
          <div className={Styles.courcesPage}>
            <Container>
              <div className={Styles.courcesPage__rowflex}>
                <div className={Styles.courcesPage__rowflex__couresDetails}>
                  <div className={Styles.courcesPage__rowflex__couresDetails__inner}>
                    <h2>Sociology Foundation With Answer Writing</h2>
                    <p>Bimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specime book. It has survived not only five centuries.</p>
                    <img src="/images/sociology.jpeg" alt="banner" />
                    <TabArea />

                    <CommanHeading heading="STUDY MATERIAL / NOTES :" />
                    <Item para="PRINTED BOOKLETS For Each Topic which is Concise, Well Updated, & Exam Oriented." />
                    <Item para="MINUTES REVISION CARDS (5-MRC) for Regular Revision of the the Concepts & Theories." />

                    <CommanHeading heading="PRACTICE WORKBOOK FOR TEST:-" />
                    <Item para="Students Will get 2 PRACTICE WORKBOOK consisting of 10 Set of UPSC Based MockTest Papers." />

                    <CommanHeading heading="PERSONAL MENTORSHIP :" />
                    <Item para="Get PERSONAL MENTORSHIP of Vikash Sir for GENERAL STUDIES STRATEGY, ESSAY & PERSONALIT-YDEVELOPMENT for Civil Services...till Your Final Success." />
                    <Item para="Regular One-on-One Interaction & Individual Councelling for Stress Management and Refinement of Strategy for Exam by Vikash Ranjan Sir." />

                    <CommanHeading heading="SPECIALIST GUIDANCE OF VIKASH RANJAN SIR" />
                    <Item para="Vikash Ranjan Sir is the Specialist teacher of Sociology with vast experience in Teaching and Writing Books of Sociology. His Scientific, Systematic, Applied & Exam Focussed Approach has helped many students to get selected in the Civil Services. Students will LEARN SOCIOLOGY & PRACTICE ANSWER-WRITING under the Personal Guidance of the Well-Experienced Teacher -Vikash Ranjan Sir" />
                    <Item para="At the End of the Class.." />
                    <Item para="Students will have complete Conceptual Understanding of Each and Every Topic of the Syllabus." />
                    <Item para="Students will be able to attempt any of the questions, be Direct or Applied, ensuring 300+ Marks in Sociology." />
                    <Item para="With Rigorous Answer Writing Practice in the regular Sociology Classes, Students will have no further need to hunt for other institutes for Answer Writing." />

                    <CommanHeading heading="CLASSROOMS INTERACTION & PARTICIPATORY DISCUSSION:" />
                    <Item para="Vikash Sir will deliver lectures on respective Topics to develop clarity in Concepts, Theories & Social Facts. There will be Explanation & DISCUSSION on SYLLABUS Topics in the Class." />
                    <Item para="Students will be provided with Study Materials related to each and every topic in advance for discussion in the Class. During class, STUDENTS CAN ASK QUESTIONS to clear their doubt. We motivate students to think over Relevant Questions in the classroom." />

                    <CommanHeading heading="PREPARATORY-STUDY SUPPORT" />
                    <Item para="Study support from Triumph IAS & Personal Mentorship of Vikash Sir will be provided to Students till final Selection. The students can consult Vikash Ranjan Sir even after completion of their course .The Students can seek an appointment at the institute or Contact via Phone & Whatsapp #8586861046." />
                    <Item para="Vikash Sir provides Special Guidance Session for “Essay & Mains General Study” too." />

                    <CommanHeading heading="ONLINE SUPPORT SYSTEM (OSS)" />
                    <Item para="Get access to BLOG, an Online Forum for Value Addition Study Material, Journals and Articles relevant to Sociology on www.triumphias.com" />
                    <Item para="Ask preparation related queries directly to the Mentor via mail vikashranjan@triumphias.com or WhatsApp 8586861046" />
                    <Item para="Access to Recorded Classes for Revision (If Needed) " />

                    <CommanHeading heading="STRATEGIC CLASSROOM PREPARATION" />
                    <Item para="Interactive & Applied teaching with “Exam Focussed” Approach which inculcate Sociological Sense and Competency." />
                    <Item para="Beginning with Basics, Equal Focus on Fundamentals & Applied Sociology." />
                    <Item para="Daily Assignments for Answer Writing Competency." />
                    <Item para="Four Months of Classroom Sessions, Theoretical Discussion, and Concept Building & Answer writing with focus on Learning & Application." />
                    <Item para="Regular Personal Doubt Clearance and Feedback Sessions by Vikash Ranjan Sir." />
                    <Item para="Special Guidance Session for Essay & General Studies content management." />
                    <Item para="Focus on Previous year question of UPSC & State PCS in class discussion.Focus on contemporary Trends in Sociology." />
                    <Item para="Focus on contemporary Trends in Sociology." />

                    <CommanHeading heading="ALL INDIA SOCIOLOGY TEST SERIES (Mains):" />
                    <Item para="All Classroom Students will be entitled for our All India Sociology Test Series (Mains) at Concessional Fee." />
                    <Item para="Every Test will be followed by Elaborate Discussion Session." />

                    <CommanHeading heading="COMPREHENSIVE STUDY MATERIAL" />
                    <Item para="Printed Booklets of Concise, Well Researched, Exam Ready Study Material for Every Unit of the Syllabus." />
                    <Item para="Booklet on Contemporary Society & Sociology Extract from Journals & All leading Newspapers." />

                    <CommanHeading heading="Why Sociology OPTIONAL in CSE Mains?" />
                    <Item para="IN COMPARISON TO OTHER HUMANITIES SUBJECTS like Geography, Public Administration, Political Science etc., SOCIOLOGY has been SAFE & SECURE optional because of SHORTEST SYLLABUS & LIMITED NUMBER OF THINKERS & THEORIES (Only six thinkers & six major theoretical strands). Subject like Geography, Public Administration, Political Science etc. are specialist in nature with big syllabic content." />
                    <Item para="History, Geography, Political Science, Pub. Admin. etc. HELPS in a particular paper of GENERAL STUDIES. For example History helps in G.S. Paper-I, Political Science and Pub. Admin. helps in Paper-II, Economics helps in Paper-III, Philosophy and Psychology helps in Paper-IV. SOCIOLOGY is the only optional which empowers you for all the Papers of G.S. with small but variable syllabic content and understanding of static and dynamic & concepts and facts." />
                    <Item para="Also Topics in Sociology Syllabus is Relevant to Day Today Life. For Example Family, Marriage, Kinship, Religion, Education, Agriculture etc." />
                    <Item para="Sociology is the Best performing optional, also because of higher Predictability In Question Pattern. Seventy percent of the questions repeated from previous year questions." />
                    <Item para="Relatively Short Syllabus, Predictability in Question Pattern, Makes SOCIOLOGY the most suitable subject for Students with science (Engineering and Medicine) and Commerce Background." />
                    <Item para="Every Year there are atleast two to three ESSAYS are related with Sociology Syllabus. Sociology Empowers aspirants for Interview too." />

                    <CommanHeading heading="Why Vikash Ranjan's Classes for Sociology ?" />
                    <Item para="In past few years, the NATURE OF QUESTIONS in Sociology has become MORE CONTEMPORARY AND CURRENT ORIENTED. Now there is a shift from bookish academic approach to ANALYTICAL and APPLIED one. Questions in the last four Years Paper demand in-depth understanding of basics and interlinking it with current happenings and analytical, applied Explanations." />
                    <Item para="Proper guidance and assistance is required to learn the skill of interlinking current happenings with the conventional topics. VIKASH RANJAN SIR at TRIUMPH IAS guides students according to the Recent Trends of UPSC. He begins the Civil Services Optional Subject with basics keeping in mind the understanding level of students, who have no academic background with the subject. Once the students are well conversant with the terms and terminologies and basics of the subject, they move forward." />
                    <Item para="While dealing with each topic of Sociology, he not only interlinks it with CONTEMPORARY & CURRENT ISSUE but also teaches you how to intertwine both the optional papers (Paper I and II)." />
                    <Item para="Extracted from different text books, website, journals, etc. Vikash Ranjan's STUDY MATERIAL is the best for SOCIOLOGY OPTIONAL PAPERS. The study material not only saves students' precious time which they spent in searching for books but also provides updated reports, recent structural-institutional changes and developments reported in newspapers and journals, which are useful to answer unconventional questions and helps in scoring good marks in Main examination. This saves students' time and helps in revising the same study material ten times rather than going for ten books once." />
                    <Item para="At Triumph IAS, with Applied classes and the best study material ,Regular Assignments and Class Tests are also conducted to assess candidates' writing skills and understanding of the subject. Based on students' performance, individual feedback is provided to improve their writing skills." />

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
                  <CourcePrice price="49,000" onClick={onRegistrationHandler} courseName="Sociology Foundation With Daily Answer Writing " />
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
        <Registration course={courseName} price={coursePrice} onlineOffline="Online" />
      )}
    </>
  );
};

export default SociologyOnline;
