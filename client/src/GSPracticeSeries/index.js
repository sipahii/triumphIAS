import React from "react";
import Styles from "../EssayTopics/index.module.scss"
import Image from "../Assets/graphic.jpg";
import CommanBanner from "../component/CommanBanner";
import Container from "../component/Container";
import CommanHeading from "../component/CommanHeading";
import Item from "../component/Item";
import CourseCrousel from "../CourceDetails/CourseCrousel";
import Img2 from "../../src/Assets/Test-series.jpg"

const GSPracticeSeries = () => {
  const para = <p><strong>Download Schedule</strong><br />Chat With Us:<strong> Click Here to Chat</strong></p>
  const para1 = <p>General Science.<br />
    <strong>   UPSC Syllabus for Paper II-</strong> (200 marks) Duraon: Two hours (Not counted for the merit rank in Prelims but a qualifying Paper; just needs 33% marks).</p>
  return (
    <>
      <CommanBanner section="GS PRELIMS PRACTICE SERIES - CSE 2021" />
      <div className={Styles.courcesPage}>
        <Container>
          <div className={Styles.courcesPage__rowflex}>
            <div className={Styles.courcesPage__rowflex__couresDetails}>
              <div className={Styles.courcesPage__rowflex__couresDetails__inner}>
                <h2>GS PRELIMS PRACTICE SERIES - CSE 2021</h2>
                <img src={Image} alt="image" />

                <CommanHeading
                  heading="Programme Highlights:"
                />
                <Item para="Batch Starts: 15th March." />
                <Item para="Total Number of Tests – 14 ." />
                <Item para={para} />
                <Item para="Call or Whatsapp : 7840888102 / 7678628820" />
                <Item para="Email : info@triumphias.com" />

                <CommanHeading
                  heading="PRELIMINARY STRATEGY:"
                />
                <Item para="Never underestimate the importance of UPSC Prelims. Only 3 out of 100 candidates who appear for Prelims, clear the cut-off score. Yes, the 'Prelims Hurdle' has gradually become difϐicult but you should also understand that Preliminary stage is actually just a qualifying stage. Therefore, one should study for Prelims in such a manner that it somehow contributes more to Mains Stage than just merely allowing to write that examination." />
                <img src={Img2} alt="image" />
                <CommanHeading
                  heading="Importance of a Revision & Practice under Mentorship"
                />
                <Item para="Revision & Practice play most important role in clearing any competitive exam. However mentorship increase the efϐiciency of preparation by clubbing the commitment and hard work of students and experience/ right guidance of mentor. Unlike other competitive exam Civil Services Examination need more planned, structured, focused hard work and dedication. How much you study does not solely matters here, what also matters is how much practice in right direction you do before the exam. Hence Revision & Practice under Mentorship Maximise the chance to achieve the ultimate Goal. So be in touch with the Mentor, Vikash Ranjan Sir." />


                <CommanHeading
                  heading="What is Preliminary stage of Civil Services Examination?"
                />
                <Item para="Civil Services Preliminary exam comprises of two compulsory papers of 200 marks each (General Studies Paper I and General Studies Paper II). The questions will be of multiple choices, objective type. The marks in prelims will not be counted for ϐinal ranking, but just for qualiϐication for main exam. The Commission will draw a list of candidates to be qualiϐied for Civil Service (Main) Examination based on the criterion of minimum qualifying marks of 33% in General Studies Paper-II of Civil Services (Preliminary) Examination and total qualifying marks of General Studies Paper-I of Civil Services (Preliminary) Examination as may be determined by the Commission. The exam is competitive and the qualifying mark does not just depend on absolute individual performances but on relative individual performances. What is the beneϐit of clearing Preliminary Examination? The qualifying students of this round will get a chance to write Civil Services Mains Examination." />


                <CommanHeading
                  heading="What is Syllabus for Preliminary Stage?"
                />
                <Item para="UPSC Syllabus for Paper I (200 marks) Duration: Two hours (Counted for the merit rank in the Prelims)." />
                <Item para="Current events of national and international importance." />
                <Item para="Ancient, Medieval and Modern History of India and Indian National Movement" />
                <Item para="Indian and World Geography – Physical, Social, Economic Geography of India and the World." />
                <Item para="Indian Polity and Governance – Constuon, Polical System, Panchaya Raj, Public Policy, Rights Issues, etc" />
                <Item para="Economic and Social Development Sustainable Development, Poverty, Inclusion, Demographics, Social Sector iniaves, etc." />
                <Item para="General issues on Environmental Ecology, Bio-diversity and Climate Change – that do not require subject specializaon." />
                <Item para={para1} />
                <Item para="Comprehension." />
                <Item para="Interpersonal skills including communicaon skills." />
                <Item para="Logical reasoning and analycal ability" />
                <Item para="Decision-making and problem-solving." />
                <Item para="General mental ability." />
                <Item para="Basic numeracy (numbers and their relaons, orders of magnitude, etc.) (Class X level), Data interpretaon (charts, graphs, tables, data sufficiency etc. – Class X level)." />




              </div>

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

export default GSPracticeSeries;
