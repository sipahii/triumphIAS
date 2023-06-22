import React from "react";
import Styles from "./index.module.scss";

const RadioButton = (props) => {
  return (
    <div className={Styles.radiobuttonArea}>
      <label htmlFor="">
        Gender <span>*</span>
      </label>
      <div className={`${Styles.radiobuttonArea__inputField}`}>
        <input onChange={props.onChange} value="Male" type="radio" name="Gender" id={props.id} required></input>
        <span>Male</span>
        <input onChange={props.onChange} value="Female" type="radio" name="Gender" id={props.id} required></input>
        <span>Female</span>
        <input onChange={props.onChange} value="Other" type="radio" name="Gender" id={props.id} required></input>
        <span>Other</span>
      </div>
      {props.genderErr && <p className={Styles.radiobuttonArea__err}>Please Select Gender!</p>}
    </div>
  );
};
export default RadioButton;
