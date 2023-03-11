import React from "react";
import CounterComponent from "../../Home/CounterShow/CounterComponent";
import Styles from "./index.module.scss";

const CounterShow = () => {
  return (
    <div className={Styles.counterShow}>
      <div className={Styles.wrapper}>
        <div className={Styles.counterShow__container}>
          <div className={Styles.counterShow__container__left}>
            <CounterComponent counter="04" counterType="PROFESSIONAL TEACHER" />
            <CounterComponent counter="06" counterType="NEWS COURSES EVERY YEARS" />
          </div>
          <div className={Styles.counterShow__container__right}>
            <CounterComponent counter="10K+" counterType="REGISTERED STUDENTS" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterShow;
