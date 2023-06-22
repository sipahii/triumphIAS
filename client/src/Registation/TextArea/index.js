import React from "react";
import Styles from "./index.module.scss";

const TextArea = (props) => {
  return (
    <>
      <div className={Styles.textAreaSection}>
        <label htmlFor="additionalInfo" form={props.lable}>
          {props.labelText} <span>(Optional)</span>
        </label>
        <textarea id="additionalInfo" onChange={props.onChange} placeholder={props.textareaPlace}></textarea>
      </div>
    </>
  );
};
export default TextArea;
