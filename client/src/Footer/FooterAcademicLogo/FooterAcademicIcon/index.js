import React from "react";
import Styles from "./index.module.scss";

const FooterAcademicIcon = (props) => {
  return (
    <li className={Styles.li}>
      <a className={Styles.li__a} target="_blank" href={props.link} rel="noreferrer">
        <i className={props.className}></i>
      </a>
    </li>
  );
};

export default FooterAcademicIcon;
