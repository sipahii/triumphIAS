import React, { useState } from "react";
import SaveBtn from "../../component/SaveBtn";
import useImage from "../../hooks/useImage";
import UploadBanner from "../BannerChange/UploadBanner";
import InputField from "../InputField";
import style from "./index.module.scss";

const GalleryChange = () => {
  const { imageShowHandler, show, image, title, desc, startDate, titleChangeHandler, descChangeHandler, startDateChangeHandler } = useImage();
  const [newData, setNewData] = useState([]);

  const submitHandler = () => {
    if (title.trim() === "" && desc.trim() === "") {
      return;
    }

    let newData = {
      title,
      desc,
      startDate,
      image: image,
    };
    setNewData((prevData) => [...prevData, newData]);
    console.log(newData);
  };

  let bannerPath = image;

  return (
    <div className={style.galleryChange}>
      <div className={style.galleryChange__imagePreview}>{show === true ? <img src={bannerPath} accept="image/webp" alt="banner" /> : <p className={style.galleryChange__imagePreview__para}>Insert Image To Preview</p>}</div>
      <div className={style.galleryChange__bottom}>
        <UploadBanner imageShowHandler={imageShowHandler} />
        <InputField type="text" onChange={titleChangeHandler} fieldType="Name" />
        <InputField type="text" onChange={descChangeHandler} fieldType="Occupation" />
        <InputField type="text" onChange={startDateChangeHandler} fieldType="Year" />
        <SaveBtn onClick={submitHandler} />
      </div>
    </div>
  );
};

export default GalleryChange;
