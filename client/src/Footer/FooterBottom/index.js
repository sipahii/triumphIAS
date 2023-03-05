import React from "react";
import Styles from "./index.module.scss";

const FooterBottom = () => {
  const time = new Date();
  const year = time.getFullYear();
  return (
    <div className={Styles.footerBottom}>
      <div className={Styles.footerBottom__body}>
        <p>
          © {year} Academics All Rights Reserved. Designed By <span>CodingBoat</span>
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;
