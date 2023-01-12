import React from "react";
import Styles from "./index.module.scss";

const FlickerImgItem = (props) => {
  return (
    <div className={Styles.img}>
      <img src={props.src} alt="" />
    </div>
  );
};

export default FlickerImgItem;
