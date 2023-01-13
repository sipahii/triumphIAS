import React, { useState } from "react";
import Styles from "./index.module.scss";
import Logo from "../Assets/logo.webp";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { Link } from "react-router-dom";

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
              <Link to="/home">
                <img src={Logo} alt="logo" />
              </Link>
            </div>
          </div>
          <div className={Styles.container__middle}>
            <DesktopMenu />
          </div>
          <div className={Styles.container__rightSide}>
            <div onClick={openMenu} className={Styles.container__rightSide__menuTab}>
              <div className={Styles.container__rightSide__menuTab__body}>
                <i className="fa-solid fa-bars"></i>
                <p className={Styles.container__rightSide__menuTab__body__menuTabName}>MENU</p>
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
