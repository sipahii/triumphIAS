import React from "react";
import Styles from "./index.module.scss";

const CounterComponent = (props) => {
  return (
    <div className={Styles.counterComponent}>
      <div className={Styles.counterComponent__left}>
        <h2 className={Styles.counterComponent__left__h2}>{props.counter}</h2>
      </div>
      <div className={Styles.counterComponent__right}>
        <p className={Styles.counterComponent__right__para}>
          {props.counterType}
        </p>
      </div>
    </div>
  );
};

export default CounterComponent;
