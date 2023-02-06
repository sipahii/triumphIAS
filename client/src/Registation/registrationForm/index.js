import React from "react";
import Styles from "./index.module.scss";

const RegistationForm = (props) => {
  return (
    <>
      <div className={Styles.formSection}>
        <label htmlFor={props.id}>{props.labelText}</label>
        <input className={`${Styles.formSection__input} ${props.errClass}`} onChange={props.onChange} type={props.inputType} placeholder={props.placeholder} id={props.id} required></input>
        {props.errorMessage && <span>error</span>}
      </div>
    </>
  );
};
export default RegistationForm;
