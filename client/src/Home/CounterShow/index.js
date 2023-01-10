import React from "react";
import Container from "../../component/Container";
import CounterComponent from "../../Home/CounterShow/CounterComponent";
import Styles from "./index.module.scss";

const CounterShow = () => {
  return (
    <div className={Styles.counterShow}>
      <Container>
        <div className={Styles.counterShow__container}>
          <div className={Styles.counterShow__container__left}>
            <CounterComponent counter="80" counterType="PROFESSIONAL TEACHER" />
            <CounterComponent
              counter="20"
              counterType="NEWS COURSES EVERY YEARS"
            />
          </div>
          <div className={Styles.counterShow__container__right}>
            <CounterComponent
              counter="56"
              counterType="NEWS COURSES EVERY YEARS"
            />
            <CounterComponent counter="77" counterType="REGISTERED STUDENTS" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CounterShow;
