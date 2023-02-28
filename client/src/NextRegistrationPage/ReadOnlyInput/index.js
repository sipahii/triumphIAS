import React from "react";
import Styles from "./index.module.scss";
const ReadableInput = (props) => {
  return (
    <div className={Styles.inputArea}>
      <label>{props.lable}</label>
      <input type="text" value={props.value} readOnly></input>
    </div>
  );
};
export default ReadableInput;
