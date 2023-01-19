import React from "react";
import style from "./index.module.scss";

const Tabs = () => {
  return (
    <div className={style.tabs}>
      <ul className={style.tabs__ul}>
        <li className={style.tabs__ul__li}>Change Banner</li>
        <li className={style.tabs__ul__li}>Change Banner</li>
        <li className={style.tabs__ul__li}>Change Banner</li>
        <li className={style.tabs__ul__li}>Change Banner</li>
      </ul>
    </div>
  );
};

export default Tabs;
