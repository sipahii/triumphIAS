import React from "react";
import Styles from "./index.module.scss";

const RegistrationTittle = (props) => {
  return (
    <>
      <div className={Styles.formTittle}>
        <h2>{props.titlleHead}</h2>
      </div>
    </>
  );
};
export default RegistrationTittle;
