import React, { useState } from "react";
import SaveBtn from "../../component/SaveBtn";
import Content from "./Content";
import style from "./index.module.scss";
import UploadBanner from "./UploadBanner";

const BannerChange = () => {
  const [show, setShow] = useState(false);
  const [banner, setBanner] = useState("");

  const bannerShowHandler = (image) => {
    setShow(true);
    setBanner(image);
  };

  let bannerPath = banner;

  return (
    <div className={style.bannerChange}>
      <div className={style.bannerChange__bannerPreview}>
        {show === true ? <img src={bannerPath} accept="image/*" alt="banner" /> : <p className={style.bannerChange__bannerPreview__para}>Insert Image To Preview</p>}
      </div>
      <UploadBanner bannerShowHandler={bannerShowHandler} />
      <Content />
      <SaveBtn />
    </div>
  );
};

export default BannerChange;
