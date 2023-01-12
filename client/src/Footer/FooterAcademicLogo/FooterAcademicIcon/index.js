import React from "react";
import Styles from "./index.module.scss";

const FooterAcademicIcon = (props) => {
  return (
    <li className={Styles.li}>
      <i className={props.className}></i>
    </li>
  );
};

export default FooterAcademicIcon;
