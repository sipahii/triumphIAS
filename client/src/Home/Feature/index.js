import React from "react";
import Styles from "./index.module.scss";
import Item from "./FeatureItem";
import BigFeatureCard from "./BigFeatureCard";
import Container from "../../src/component/Container";
const Feature = () => {
  return (
    <div className={Styles.featureSection}>
      <Container>
        <div className={Styles.featureSection__hedding}>
          <h3>Featured Courses</h3>
        </div>
        <div className={Styles.featureSection__featureArea}>
          <div className={Styles.featureSection__featureArea__subjectArea}>
            <div
              className={
                Styles.featureSection__featureArea__subjectArea__bigFeatureCard
              }
            >
              <BigFeatureCard />
            </div>
            <div
              className={
                Styles.featureSection__featureArea__subjectArea__mainSubject
              }
            >
              <Item
                imageSrc="subj1.jpg"
                hedding="GMET"
                para="Rmply dummy printing ypesetting industry it’s free"
              />
              <Item
                imageSrc="subj2.jpg"
                hedding="Regular MBA"
                para="Rmply dummy printing ypesetting industry it’s free"
              />
              <Item
                imageSrc="subj3.jpg"
                hedding="CSE Science"
                para="Rmply dummy printing ypesetting industry it’s free"
              />
              <Item
                imageSrc="subj4.jpg"
                hedding="Graphic Design"
                para="Rmply dummy printing ypesetting industry it’s free"
              />
            </div>
          </div>
          <div className={Styles.featureSection__featureArea__buttonArea}>
            <button>VIEW ALL CORSES</button>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Feature;
