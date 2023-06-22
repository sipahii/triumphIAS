import React from "react";
import styles from "./index.module.scss";

const UploadField = (props) => {
  return (
    <div className={styles.formSection}>
      <label htmlFor={props.id}>
        {props.labelText} <span>*</span>
      </label>
      <input type="file" className={`${styles.formSection__input} ${props.errClass}`} onChange={props.onChange} id={props.id} required />
    </div>
  );
};

export default UploadField;
