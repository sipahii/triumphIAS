import React from "react";
import Styles from "../EssayTopics/index.module.scss";
import Image from "../Assets/graphic.jpg";
import Image2 from "../Assets/Interview.jpg";
import CommanBanner from "../component/CommanBanner";
import CommanHeading from "../component/CommanHeading";
import Container from "../component/Container";
import Item from "../component/Item";
import CourseCrousel from "../CourceDetails/CourseCrousel";

const PersonalityTest = () => {
  const Important = (
    <h4>
      <strong>
        THERE IS MUCH MORE TO BE SHARED WITH YOU TO ILLUSTRATE EACH OF THE INDIVIDUAL CONSTITUENTS,BROADLY OUTLINE ABOVE FOR REINFORCING YOUR PREPARATION LEVELS ATTAINED SO FAR, WITH COGENT TIPS ON TACTICS AND STRATEGY TO MEET WITH THE MEMBERS OF THE BOARD !!
        <br /> MAIL YOUR DAF AT @ <i>rtriumphias@gmail.com</i> OR SUBMIT YOUR DAF AT TRIUMPHIAS OFFICE For ONE ON ONE INTERACTION WITH VIKASH RANJAN
      </strong>
    </h4>
  );
  return (
    <>
      <CommanBanner section="PERSONALITY TEST PREVIEW-2022" />
      <div className={Styles.courcesPage}>
        <Container>
          <div className={Styles.courcesPage__rowflex}>
            <div className={Styles.courcesPage__rowflex__couresDetails}>
              <div className={Styles.courcesPage__rowflex__couresDetails__inner}>
                <h2>PERSONALITY TEST PREVIEW-2022</h2>
                <img src={Image} alt="banner" />

                <CommanHeading heading="PERSONALITY-TEST-2022 ONE-ON- ONE GUIDANCE PROGRAMME" />
                <Item para="Personality Test-One-on-One guidance programme Focused on refinement of INDIVIDUAL PERSONALITY by defining novel ways of presentation, communication, emotional stability, social intelligence, body language, and ways of answering before UPSC Interview Board." />

                <CommanHeading heading="What does UPSC Notification say about Personality Test?" />
                <Item para="“The candidates will be interviewed by a Board who will have before them a record of his/her career. He/She will be asked questions on matters of general interest. The object of the interview is to assess the personal suitability of the candidates for a career in public service by a Board of competent and unbiased observers. The test is intended to judge the mental caliber of a candidate. In broad terms this is really an assessment of not only his intellectual qualities but also social traits and his interest in current affairs.”" />

                <CommanHeading heading="HIGHLIGHTS OF THE PROGRAMME-2022" />
                <Item para="Discussion on Particulars" />
                <p>Prizes, Medals, Scholarship etc. (Achievement Motivation) Sports, NCC etc. (Altruistic Motivation) Position of Destination/leadership (Motivate to lead.) Activities, Interest-Hobbies (Recreational Motivation )</p>
                <Item para="Discussion on HOME- STATE." />
                <Item para="Discussion on Academics-school, College, University." />
                <Item para="Discussion on work Experience / No work Experience." />
                <Item para="Discussion on Parentage." />
                <Item para="Discussion on Sociology Optional." />
                <Item para="Discussion on service- WHY IAS?" />
                <Item para="How to tackle Question on ‘Gap’ between Academic study and competitive ‘Exam’ Appearance?" />

                <CommanHeading heading="SOME OF THE QUALITIES TO BE JUDGED ARE:" />
                <Item para="Mental Alertness" />
                <Item para="Critical powers of assimilation" />
                <Item para="Clear and logical exposition" />
                <Item para="Balance of judgements" />
                <Item para="Variety and depth of interest" />
                <Item para="Ability for social cohesion and leadership,Intellectual and moral integrity" />
                <img src={Image2} alt="banner" />

                <CommanHeading heading="LETTER TO IAS ASPIRANT PREPARING FOR PERSONALITY TEST" />
                <Item para='The interviewing process is a kind of SALE. In this case, you are the PRODUCT-and the SALESPERSON. If you show up unprepared to talk about your unique attributes, you are not likely to motivate the interviewers to " BUY" ... Vikash Ranjan"' />
                <p>
                  <b>DEAR IAS ASPIRANTS</b>
                  <br />
                  Interviews for Personality test should be handelled with<b>a calm mind and confidence in composure</b>You will be interviewed by a Board who will have before them a record of your personality in form of DAF . You will be asked questions on <b>matters of general interest</b>as well as different aspects of personality. The object of the interview is to assess the <b>personal suitability</b> of the candidate for a <b> career in public service</b> by a{" "}
                  <b> Board of component and unbaised observers</b> The test is intended to judge the <b>mental caliber</b> of a condidate in broad terms in really an assessment of not only his <b> intellectual qualities</b> but also{" "}
                  <b> social trails and his intrest in current affairs. Some of the qualities to be judged are mental altertness,critical powers of assimilation,clear and logical expositions,balance of judgement,variety and depth of interest,ability for social cohesion and leadership,intellectual and moral integrity.</b> The technique of the interview is{" "}
                  <b>not that of strict cross-examination but of natural,though direct and purposive conversation which is intended to reveal the mental to reveal the mental qualities of the candidate. The interview is not intended to be a test either of the specialised or general knowledge of the candidates which has been already tested through their written papers.</b> Candidates are expected to have taken an intelligent interest not only in their special subjects of academic study but also in
                  the events which are happening around them both within and outside their own state or country as well as in modern current of thought and in new discoveries which should rouse the curiosity of well educated youth. <b>The interviewing process is a kind of sale. In this case, you are the product—and the salesperson. If you show up unprepared to talk about your unique features and benefits, you’re not likely to motivate an interviewer to “buy.” </b> The sad fact is that many
                  candidates are unprepared to talk about themselves. You may have gorgeous knowledge. You may be wearing the perfect clothes on the day of the interview. But if you can’t convince the interviewer—face to face—that you are the right person for the administration, you aren’t likely to make the sale.
                  <br /> Too many <b>candidates hesitate</b> after the first open-ended question,<b>then stumble and stutter their</b> way through a disjointed litany of resume “sound bites.” Other interviewees recite canned replies that only highlight their memory skills. <b> I am assuming that, like most people, you are a complex product—made up of a unique blend of abilities, skills, and personal qualities and shaped by your own personal and professional history.</b> Believe me, the time you
                  spend outlining the details of your own life will pay off in interviews, and, ultimately your dream place in administration. This Interview dossier will guide you through the process. <br />
                  You may think you already know your life by heart, but you'll be amazed to see how much additional detail you can remember (and ultimately how it will fit together in the context of your career move IN ADMINSTARION) once you write down all the details about your personlity.
                  <br /> so your <b>first step is to imitate the CBI</b> and build a complete "dossier" on yourself with this "DOSSIER" in place,it will be easier to develop a concise and convicing answer to almost any interview question-an answer that will set you apart from the competition. <br /> {Important}
                </p>
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

export default PersonalityTest;
