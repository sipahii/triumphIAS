import React from "react";
import EventComponent from "../NewsEventSection/EventComponent";
import NewsComponent from "../NewsEventSection/NewsComponent";
import ViewBtn from "../../component/ViewBtn";
import Styles from "./index.module.scss";
import n1 from "../../Assets/n1.webp";
import n2 from "../../Assets/n2.webp";
import n3 from "../../Assets/n3.webp";
import Container from "../../component/Container";

const NewsEventSection = () => {
  return (
    <div className={Styles.newsEventSection}>
      <Container>
        <div className={Styles.newsEventSection__container}>
          <div className={Styles.newsEventSection__container__left}>
            <h2>latest news</h2>
            <div className={Styles.newsEventSection__container__left__child}>

              <div className={Styles.newsEventSection__container__left__child__component}>
                <NewsComponent src={n1} newsHeading="Easy English Learning Way" />
              </div>
              <div className={Styles.newsEventSection__container__left__child__component}>
                <NewsComponent src={n2} newsHeading="Guest Interview will Occur Soon" />

              <div
                className={
                  Styles.newsEventSection__container__left__child__component
                }
              >
                <NewsComponent
                  src={n1}
                  newsHeading="Easy English Learning Way"
                />
              </div>
              <div
                className={
                  Styles.newsEventSection__container__left__child__component
                }
              >
                <NewsComponent
                  src={n2}
                  newsHeading="Guest Interview will Occur Soon"
                />

              </div>
              <NewsComponent src={n3} newsHeading="Easy English Learning Way" />
            </div>
            <ViewBtn />
          </div>
          <div className={Styles.newsEventSection__container__right}>
            <h2>upcoming events</h2>
            <div className={Styles.newsEventSection__container__right__child}>
              <div data-aos="fade-up" data-aos-duration="1000">
                <EventComponent heading="Html MeetUp Conference 2017" />
              </div>
              <div data-aos="fade-up" data-aos-duration="1000">
                <EventComponent heading="Workshop On UI Design" />
              </div>
            </div>
            <ViewBtn />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NewsEventSection;
