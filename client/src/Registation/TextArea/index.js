import React from "react";
import Styles from "./index.module.scss";

const TextArea = (props) => {
  return (
    <>
      <div className={Styles.textAreaSection}>
        <label form={props.lable}>
          {props.labelText} <span>*</span>
        </label>
        <textarea placeholder={props.textareaPlace}></textarea>
      </div>
    </>
  );
};
export default TextArea;
