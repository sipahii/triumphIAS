import React from "react";
import Container from "../../component/Container";
import CommonContact from "../../../src/component/CommonContact";
import Styles from "./index.module.scss";
const AboutArea = () => {
  return (
    <section className={Styles.aboutArea}>
      <Container>
        <div className={Styles.aboutArea__heading}>
          <h1>Welcome To Triumph IAS</h1>
          <p>We, at Triumph IAS, believe that each Individual Aspirant is unique and requires Individual Guidance and Care. We prepare students keeping in mind his or her strength and weakness.</p>
        </div>
        <div className={Styles.aboutArea__heading__servicewrapper}>
          <CommonContact icons="fa-solid fa-graduation-cap" about="Scholarship Facility" />

          <CommonContact icons="fa-solid fa-user" about="Skilled Lecturers" />
          <CommonContact icons="fa fa-book" aria-hidden="true" about="Book Library & Store" />
        </div>
      </Container>
    </section>
  );
};
export default AboutArea;
