import React from "react";
import CommanBanner from "../component/CommanBanner";
import Container from "../component/Container";
import CourseCrousel from "../CourceDetails/CourseCrousel";
import Styles from "./index.module.scss"
import Image from "../Assets/graphic.jpg";
const Career = () => {
  return (
    <>
      <CommanBanner section="Career" />
      <div className={Styles.courcesPage}>
        <Container>
          <div className={Styles.courcesPage__rowflex}>
            <div className={Styles.courcesPage__rowflex__couresDetails}>
              <div className={Styles.courcesPage__rowflex__couresDetails__inner}>
                <h2>Career</h2>

                <img src={Image} alt="image" />
                <p><strong>At TriumphIAS </strong> we help students realize their potential and achieve their dreams.</p>
                <p>If you feel you have what it takes to help Civil Services Aspirants realize their dream and develop matchless administrative traits, then join our team.</p>
                <p>We always have an opportunity for the people who take initiative and roll up their sleeves to get their job done successfully. We welcome people from diverse backgrounds and skill sets.</p>
                <h4>Drop in your resume @ <span> career@triumphias.com </span> Or contact us @ <b> +91-7840888102</b></h4>



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

export default Career;
