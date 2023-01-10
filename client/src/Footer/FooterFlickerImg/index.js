import React from "react";
import FooterTitle from "../FooterTitle";
import Styles from "./index.module.scss";
import Flicker1 from "../../Assets/flick1.jpg";
import Flicker2 from "../../Assets/flick2.jpg";
import Flicker3 from "../../Assets/flick3.jpg";
import Flicker4 from "../../Assets/flick4.jpg";
import Flicker5 from "../../Assets/flick5.jpg";
import Flicker6 from "../../Assets/flick6.jpg";
import FlickerImgItem from "./FlickerImgItem";

const FooterFlickerImg = () => {
  return (
    <div className={Styles.footerFlickerImg}>
      <FooterTitle title="Flickr Photos" />
      <div className={Styles.footerFlickerImg__body}>
        <FlickerImgItem src={Flicker1} />
        <FlickerImgItem src={Flicker2} />
        <FlickerImgItem src={Flicker3} />
        <FlickerImgItem src={Flicker4} />
        <FlickerImgItem src={Flicker5} />
        <FlickerImgItem src={Flicker6} />
      </div>
    </div>
  );
};

export default FooterFlickerImg;
