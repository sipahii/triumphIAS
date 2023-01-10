import React from "react";
import style from "./index.module.scss";

const Content = () => {
  return (
    <div className={style.content}>
      <div className={style.content__title}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" />
      </div>
      <div className={style.content__desc}>
        <label htmlFor="desc">Description</label>
        <input type="text" id="desc" />
      </div>
    </div>
  );
};

export default Content;
