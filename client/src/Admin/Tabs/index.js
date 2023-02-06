import React, { useState } from "react";
import style from "./index.module.scss";

const Tabs = (props) => {
  const [addClass, setAddClass] = useState("banner");
  const tabClicked = (tabName) => {
    props.tabClicked(tabName);
    setAddClass(tabName);
  };
  return (
    <>
      <div className={style.logoutBtn}>
        <button onClick={props.onClick} className={style.logoutBtn__logout}>
          Logout
        </button>
      </div>
      <div className={style.tabs}>
        <ul className={style.tabs__ul}>
          <li onClick={() => tabClicked("banner")} className={`${style.tabs__ul__li} ${addClass === "banner" ? style.active : ""}`}>
            Change Banner
          </li>
          <li onClick={() => tabClicked("course")} className={`${style.tabs__ul__li} ${addClass === "course" ? style.active : ""}`}>
            Change Course
          </li>
          <li onClick={() => tabClicked("gallery")} className={`${style.tabs__ul__li} ${addClass === "gallery" ? style.active : ""}`}>
            Change Gallery Image
          </li>
          <li onClick={() => tabClicked("")} className={`${style.tabs__ul__li} ${addClass === "" ? style.active : ""}`}>
            Change Banner
          </li>
        </ul>
      </div>
    </>
  );
};

export default Tabs;
