import React from "react";
import Styles from "./index.module.scss";

const FooterTitle = (props) => {
  return (
    <div className={Styles.footerTitle}>
      <h2 className={Styles.footerTitle__title}>{props.title}</h2>
    </div>
  );
};

export default FooterTitle;
