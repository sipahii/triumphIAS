import React from "react";
import CommanBanner from "../component/CommanBanner";
import CommanHeading from "../component/CommanHeading";
import Container from "../component/Container";
import Item from "../component/Item";
import CourseCrousel from "../CourceDetails/CourseCrousel";
import Styles from "./index.module.scss";
import Image from "../Assets/graphic.jpg";

const EssayTopics = () => {
  return (
    <>
      <CommanBanner section="UPSC CSE 2021 ESSAY TOPICS" />
      <div className={Styles.courcesPage}>
        <Container>
          <div className={Styles.courcesPage__rowflex}>
            <div className={Styles.courcesPage__rowflex__couresDetails}>
              <div className={Styles.courcesPage__rowflex__couresDetails__inner}>
                <h2>UPSC CSE 2021 ESSAY TOPICS</h2>
                <img src={Image} alt="banner" />

                <CommanHeading heading="SECTION A" />
                <Item para="1. The Process of self-discovery has now been technologically outsourced." />
                <Item para="2. Your perception of me is a reflection of you; my reaction to you is an awareness of me." />
                <Item para="3. Philosophy of wantlessness is Utopian, while materialism is a chimera." />
                <Item para="4. The real is rational and the rational is real." />

                <CommanHeading heading="SECTION B" />
                <Item para="1. Hand that rocks the cradle rules the world" />
                <Item para="2. What is research, but a blind date with knowledge" />
                <Item para="3. History repeats itself, first as a tragedy, second as a farce." />
                <Item para="4. There are better practices to “best practices”." />
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

export default EssayTopics;
