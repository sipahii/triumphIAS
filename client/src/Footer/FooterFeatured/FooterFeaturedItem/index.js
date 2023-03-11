import React from "react";
import { Link } from "react-router-dom";
import Styles from "./index.module.scss";

const FooterFeaturedItem = (props) => {
  return (
    <li className={Styles.li}>
      <Link className={Styles.li__a} to={props.link}>
        <i className="fa-solid fa-chevron-right"></i>
        <p className={Styles.li__a__para}>{props.option}</p>
      </Link>
    </li>
  );
};

export default FooterFeaturedItem;
