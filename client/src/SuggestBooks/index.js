import React from "react";
import CommanBanner from "../component/CommanBanner";
import CommanHeading from "../component/CommanHeading";
import Container from "../component/Container";
import Item from "../component/Item";
import CourseCrousel from "../CourceDetails/CourseCrousel";
import Styles from "./index.module.scss";
import Image from "../Assets/graphic.jpg";

const SuggestBooks = () => {
  const para = (
    <p>
      7. Indian Social System<strong>-Ram Ahuja.</strong>
    </p>
  );
  const para1 = (
    <p>
      8. Makers of Indian Constitution <strong>– Ram Chander Guha</strong>
    </p>
  );
  const para2 = (
    <p>
      9. Modernization of Indian Tradition <strong>– Yogendra Singh.</strong>
    </p>
  );
  const para3 = (
    <p>
      10. Social Structure & Change in India <strong>– M.N. Sriniwas.</strong>
    </p>
  );
  return (
    <>
      <CommanBanner section="IGNOU BOOKS" />
      <div className={Styles.courcesPage}>
        <Container>
          <div className={Styles.courcesPage__rowflex}>
            <div className={Styles.courcesPage__rowflex__couresDetails}>
              <div className={Styles.courcesPage__rowflex__couresDetails__inner}>
                <h2>REFERENCE BOOKS FOR SOCIOLOGY OPTIONAL</h2>
                <img src={Image} alt="banner" />

                <CommanHeading heading="Books For Paper-1" />
                <Item para="1. New NCERT BOOKS (Class 11 & 12)" />
                <Item para="2. Sociology Books by Vikash Ranjan." />
                <Item para="3. Sociology – Anthony Giddens" />
                <Item para="4. Select booklet of IGNOU Sociology." />
                <Item para="5. Sociology (Harlambos)" />
                <Item para="6. Suggested books for Paper 2 IAS Sociology Optional" />
                <Item para={para} />
                <Item para={para1} />
                <Item para={para2} />
                <Item para={para3} />
                <Item para="11. Select booklet of IGNOU Sociology." />
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

export default SuggestBooks;
