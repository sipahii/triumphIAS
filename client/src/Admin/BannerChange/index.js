import React, { useState } from "react";
import style from "./index.module.scss";
import InputField from "../InputField";
import UploadBanner from "./UploadBanner";
import SaveBtn from "../../component/SaveBtn";
import useImage from "../../hooks/useImage";

const BannerChange = () => {
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
    <div className={style.bannerChange}>
      <div className={style.bannerChange__bannerPreview}>{show === true ? <img src={bannerPath} accept="image/webp" alt="banner" /> : <p className={style.bannerChange__bannerPreview__para}>Insert Image To Preview</p>}</div>
      <UploadBanner imageShowHandler={imageShowHandler} />
      <InputField type="text" onChange={titleChangeHandler} fieldType="Title" />
      <InputField type="text" onChange={descChangeHandler} fieldType="Description" />
      <InputField type="date" onChange={startDateChangeHandler} fieldType="Start Date" />
      <SaveBtn onClick={submitHandler} />
    </div>
  );
};

export default BannerChange;
