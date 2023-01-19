import React from "react";
import FooterAcademicLogo from "./FooterAcademicLogo";
import FooterBottom from "./FooterBottom";
import FooterFeatured from "./FooterFeatured";
import FooterFlickerImg from "./FooterFlickerImg";
import FooterInformation from "./FooterInformation";
import FooterNewsletter from "./FooterNewsletter";
import Styles from "./index.module.scss";
import Map from "./Map";

const Footer = () => {
  return (
    <>
      <Map />
      <div className={Styles.footer}>
        <div className={Styles.footer__container}>
          <div className={Styles.footer__container__body}>
            <div className={Styles.footer__container__body__child}>
              <FooterAcademicLogo />
            </div>
            <div className={Styles.footer__container__body__child}>
              <FooterFeatured />
            </div>
            <div className={Styles.footer__container__body__child}>
              <FooterInformation />
              <FooterNewsletter />
            </div>
            <div className={Styles.footer__container__body__child}>
              <FooterFlickerImg />
            </div>
          </div>
        </div>
      </div>
      <FooterBottom />
    </>
  );
};

export default Footer;
