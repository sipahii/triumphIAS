import React, { useState } from "react";
import style from "./index.module.scss";

const UploadBanner = (props) => {
  const [showError, setShowError] = useState(false);
  const bannerUploadHandler = (event) => {
    if (event.target.files[0].size >= 100000) {
      setShowError(true);
      return;
    }
    setShowError(false);
    let banner = URL.createObjectURL(event.target.files[0]);
    props.bannerShowHandler(banner);
  };
  return (
    <>
      <div className={style.uploadBanner}>
        <input onChange={bannerUploadHandler} type="file" />
        {showError && <p>Please Upload Image Less Than Equal To 100KB.</p>}
      </div>
    </>
  );
};

export default UploadBanner;
