import React from "react";
import Styles from "../EssayTopics/index.module.scss"
import Image from "../Assets/graphic.jpg";
import CommanBanner from "../component/CommanBanner";
import Container from "../component/Container";
import CommanHeading from "../component/CommanHeading";
import Item from "../component/Item";
import CourseCrousel from "../CourceDetails/CourseCrousel";


const GSPaper_2 = () => {
  return (
    <>
      <CommanBanner section="GENERAL STUDIES PAPER 2 - UPSC CIVIL SERVICES IAS EXAM 2021 QUESTION PAPER" />
      <div className={Styles.courcesPage}>
        <Container>
          <div className={Styles.courcesPage__rowflex}>
            <div className={Styles.courcesPage__rowflex__couresDetails}>
              <div className={Styles.courcesPage__rowflex__couresDetails__inner}>
                <h2>GENERAL STUDIES PAPER 2 - UPSC CIVIL SERVICES IAS EXAM 2021 QUESTION PAPER</h2>
                <img src={Image} alt="image" />

                <CommanHeading
                  heading="GENERAL STUDIES PAPER 2 - UPSC CIVIL SERVICES IAS EXAM 2021 QUESTION PAPER"
                />
                <Item para="1. Constitutional Morality’ is rooted in the Constitution itself and is founded on its essential facets. Explain the doctrine of ‘Constitutional Morality’ with the help of relevant judicial decisions. (Answer in  150 words) 10" />
                <Item para="2. Discuss the desirability of greater representation to women in the higher judiciary to ensure diversity, equity and inclusiveness. (Answer in  150 words) 10" />
                <Item para="3. How have the recommendations of the 14th Finance Commission of India enabled the states to improve their fiscal position?(Answer in  150 words) 10" />
                <Item para="4. To what extent, in your view, the Parliament is able to ensure accountability of the executive in India? (Answer in  150 words) 10" />
                <Item para="5. Pressure groups play a vital role in influencing public policy making in India.” Explain how the business associations contribute to public policies. (Answer in  150 words) 10" />
                <Item para="6. Besides being a moral imperative of Welfare State, primary health structure is a necessary pre-condition for sustainable development.” Analyze. (Answer in  150 words) 10" />
                <Item para="7. Earn while you learn’ scheme needs to be strengthened to make vocational education and skill training meaningful.” Comment. (Answer in  150 words) 10" />
                <Item para="8. Can the vicious cycle of gender inequality, poverty and malnutrition be broken through microfinancing of women SHGs? Explain with examples. (Answer in  150 words) 10" />
                <Item para="9. If the last few decades were of Asia’s growth story, the next few are expected to be of Africa’s.” In the light of this statement, examine India’s influence in Africa in recent years. (Answer in  150 words) 10" />
                <Item para="10. The USA is facing an existential threat in the form of a China, that is much more challenging than the erstwhile Soviet Union.” Explain. (Answer in  150 words) 10" />
                <Item para="11. The jurisdiction of the Central Bureau of Investigation(CBI) regarding lodging an FIR and conducting probe within a particular state is being questioned by various States. However, the power of States to withhold consent to the CBI is not absolute. Explain with special reference to the federal character of India. (Answer in  250 words) 15" />
                <Item para="12. Though the Human Rights Commissions have contributed immensely to the protection of human rights in India, yet they have failed to assert themselves against the mighty and powerful. Analyzing their structural and practical limitations, suggest remedial measures. (Answer in  250 words) 15" />
                <Item para="13. Analyze the distinguishing features of the notion of Equality in the Constitutions of the USA and India. (Answer in  250 words) 15" />
                <Item para="14. Explain the constitutional provisions under which Legislative Councils are established. Review the working and current status of Legislative Councils with suitable illustrations. (Answer in  250 words) 15" />
                <Item para="15. Do Department -related Parliamentary Standing Committees keep the administration on its toes and inspire reverence for parliamentary control? Evaluate the working of such committees with suitable examples. (Answer in  250 words) 15" />
                <Item para="16. Has digital illiteracy, particularly in rural areas, couple with lack of Information and Communication Technology(ICT) accessibility hindered socio-economic development? Examine with justification. (Answer in  250 words) 15" />
                <Item para="17. Though women in post-Independent India have excelled in various fields, the social attitude towards women and feminist movement has been patriarchal.” Apart from women education and women empowerment schemes, what interventions can help change this milieu? (Answer in  250 words) 15" />
                <Item para="18. Can Civil Society and Non-Governmental Organizations present an alternative model of public service delivery to benefit the common citizen. Discuss the challenges of this alternative model. (Answer in  250 words) 15" />
                <Item para="19. Critically examine the aims and objectives of SCO. what importance does it hold for India. (Answer in  250 words) 15" />
                <Item para="20. The newly tri-nation partnership AUKUS is aimed at countering China’s ambitions in the Indo-Pacific region. Is it going to supersede the existing partnerships in the region? Discuss the strenght and impact of AUKUS in the present scenario. (Answer in  250 words) 15" />

                <h3>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;Download UPSC CIVIL SERVICES IAS EXAM 2021 GENERAL STUDIES PAPER 2</h3>

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

export default GSPaper_2;
