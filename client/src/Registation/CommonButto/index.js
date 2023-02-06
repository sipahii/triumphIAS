import React from "react";
import Styles from "./index.module.scss";

const CommonButton = (props) => {
  return (
    <div className={Styles.buttonArea}>
      <button disabled={props.disabled} type="submit" onClick={props.onClick}>
        {props.buttonText}
      </button>
    </div>
  );
};
export default CommonButton;
