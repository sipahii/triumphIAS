import React from "react";
import style from "./index.module.scss";

const Tabs = (props) => {
  return (
    <>
      <div className={style.logoutBtn}>
        <button onClick={props.onClick} className={style.logoutBtn__logout}>
          Logout
        </button>
      </div>
      <div className={style.tabs}>
        <ul className={style.tabs__ul}>
          <li className={style.tabs__ul__li}>Change Banner</li>
          <li className={style.tabs__ul__li}>Change Banner</li>
          <li className={style.tabs__ul__li}>Change Banner</li>
          <li className={style.tabs__ul__li}>Change Banner</li>
        </ul>
      </div>
    </>
  );
};

export default Tabs;
