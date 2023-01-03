import React from "react";
import styles from "./index.module.scss";

const Container = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.container__body}>{props.children}</div>
    </div>
  );
};

export default Container;
