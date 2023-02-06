import React, { useState } from "react";
import SaveBtn from "../../component/SaveBtn";
import useImage from "../../hooks/useImage";
import UploadBanner from "../BannerChange/UploadBanner";
import InputField from "../InputField";
import style from "./index.module.scss";

const CourseChange = () => {
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
    <div className={style.courseChange}>
      <div className={style.courseChange__coursePreview}>{show === true ? <img src={bannerPath} accept="image/webp" alt="banner" /> : <p className={style.courseChange__coursePreview__para}>Insert Image To Preview</p>}</div>
      <div className={style.courseChange__bottom}>
        <UploadBanner imageShowHandler={imageShowHandler} />
        <InputField type="text" onChange={titleChangeHandler} fieldType="Title" />
        <InputField type="text" onChange={descChangeHandler} fieldType="Description" />
        <InputField type="date" onChange={startDateChangeHandler} fieldType="Start Date" />
        <SaveBtn onClick={submitHandler} />
      </div>
    </div>
  );
};

export default CourseChange;
