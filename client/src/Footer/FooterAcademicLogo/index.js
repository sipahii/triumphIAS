import React from "react";
import Styles from "./index.module.scss";
import FooterLogo from "../../Assets/logo.png";
import FooterAcademicIcon from "./FooterAcademicIcon";

const FooterAcademicLogo = () => {
  return (
    <div className={Styles.footerAcademicLogo}>
      <div className={Styles.footerAcademicLogo__top}>
        <img src={FooterLogo} alt="triumphias logo" />
      </div>
      <div className={Styles.footerAcademicLogo__middle}>
        <p className={Styles.footerAcademicLogo__middle__para}>Praesent vel rutrum purus. Nam vel dui eu sus duis dignissim dignissim. Suspenetey disse at ros tecongueconsequat.Fusce sit amet rna feugiat.</p>
      </div>
      <div className={Styles.footerAcademicLogo__bottom}>
        <ul className={Styles.footerAcademicLogo__bottom__ul}>
          <FooterAcademicIcon className="fa-brands fa-facebook-f" />
          <FooterAcademicIcon className="fa-brands fa-twitter" />
          <FooterAcademicIcon className="fa-brands fa-linkedin-in" />
          <FooterAcademicIcon className="fa-brands fa-pinterest" />
          <FooterAcademicIcon className="fa-solid fa-rss" />
          <FooterAcademicIcon className="fa-brands fa-google-plus-g" />
        </ul>
      </div>
    </div>
  );
};

export default FooterAcademicLogo;
