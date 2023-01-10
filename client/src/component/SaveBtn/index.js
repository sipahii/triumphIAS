import React from "react";
import style from "./index.module.scss";

const SaveBtn = () => {
  return (
    <div className={style.button}>
      <button className={style.button__save}>Save</button>
    </div>
  );
};

export default SaveBtn;
