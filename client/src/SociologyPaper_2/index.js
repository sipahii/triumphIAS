import React from "react";
import CommanBanner from "../component/CommanBanner";
import CommanHeading from "../component/CommanHeading";
import Container from "../component/Container";
import Item from "../component/Item";
import CourseCrousel from "../CourceDetails/CourseCrousel";
import Image from "../Assets/graphic.jpg";
import Styles from "./index.module.scss";

const SociologyPapper_2 = () => {
  return (
    <>
      <CommanBanner section="Sociology Question Paper-2" />
      <div className={Styles.courcesPage}>
        <Container>
          <div className={Styles.courcesPage__rowflex}>
            <div className={Styles.courcesPage__rowflex__couresDetails}>
              <div className={Styles.courcesPage__rowflex__couresDetails__inner}>
                <h2>Advance WordPress Development Class</h2>
                <p>Bimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specime book. It has survived not only five centuries.</p>
                <img src={Image} alt="image" />
                <CommanHeading heading="SOCIOLOGY QUESTIONS PAPER-2 - UPSC CIVIL SERVICES IAS EXAM 2021 QUESTION PAPER" />
                <Item para='1. (a) Caste system studies in India have been dominated by the " book-view" initially. How did the entry of "field-view" bring about a balance in the study of Indian caste system ? Discuss.' />

                <Item para='(b) What does Dr. B. R. Ambedkar mean by the concept of " Annihilation of caste"?' />
                <Item para="(c) Discuss different forms of kinship system in India." />
                <Item para="(d) Critically examine briefly the phrase ' Little Republics' as used to denote India's villages." />
                <Item para="(e) Caste-like formations are present in Non-Hindu religious communities as well. Discuss with examples." />
                <Item para="2. (a) What is identity politics? Discuss the main trends in Dalit movements in India." />
                <Item para='(b) Is Indian society moving from "Hierarchy" towards "differentiation" ? Illustrate your answer with suitable examples.' />
                <Item para="(c) Discuss the salient features of 'new middle class' in India." />
                <Item para="3. 1-Discuss in detail the major contribution of Prof. Yogendra Singh in theorizing India's modernization." />
                <Item para="2. Examine the factors responsible for the rural unrest in contemporary India." />
                <Item para="3. Discuss the changing dimensions of family structure in urban India." />
                <Item para="4. (a) What are the sociological reasons and implication of 'reverse migration during the recent pandemic in India'?" />
                <Item para="(b) Discuss the main features of the debate between G S. Ghurye and V. Elwin on tribal development." />
                <Item para="(c) What are the various forms of untouchability in India? Critically examine." />
                <Item para="5 .(a) Analyze the idea of developmental planning in India." />
                <Item para="(b) Comment on the role of co-operatives in rural development." />
                <Item para="(c) Urban slums are sites of social exclusion - explain." />
                <Item para="(d) Does regionalism essentially lead to decentralization of power? Substantiate your answer with relevant examples." />
                <Item para="(e) Discuss the role of technology in agrarian change in India." />
                <Item para="6. (a) Explain the sociological significance of the New Education Policy and its thrust on vocationalization and skill development." />
                <Item para="(b) Is 'ageing' an emerging issue in Indian society ? Discuss the major problems of the old age people in India." />
                <Item para="(c) Underline the socio-cultural factors) responsible for India's skewed sex-ratio)" />
                <Item para="7." />
                <Item para="(a) The problem of displacement is inherent in the idea of development. Analyze the statement critically." />
                <Item para="(b) Rising 'ethnocentricism' is leading to conflict in our society. Assess this statement with appropriate reasons." />
                <Item para="(c) Is social democracy a precondition for political democracy ? Comment." />
                <Item para="8." />
                <Item para="(a) Discuss the role of social media in communal polarisation. Suggest ways to combat it.Urban settlements in India tend to replicate its rural caste-kinship imprints. Discuss the main reasons." />
                <Item para='(b) Does " economic empowerment automatically bring about "substantive empowerment" for women? Briefly describe the main issues in women empowerment in India.' />
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

export default SociologyPapper_2;
