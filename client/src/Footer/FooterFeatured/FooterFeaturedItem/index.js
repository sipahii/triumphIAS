import React from "react";
import Styles from "./index.module.scss";

const FooterFeaturedItem = (props) => {
  return (
    <li className={Styles.li}>
      <i className="fa-solid fa-chevron-right"></i>
      <p className={Styles.li__para}>{props.option}</p>
    </li>
  );
};

export default FooterFeaturedItem;
