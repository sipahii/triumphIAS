import React from "react";
import Styles from "./index.module.scss";

const RegistrationHeading = (props) => {
  return (
    <div className={Styles.mainHedding}>
      <h1>{props.hedding}</h1>
    </div>
  );
};
export default RegistrationHeading;
