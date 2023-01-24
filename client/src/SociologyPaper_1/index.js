import React from "react";
import CommanBanner from "../component/CommanBanner";
import CommanHeading from "../component/CommanHeading";
import Container from "../component/Container";
import Item from "../component/Item";
import PaymentDetails from "../component/PaymentDetails";
import CourcePrice from "../CourceDetails/CoursePrice";
import Styles from "../CourceDetails/index.module.scss"
import Image from "../Assets/graphic.jpg";
import AskQuestion from "../CourceDetails/AskQuestion";
import ApplyNow from "../CourceDetails/SideBarApplyNow";
import CourseCrousel from "../CourceDetails/CourseCrousel";

const SociologyPapper_1 = () => {
  return (
    <>
      <CommanBanner section="SOCIOLOGY QUESTIONS PAPER-1 - UPSC CIVIL SERVICES IAS EXAM 2021 QUESTION PAPER" />
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
                  heading="SOCIOLOGY QUESTIONS PAPER-1 - UPSC CIVIL SERVICES IAS EXAM 2021 QUESTION PAPER"
                />
                <Item para="1. (a) Europe was the first and the only place where modernity emerged. Comment." />
                <Item para="(b) Do you think ethnomethodology helps us in getting reliable and valid data? Justify your answer." />
                <Item para="(c) Discuss the challenges involved in collecting data through census method." />
                <Item para="(d) Explain whether Durkheim's theory of Division of Labour is relevant in the present day context.(e) Critically examine Max Weber's theory of Social Stratification." />
                <Item para="(e) Critically examine Max Weber's theory of Social Stratification." />
                <Item para="2. (a) From the viewpoint of growing importance of multidisciplinarity, how do you relate sociology to other social sciences?" />
                <Item para="(b) How far are sociologists justified in using positivist approach to understand social reality ? Explain with suitable illustrations." />
                <Item para="(c) How is sociology related to common sense?" />
                <Item para="3 .(a) How do qualitative and quantitative methods supplement each other in sociological enquiry?" />
                <Item para="(b) Critically examine the dialectics involved in each mode of production as propounded by Karl Marx." />
                <Item para="(c) Do you agree with Max Weber's idea that bureaucracy has the potential to become an iron cage? Justify your answer." />
                <Item para="4 .(a) Explain the concept of social mobility. Describe with suitable illustrations how education and social mobility are related to each other." />
                <Item para="(b) How has the idea of ‘Work From Home' forced us to redefine the formal and informal organisation of work?" />
                <Item para="(c) With suitable examples, explain how conformity and deviance coexist in a society as propounded by R.K. Merton.s" />
                <Item para="5. (a) Explain the emerging challenges in establishing gender equality in the informal sector." />
                <Item para="(b) Critically examine the relevance of Vilfredo Pareto's theory of Circulation of Elites in the present scenario." />
                <Item para="(c) Critically compare the views of E.B. Tylor and Max Muller on Religion." />
                <Item para="(d) What is cult? Explain the growth of cults in the contemporary world." />
                <Item para="(e) Do you think Talcott Parsons gave an adequate theory of social change Justify your answer." />
                <Item para="6. (a) Elucidate the main problems and challenges faced by the migrant labourers in the recent Lockdown period'." />
                <Item para="(b) Explain how political parties and pressure groups are dialectically related to each other in terms of achieving their goals." />
                <Item para="(c) Give your comments on the growth of religious revivalism in the present day context." />
                <Item para="7. (a) Explain how the pattern of patriarchy is being altered in a family and at the workplace in the present context." />
                <Item para="(b) Critically examine the contribution of dependency theories in understanding the present global scenario." />
                <Item para="(c) Explain the growing salience of ethnicity in the contemporary world with illustrations." />
                <Item para="8. (a) Discuss the changing nature of kinship relations in the contemporary world." />
                <Item para="(b) Describe the role of Science and Technology in enabling us to face the challenges triggered by the COVID-19 pandemic." />
                <Item para="(c) Highlight the roles and functions of civil society in a democratic system." />



              </div>

            </div>
            {/* <div className={Styles.courcesPage__rowflex__sidebar}>
              <CourcePrice />
              <PaymentDetails />
              <AskQuestion />
              <ApplyNow />
            </div> */}
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

export default SociologyPapper_1;
