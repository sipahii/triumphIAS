import React from "react";
import FooterTitle from "../FooterTitle";
import Styles from "./index.module.scss";

const FooterInformation = () => {
  return (
    <div className={Styles.footerInformation}>
      <FooterTitle title="Information" />
      <div className={Styles.footerInformation__body}>
        <ul className={Styles.footerInformation__body__ul}>
          <li className={Styles.footerInformation__body__ul__li}>
            <i className="fa-solid fa-phone"></i>
            <p className={Styles.footerInformation__body__ul__li__num}>
              (01) 800 433 633
            </p>
          </li>
          <li className={Styles.footerInformation__body__ul__li}>
            <i className="fa-regular fa-envelope"></i>
            <p className={Styles.footerInformation__body__ul__li__email}>
              info@bostonea.com
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterInformation;
