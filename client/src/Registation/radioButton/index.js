import React from "react";
import Styles from "./index.module.scss";

const RadioButton = (props) => {
  return (
    <div className={Styles.radiobuttonArea}>
      <label htmlFor="">Gender*</label>
      <div className={Styles.radiobuttonArea__inputField}>
        <input type="radio" name="Gender" id={props.id} required></input>
        <span>Male</span>
        <input type="radio" name="Gender" id={props.id} required></input>
        <span>Female</span>
        <input type="radio" name="Gender" id={props.id} required></input>
        <span>Other</span>
      </div>
    </div>
  );
};
export default RadioButton;
