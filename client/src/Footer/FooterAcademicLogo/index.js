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
        <p className={Styles.footerAcademicLogo__middle__para}>We, at Triumph IAS, believe that each Individual Aspirant is unique and requires Individual Guidance and Care.</p>
      </div>
      <div className={Styles.footerAcademicLogo__bottom}>
        <ul className={Styles.footerAcademicLogo__bottom__ul}>
          <FooterAcademicIcon link="https://www.facebook.com/triumphias.vrc/" className="fa-brands fa-facebook-f" />

          <FooterAcademicIcon link="https://instagram.com/triumphias?igshid=YmMyMTA2M2Y=" className="fa-brands fa-instagram" />

          <FooterAcademicIcon link="https://www.linkedin.com/company/triumph-education-and-publishing/mycompany/" className="fa-brands fa-linkedin-in" />

          <FooterAcademicIcon link="https://www.youtube.com/channel/UCsv76U-4y0dAIiHT92oYUgA?view_as=subscriber" className="fa-brands fa-youtube" />
        </ul>
      </div>
    </div>
  );
};

export default FooterAcademicLogo;
