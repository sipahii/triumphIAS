import React from "react";
import FooterTitle from "../FooterTitle";
import Styles from "./index.module.scss";

const FooterNewsletter = () => {
  return (
    <div className={Styles.footerNewsletter}>
      <FooterTitle title="Newsletter" />
      <div className={Styles.footerNewsletter__body}>
        <input
          type="text"
          className={Styles.footerNewsletter__body__emailInput}
          placeholder="Enter Your Email here"
        />
        <i className="fa-solid fa-paper-plane"></i>
      </div>
    </div>
  );
};

export default FooterNewsletter;
