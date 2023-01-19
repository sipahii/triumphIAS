import React, { useState } from "react";
import style from "./index.module.scss";
import InputField from "../InputField";
import UploadBanner from "./UploadBanner";
import SaveBtn from "../../component/SaveBtn";

const BannerChange = () => {
  const [newData, setNewData] = useState([]);
  const [show, setShow] = useState(false);
  const [banner, setBanner] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [startDate, setStartDate] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const descChangeHandler = (event) => {
    setDesc(event.target.value);
  };
  const startDateChangeHandler = (event) => {
    setStartDate(event.target.value);
  };

  const bannerShowHandler = (image) => {
    setShow(true);
    setBanner(image);
  };

  const submitHandler = () => {
    if (title.trim() === "" && desc.trim() === "") {
      return;
    }

    let newData = {
      title,
      desc,
      startDate,
      image: banner,
    };
    setNewData((prevData) => [...prevData, newData]);
    console.log(newData);
  };

  let bannerPath = banner;

  return (
    <div className={style.bannerChange}>
      <div className={style.bannerChange__bannerPreview}>{show === true ? <img src={bannerPath} accept="image/webp" alt="banner" /> : <p className={style.bannerChange__bannerPreview__para}>Insert Image To Preview</p>}</div>
      <UploadBanner bannerShowHandler={bannerShowHandler} />
      <InputField type="text" onChange={titleChangeHandler} fieldType="Title" />
      <InputField type="text" onChange={descChangeHandler} fieldType="Description" />
      <InputField type="date" onChange={startDateChangeHandler} fieldType="Start Date" />
      <SaveBtn onClick={submitHandler} />
    </div>
  );
};

export default BannerChange;
