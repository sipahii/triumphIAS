import React from "react";
import styles from "./index.module.scss";

const CommanBanner = (props) => {
  return (
    <React.Fragment>
      <div className={styles.banner}>
        <div className={styles.banner__container}>
          <div className={styles.banner__container__body}>
            <div className={styles.banner__container__body__title}>
              <h1 className={styles.banner__container__body__title__h1}>
                {props.section}
              </h1>
            </div>
            <div className={styles.banner__container__body__path}>
              <p className={styles.banner__container__body__path__start}>
                Home
              </p>
              <p className={styles.banner__container__body__path__mid}>-</p>
              <p className={styles.banner__container__body__path__end}>
                {props.section}
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CommanBanner;
