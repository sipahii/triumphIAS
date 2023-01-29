import React from "react";
import Styles from "../EssayTopics/index.module.scss"
import Image from "../Assets/graphic.jpg";
import CommanBanner from "../component/CommanBanner";
import Container from "../component/Container";
import CommanHeading from "../component/CommanHeading";
import Item from "../component/Item";
import CourseCrousel from "../CourceDetails/CourseCrousel";

const GSPaper_1 = () => {
  return (
    <>
      <CommanBanner section="GENERAL STUDIES PAPER 1 - UPSC CIVIL SERVICES IAS EXAM 2021 QUESTION PAPER" />
      <div className={Styles.courcesPage}>
        <Container>
          <div className={Styles.courcesPage__rowflex}>
            <div className={Styles.courcesPage__rowflex__couresDetails}>
              <div className={Styles.courcesPage__rowflex__couresDetails__inner}>
                <h2>GENERAL STUDIES PAPER 1 - UPSC CIVIL SERVICES IAS EXAM 2021 QUESTION PAPER</h2>
                <img src={Image} alt="image" />

                <CommanHeading
                  heading="GENERAL STUDIES PAPER 1 - UPSC CIVIL SERVICES IAS EXAM 2021 QUESTION PAPER"
                />
                <Item para="1. Evaluate the nature of the Bhakti Literature and its contribution to  Indian culture. (Answer in 150 words) 10" />
                <Item para="2. Trace the rise and growth of socio-religious reform movements with special reference to Young Bengal and Brahmo Samaj. (Answer in 150 words) 10" />
                <Item para="3. Assess the main administrative issues and socio-cultural problems in the integration process of Indian Princely States. (Answer in 150 words) 10" />
                <Item para="4. Differentiate the causes of landslides in the Himalayan region and Western Ghats. (Answer in 150 words) 10" />
                <Item para="5. Despite India being one of the countries of the Gondwanaland, its mining industry contributes much less to its Gross Domestic Product(GDP) in percentage. Discuss.(Answer in 150 words) 10" />
                <Item para="6. what are the environmental implications of the reclamation of the water bodies into urban land use? Explain with examples. (Answer in 150 words) 10" />
                <Item para="7. Mention the global occurrence of volcanic eruptions in 2021 and their impact on regional environment. (Answer in 150 words) 10" />
                <Item para="8. Why is India considered as a sub-continent? Elaborate your answer. (Answer in 150 words) 10" />
                <Item para="9. Examine the uniqueness of tribal knowledge system when compared with mainstream knowledge and cultural systems. (Answer in 150 words) 10" />
                <Item para="10. Examine the role of ‘Gig Economy’ in the process of empowerment of women in India. (Answer in 150 words) 10" />
                <Item para="11. To what extent did the role of the moderates prepare a base for the wider freedom movement? Comment. (Answer in 250 words) 15" />
                <Item para="12. Bring out the constructive programmes of Mahatma Gandhi during Non-Cooperation Movement and Civil Disobedience Movement. (Answer in 250 words) 15" />
                <Item para="13. ” There arose a serious challenge to the Democratic State System between the two World Wars.” Evaluate the statement. (Answer in 250 words) 15" />
                <Item para="14. Briefly mention the alignment of major mountain ranges of the world and explain their impact on local weather conditions, with examples. (Answer in 250 words) 15" />
                <Item para="15. How do the melting of the Arctic ice and glaciers of the Antarctic differently affect the weather patterns and human activities on the Earth? Explain. (Answer in 250 words) 15" />
                <Item para="16. Discuss the multi-dimensional implications of uneven distribution of mineral oil in the world. (Answer in 250 words) 15" />
                <Item para="17. What are the main socio-economic implications arising out of the development of IT industries in major cities of India? (Answer in 250 words) 15" />
                <Item para="18. Discuss the main objectives of Population Education and point out the measures to achieve them in India in detail. (Answer in 250 words) 15" />
                <Item para="19. What is Cryptocurrency? How does it affect global society? Has it been affecting Indian society also?(Answer in 250 words) 15" />
                <Item para="20. How does Indian society maintain continuity in traditional social values? Enumerate the changes taking place in it.(Answer in 250 words) 15" />

                <h3>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;Download UPSC CIVIL SERVICES IAS EXAM 2021 GENERAL STUDIES PAPER 1</h3>
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

export default GSPaper_1;
