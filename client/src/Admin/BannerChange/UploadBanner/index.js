import React from "react";
import style from "./index.module.scss";

const UploadBanner = (props) => {
  const bannerUploadHandler = (event) => {
    let banner = URL.createObjectURL(event.target.files[0]);
    props.bannerShowHandler(banner);
  };
  return (
    <>
      <div className={style.uploadBanner}>
        <input onChange={bannerUploadHandler} type="file" />
      </div>
    </>
  );
};

export default UploadBanner;
