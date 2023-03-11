import React from "react";
import Styles from "./index.module.scss";

const CommonArtical = (props) => {
  return (
    <div className={Styles.artical}>
      <a href={props.link}>
        <img src={props.src} alt="article" />
      </a>
      <h4>CLICK TO DOWNLOAD</h4>
    </div>
  );
};

export default CommonArtical;
