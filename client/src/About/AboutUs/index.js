import React from "react";
import Container from "../../component/Container";
import styles from "./index.module.scss";

const AboutUs = (props) => {
  return (
    <Container>
      <div className={styles.aboutUs}>
        <div className={styles.aboutUs__details}>
          <h2 className={styles.aboutUs__details__title}>{props.title}</h2>
          <h4 className={styles.aboutUs__details__subTitle}>
            {props.subTitle}
          </h4>
          <p className={styles.aboutUs__details__desc}>{props.desc}</p>
        </div>
        <div className={styles.aboutUs__logo}>
          <img src={props.src} alt="logo" />
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;
