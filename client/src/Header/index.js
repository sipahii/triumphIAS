import React from "react";
import Styles from "./index.module.scss";

const Header = () => {
  return (
    <header>
      <div className={Styles.container}>
        <div className={Styles.container__leftSide}>
          <div className={Styles.container__leftSide__phone}>
            <i className="fa-solid fa-phone"></i>
            <p>+91 7840888102</p>
          </div>
          <div className={Styles.container__leftSide__email}>
            <i className="fa-solid fa-envelope"></i>
            <p>info@triumphias.com</p>
          </div>
        </div>
        <div className={Styles.container__rightSide}>
          <button className={Styles.container__rightSide__applyBtn}>
            apply now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
