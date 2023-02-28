import React from "react";
import CommanBanner from "../component/CommanBanner";
import CommanHeading from "../component/CommanHeading";
import Container from "../component/Container";
import Item from "../component/Item";
import CourseCrousel from "../CourceDetails/CourseCrousel";
import Styles from "./index.module.scss"

const SociologyStudyMaterial = () => {
  return (
    <>
      <CommanBanner section="Sociology Study Material" />
      <div className={Styles.courcesPage}>
        <Container>
          <div className={Styles.courcesPage__rowflex}>
            <div className={Styles.courcesPage__rowflex__couresDetails}>
              <div className={Styles.courcesPage__rowflex__couresDetails__inner}>
                <h2>IGNOU BOOKS</h2>
                <p>
                  Dear Aspirants,
                  <br />
                  As far as Study Material for Preparation of Sociology Optional is concerned, Four <strong>NCERT</strong> Books and Select <strong>IGNOU</strong> Booklets provide with all topical Content. Beyond these books you need to develop applied understanding of Sociological Concepts, Theories and Facts. Online Websites contain lots of free study-material for Sociology Optional subject. But not all the study material are relevant. Students should be very selective in referring these study material.<br />
                  Always Remember, there are <strong>LIMITED NUMBER of THEORIES & THINKERS In SOCIOLOGY OPTIONAL PAPERS. CONCEPTS & FACTS are also limited. UPSC-IAS ASPIRANTS</strong> simply need to Read & Understand these <strong>CONCEPTS, THINKERS & SOCIAL FACTS</strong> and <strong>REGULARLY</strong> do <strong>BRAINSTORMING ON PREVIOUS YEAR QUESTIONS.</strong> Every <strong>INDIVIDUAL</strong> has <strong>SOCIOLOGICAL IMAGINATION.</strong> While Preparing for this subject and writing Answers you should simply colour your Sociological Imaginations with Concepts & Theories propounded by <strong>SOCIOLOGICAL THINKERS.</strong><br />
                  Application of Theory and Concepts with reference to <strong>CURRENT SOCIAL FCTS</strong> are common type of analytical writing assigned in <strong>SOCIOLOGY CLASSES</strong> and T<strong>ESTS @ TRIUMPH IAS (Vikash Ranjan’s Classes).</strong> UPSC Evaluators expect you to apply <strong>SOCIOLOGICAL THEORIES</strong> (sometimes called "perspectives" or "arguments") to empirical phenomena called <strong>SOCIAL FACTS.</strong> This is my small effort to combine everything at one place. Happy Reading. For any Doubt in Understanding Sociological Concepts and Facts, feel free to <strong>Call or WhatSapp 8586861046</strong><br />
                  <strong> All the Best !</strong><br />
                  <strong> Vikash Ranjan.</strong><br />
                </p>

                <CommanHeading
                  heading="SUBJECT NAME"
                />
                <CommanHeading
                  heading="1. IGNOU BA SOCIOLOGY"
                />
                <CommanHeading
                  heading="TOPICS"
                />
                <Item para="i. The Study Of Society" />
                <Item para="ii. Society In India" />
                <Item para="iii. Sociological Thought" />
                <Item para="iv. Society and Stratification" />
                <Item para="v. Society and Religion" />
                <Item para="vi. Social problems in India" />

                <CommanHeading
                  heading="2. IGNOU MA SOCIOLOGY"
                />
                <CommanHeading
                  heading="TOPICS"
                />

                <Item para="i. India- Democracy and Development" />
                <Item para="ii. Sociological Theories and Concepts" />
                <Item para="iii. Research Methodologies and Methods" />
                <Item para="iv. Sociology of Development" />
                <Item para="v. Sociology in India" />
                <Item para="vi. Sociology of Education" />
                <Item para="vii. Diaspora and Transnational Communities" />

                <CommanHeading
                  heading="3. Sociology of Religion"
                />
                <CommanHeading
                  heading="4. Urban Sociology"
                />


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

export default SociologyStudyMaterial;
