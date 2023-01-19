import React from "react";
import style from "./index.module.scss";

const SaveBtn = (props) => {
  return (
    <div className={style.button}>
      <button onClick={props.onClick} className={style.button__save}>
        Save
      </button>
    </div>
  );
};

export default SaveBtn;
