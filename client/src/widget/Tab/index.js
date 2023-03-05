import React from "react";
import style from "./index.module.scss";

const Tab = (props) => {
  return (
    <button className={`${style.tab} ${props.class}`} onClick={() => props.onClick(props.price, props.onlineOffline)}>
      {props.btnName}
    </button>
  );
};

export default Tab;
