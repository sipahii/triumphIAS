import React from "react";
import style from "./index.module.scss";

const Arrow = (props) => {
  return (
    <div className={style.arrow}>
      <i className={props.className}></i>
    </div>
  );
};

export default Arrow;
