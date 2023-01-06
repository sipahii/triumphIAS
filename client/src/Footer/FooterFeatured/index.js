import React from "react";
import FooterTitle from "../FooterTitle";
import FooterFeaturedItem from "./FooterFeaturedItem";
import Styles from "./index.module.scss";

const FooterFeatured = () => {
  return (
    <div className={Styles.footerFeatured}>
      <FooterTitle title="Featured Links" />
      <div className={Styles.footerFeatured__body}>
        <div className={Styles.footerFeatured__body__left}>
          <ul className={Styles.footerFeatured__body__left__ul}>
            <FooterFeaturedItem option="Graduation" />
            <FooterFeaturedItem option="Admissions" />
            <FooterFeaturedItem option="International" />
            <FooterFeaturedItem option="FAQs" />
          </ul>
        </div>
        <div className={Styles.footerFeatured__body__right}>
          <ul className={Styles.footerFeatured__body__right__ul}>
            <FooterFeaturedItem option="Courses" />
            <FooterFeaturedItem option="About Us" />
            <FooterFeaturedItem option="Book Store" />
            <FooterFeaturedItem option="Alumni" />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterFeatured;
