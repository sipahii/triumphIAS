import React from "react";
import Styles from "./index.module.scss";
import payment1 from "../../Assets/payment1.jpg";
import payment2 from "../../Assets/payment2.jpg";
import payment3 from "../../Assets/payment3.jpg";
import payment4 from "../../Assets/payment4.jpg";

const FooterBottom = () => {
  const time = new Date();
  const year = time.getFullYear();
  return (
    <div className={Styles.footerBottom}>
      <div className={Styles.footerBottom__body}>
        <div className={Styles.footerBottom__body__left}>
          <p>
            © {year} Academics All Rights Reserved. Designed By <span>CodingBoat</span>
          </p>
        </div>
        <div className={Styles.footerBottom__body__right}>
          <img src={payment1} alt="pay1" />
          <img src={payment2} alt="pay2" />
          <img src={payment3} alt="pay3" />
          <img src={payment4} alt="pay4" />
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
