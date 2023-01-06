import React, { useState } from "react";
import Styles from "./index.module.scss";
import Logo from "../Assets/logo.webp";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const Navigation = () => {
  const [toggle, setToggle] = useState(false);

  const openMenu = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <nav>
        <div className={Styles.container}>
          <div className={Styles.container__leftSide}>
            <div className={Styles.container__leftSide__logo}>
              <img src={Logo} alt="logo" />
            </div>
          </div>
          <div className={Styles.container__middle}>
            <DesktopMenu />
          </div>
          <div className={Styles.container__rightSide}>
            <div className={Styles.container__rightSide__search}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div
              onClick={openMenu}
              className={Styles.container__rightSide__menuTab}
            >
              <div className={Styles.container__rightSide__menuTab__body}>
                <i className="fa-solid fa-bars"></i>
                <p
                  className={
                    Styles.container__rightSide__menuTab__body__menuTabName
                  }
                >
                  MENU
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.menuList}>{toggle && <MobileMenu />}</div>
      </nav>
    </>
  );
};

export default Navigation;
