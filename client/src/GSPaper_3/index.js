import React from "react";
import Styles from "../EssayTopics/index.module.scss"
import Image from "../Assets/graphic.jpg";
import CommanBanner from "../component/CommanBanner";
import Container from "../component/Container";
import CommanHeading from "../component/CommanHeading";
import Item from "../component/Item";
import CourseCrousel from "../CourceDetails/CourseCrousel";

const GSPaper_3 = () => {
  return (
    <>
      <CommanBanner section="GENERAL STUDIES PAPER 3 - UPSC CIVIL SERVICES IAS EXAM 2021 QUESTION PAPER" />
      <div className={Styles.courcesPage}>
        <Container>
          <div className={Styles.courcesPage__rowflex}>
            <div className={Styles.courcesPage__rowflex__couresDetails}>
              <div className={Styles.courcesPage__rowflex__couresDetails__inner}>
                <h2>GENERAL STUDIES PAPER 3 - UPSC CIVIL SERVICES IAS EXAM 2021 QUESTION PAPER</h2>
                <img src={Image} alt="image" />

                <CommanHeading
                  heading="GENERAL STUDIES PAPER 3 - UPSC CIVIL SERVICES IAS EXAM 2021 QUESTION PAPER"
                />
                <Item para="1. Explain the difference between computing methodology of India’s Gross Domestic Product (GDP) before the year 2015 and after the year 2015. (Answer in 150 words)" />
                <Item para="2. Distinguish between Capital Budget and Revenue Budget. Explain the components of both these Budgets. (Answer in 150 words)" />
                <Item para="3. How did land reforms in some parts of the country help to improve the socio-economic conditions of marginal and small farmers? (Answer in 150 words)" />
                <Item para="4. How and to what extent would micro-irrigation help in solving India’s water crisis? (Answer in 150 words)" />
                <Item para="5. How is the S-400 air defence system technically superior to any other system presently available in the world? (Answer in 150 words)" />
                <Item para="6. Explain the purpose of the Green Grid Initiative launched at the World Leaders Summit of the COP26 UN Climate Change Conference in Glasgow in November 2021. When was this idea first floated in the International solar Alliance (ISA) (Answer in 150 words)" />
                <Item para="7. Describe the key points of the revised Global Air Quality Guidelines (AQGs) recently released by the World Health Organisation (WHO). How are these different from its last update in 2005? What changes in India’s National Clean Air Programme are required to achieve these revised standards? (Answer in 150 words)" />
                <Item para="8. Discuss about the vulnerability of India to earthquake related hazards. Give examples including the salient features of major disasters caused by earthquakes in different parts of India during the last three decades. (Answer in 150 words)" />
                <Item para="9. Discuss how emerging technologies and globalization contribute to money laundering. Elaborate measures to tackle the problem of money laundering both at national and international levels. (Answer in 150 words)" />
                <Item para="10. Keeping in view India’s Internal Security, analyze the impact of cross-border cyber attacks. Also discuss defensive measures against these sophisticated attacks (Answer in 150 words)" />
                <Item para="11. Do you agree that the Indian Economy has recently experienced a V-shaped recovery? Give reason in support of your answer. (Answer in 250 words)" />
                <Item para="12. Investment in Infrastructure is essential for more rapid and inclusive economic growth.” Discuss in the light of India’s experience. (Answer in 250 words)" />
                <Item para="13. What are the salient features of the national food security act, 2013? How has the food security bill helped in eliminating hunger and malnutrition in India? (Answer in 250 words)" />
                <Item para="14. What are the present challenges before crop diversification? How do emerging technologies provide an opportunity for crop diversification? (Answer in 250 words)" />
                <Item para="15. What are the research and developmental achievements in applied biotechnology? How will these achievements help to uplift the poorer sections of society? (Answer in 250 words)" />
                <Item para="16. The Nobel prize in Physics of 2014 was jointly awarded to Akasaki, Amano, and Nakamura for the invention of blue LEDs in 1990s. How has this invention impacted the everyday life of human beings? (Answer in 250 words)" />
                <Item para="17. Describe the major outcomes of the 26th session of the conference of the parties(COP) to the United Nations Framework Convention on Climate Change. What are the commitments made by India in this conference? (Answer in 250 words)" />
                <Item para="18. Describe the various causes and effects of landslides. Mention the important components of the National Landslide Risk Management Strategy. (Answer in 250 words)" />
                <Item para="19. Analyze the multidimensional challenges posed by the external state and non-state actors, to the internal security of India. Also discuss measures required to be taken to combat these threats. (Answer in 250 words)" />
                <Item para="20. Analyze the complexity and intensity of terrorism, its causes, linkages and obnoxious nexus. Also suggest measures required to be taken to eradicate the menace of terrorism. (Answer in 250 words)" />

                <h3>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;Download UPSC CIVIL SERVICES IAS EXAM 2021 GENERAL STUDIES PAPER 3</h3>
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

export default GSPaper_3;
