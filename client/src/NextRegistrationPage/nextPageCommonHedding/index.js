import React from "react";
import Styles from "./index.module.scss";
const NextPageCommonHedding = (props) => {
  return (
    <div className={Styles.contantArea}>
      <h3>{props.hedding}</h3>
    </div>
  );
};
export default NextPageCommonHedding;
