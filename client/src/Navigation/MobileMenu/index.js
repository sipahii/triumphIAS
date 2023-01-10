import React, { useState } from "react";
import Styles from "./index.module.scss";

const MobileMenu = () => {
  const [subMenu, setSubMenu] = useState(false);
  const [dropMenu, setDropMenu] = useState(false);

  const subMenuOpen = (menuName) => {
    if (menuName) {
      setSubMenu(menuName);
    }
  };

  const subMenuClose = (menuName) => {
    if (menuName) {
      setSubMenu(false);
    }
  };

  const subDropMenuOpen = (subMenu) => {
    setDropMenu(subMenu);
  };

  const subDropMenuClose = (subMenu) => {
    setDropMenu(false);
  };
  return (
    <ul className={Styles.menuList__ul}>
      <li className={Styles.menuList__ul__li}>
        <p className={Styles.menuList__ul__li__name}> home</p>

        {subMenu === "home" ? (
          <i onClick={() => subMenuClose("home")} className="fa-solid fa-square-minus"></i>
        ) : (
          <i onClick={() => subMenuOpen("home")} className="fa-solid fa-square-plus"></i>
          <i
            onClick={() => subMenuClose("home")}
            className="fa-solid fa-square-minus"
          ></i>
        ) : (
          <i
            onClick={() => subMenuOpen("home")}
            className="fa-solid fa-square-plus"
          ></i>
        )}

        {subMenu === "home" && (
          <ul className={Styles.menuList__ul__li__dropdown}>
            <li className={Styles.menuList__ul__li__dropdown__subli}>Home 1</li>
            <li className={Styles.menuList__ul__li__dropdown__subli}>Home 2</li>
            <li className={Styles.menuList__ul__li__dropdown__subli}>Home 3</li>
            <li className={Styles.menuList__ul__li__dropdown__subli}>Home 4</li>
          </ul>
        )}
      </li>

      <li className={Styles.menuList__ul__li}>
        <p className={Styles.menuList__ul__li__name}> pages</p>

        {subMenu !== "pages" ? (
          <i onClick={() => subMenuOpen("pages")} className="fa-solid fa-square-plus"></i>
        ) : (
          <i onClick={() => subMenuClose("pages")} className="fa-solid fa-square-minus"></i>
          <i
            onClick={() => subMenuOpen("pages")}
            className="fa-solid fa-square-plus"
          ></i>
        ) : (
          <i
            onClick={() => subMenuClose("pages")}
            className="fa-solid fa-square-minus"
          ></i>
        )}

        {subMenu === "pages" && (
          <ul className={Styles.menuList__ul__li__dropdown}>
            <li className={Styles.menuList__ul__li__dropdown__subli}>About 1</li>
            <li className={Styles.menuList__ul__li__dropdown__subli}>About 2</li>
            <li className={Styles.menuList__ul__li__dropdown__subli}>About 3</li>
            <li className={Styles.menuList__ul__li__dropdown__subli}>About 4</li>
            <li className={Styles.menuList__ul__li__dropdown__subli}>
              About 1
            </li>
            <li className={Styles.menuList__ul__li__dropdown__subli}>
              About 2
            </li>
            <li className={Styles.menuList__ul__li__dropdown__subli}>
              About 3
            </li>
            <li className={Styles.menuList__ul__li__dropdown__subli}>
              About 4
            </li>
          </ul>
        )}
      </li>

      <li className={Styles.menuList__ul__li}>
        <p className={Styles.menuList__ul__li__name}> courses</p>

        {subMenu !== "courses" ? (

          <i onClick={() => subMenuOpen("courses")} className="fa-solid fa-square-plus"></i>
        ) : (
          <i onClick={() => subMenuClose("courses")} className="fa-solid fa-square-minus"></i>

          <i
            onClick={() => subMenuOpen("courses")}
            className="fa-solid fa-square-plus"
          ></i>
        ) : (
          <i
            onClick={() => subMenuClose("courses")}
            className="fa-solid fa-square-minus"
          ></i>

        )}

        {subMenu === "courses" && (
          <ul className={Styles.menuList__ul__li__dropdown}>

            <li className={Styles.menuList__ul__li__dropdown__subli}>Courses 1</li>
            <li className={Styles.menuList__ul__li__dropdown__subli}>Courses 2</li>
            <li className={Styles.menuList__ul__li__dropdown__subli}>Courses 3</li>
            <li className={Styles.menuList__ul__li__dropdown__subli}>Courses Details 1</li>
            <li className={Styles.menuList__ul__li__dropdown__subli}>Courses Details 2</li>
            <li className={Styles.menuList__ul__li__dropdown__subli}>Courses Details 3</li>

            <li className={Styles.menuList__ul__li__dropdown__subli}>
              Courses 1
            </li>
            <li className={Styles.menuList__ul__li__dropdown__subli}>
              Courses 2
            </li>
            <li className={Styles.menuList__ul__li__dropdown__subli}>
              Courses 3
            </li>
            <li className={Styles.menuList__ul__li__dropdown__subli}>
              Courses Details 1
            </li>
            <li className={Styles.menuList__ul__li__dropdown__subli}>
              Courses Details 2
            </li>
            <li className={Styles.menuList__ul__li__dropdown__subli}>
              Courses Details 3
            </li>

          </ul>
        )}
      </li>

      <li className={Styles.menuList__ul__li}>
        <p className={Styles.menuList__ul__li__name}> research</p>

        {subMenu !== "research" ? (

          <i onClick={() => subMenuOpen("research")} className="fa-solid fa-square-plus"></i>
        ) : (
          <i onClick={() => subMenuClose("research")} className="fa-solid fa-square-minus"></i>

          <i
            onClick={() => subMenuOpen("research")}
            className="fa-solid fa-square-plus"
          ></i>
        ) : (
          <i
            onClick={() => subMenuClose("research")}
            className="fa-solid fa-square-minus"
          ></i>

        )}

        {subMenu === "research" && (
          <ul className={Styles.menuList__ul__li__dropdown}>

            <li className={Styles.menuList__ul__li__dropdown__subli}>Reserach 1</li>
            <li className={Styles.menuList__ul__li__dropdown__subli}>Reserach 2</li>
            <li className={Styles.menuList__ul__li__dropdown__subli}>Reserach 3</li>
            <li className={Styles.menuList__ul__li__dropdown__subli}>Reserach Details</li>

            <li className={Styles.menuList__ul__li__dropdown__subli}>
              Reserach 1
            </li>
            <li className={Styles.menuList__ul__li__dropdown__subli}>
              Reserach 2
            </li>
            <li className={Styles.menuList__ul__li__dropdown__subli}>
              Reserach 3
            </li>
            <li className={Styles.menuList__ul__li__dropdown__subli}>
              Reserach Details
            </li>

          </ul>
        )}
      </li>

      <li className={Styles.menuList__ul__li}>
        <p className={Styles.menuList__ul__li__name}> News</p>

        {subMenu !== "news" ? (

          <i onClick={() => subMenuOpen("news")} className="fa-solid fa-square-plus"></i>
        ) : (
          <i onClick={() => subMenuClose("news")} className="fa-solid fa-square-minus"></i>

          <i
            onClick={() => subMenuOpen("news")}
            className="fa-solid fa-square-plus"
          ></i>
        ) : (
          <i
            onClick={() => subMenuClose("news")}
            className="fa-solid fa-square-minus"
          ></i>

        )}

        {subMenu === "news" && (
          <ul className={Styles.menuList__ul__li__dropdown}>

            <li className={`${Styles.menuList__ul__li__dropdown__subli} ${Styles.menuList__ul__li__dropdown__subli2}`}>
              <p className={Styles.menuList__ul__li__dropdown__subli__name2}>News</p>

              {dropMenu !== "newsMenu" ? (
                <i onClick={() => subDropMenuOpen("newsMenu")} className="fa-solid fa-square-plus"></i>
              ) : (
                <i onClick={() => subDropMenuClose("newsMenu")} className="fa-solid fa-square-minus"></i>
              )}
              {dropMenu === "newsMenu" && (
                <ul className={Styles.menuList__ul__li__dropdown}>
                  <li className={Styles.menuList__ul__li__dropdown__subli}>News 1</li>
                  <li className={Styles.menuList__ul__li__dropdown__subli}>News 2</li>
                  <li className={Styles.menuList__ul__li__dropdown__subli}>News Details</li>
                </ul>
              )}
            </li>
            <li className={`${Styles.menuList__ul__li__dropdown__subli} ${Styles.menuList__ul__li__dropdown__subli2}`}>
              <p className={Styles.menuList__ul__li__dropdown__subli__name2}>Event</p>
              {dropMenu !== "eventMenu" ? (
                <i onClick={() => subDropMenuOpen("eventMenu")} className="fa-solid fa-square-plus"></i>
              ) : (
                <i onClick={() => subDropMenuClose("eventMenu")} className="fa-solid fa-square-minus"></i>
              )}
              {dropMenu === "eventMenu" && (
                <ul className={Styles.menuList__ul__li__dropdown}>
                  <li className={Styles.menuList__ul__li__dropdown__subli}>Event</li>
                  <li className={Styles.menuList__ul__li__dropdown__subli}>Event Details</li>

            <li
              className={`${Styles.menuList__ul__li__dropdown__subli} ${Styles.menuList__ul__li__dropdown__subli2}`}
            >
              <p className={Styles.menuList__ul__li__dropdown__subli__name2}>
                News
              </p>

              {dropMenu !== "newsMenu" ? (
                <i
                  onClick={() => subDropMenuOpen("newsMenu")}
                  className="fa-solid fa-square-plus"
                ></i>
              ) : (
                <i
                  onClick={() => subDropMenuClose("newsMenu")}
                  className="fa-solid fa-square-minus"
                ></i>
              )}
              {dropMenu === "newsMenu" && (
                <ul className={Styles.menuList__ul__li__dropdown}>
                  <li className={Styles.menuList__ul__li__dropdown__subli}>
                    News 1
                  </li>
                  <li className={Styles.menuList__ul__li__dropdown__subli}>
                    News 2
                  </li>
                  <li className={Styles.menuList__ul__li__dropdown__subli}>
                    News Details
                  </li>
                </ul>
              )}
            </li>
            <li
              className={`${Styles.menuList__ul__li__dropdown__subli} ${Styles.menuList__ul__li__dropdown__subli2}`}
            >
              <p className={Styles.menuList__ul__li__dropdown__subli__name2}>
                Event
              </p>
              {dropMenu !== "eventMenu" ? (
                <i
                  onClick={() => subDropMenuOpen("eventMenu")}
                  className="fa-solid fa-square-plus"
                ></i>
              ) : (
                <i
                  onClick={() => subDropMenuClose("eventMenu")}
                  className="fa-solid fa-square-minus"
                ></i>
              )}
              {dropMenu === "eventMenu" && (
                <ul className={Styles.menuList__ul__li__dropdown}>
                  <li className={Styles.menuList__ul__li__dropdown__subli}>
                    Event
                  </li>
                  <li className={Styles.menuList__ul__li__dropdown__subli}>
                    Event Details
                  </li>

                </ul>
              )}
            </li>
          </ul>
        )}
      </li>
      <li className={Styles.menuList__ul__li}>
        <p className={Styles.menuList__ul__li__name}> gallery</p>
        {subMenu !== "gallery" ? (

          <i onClick={() => subMenuOpen("gallery")} className="fa-solid fa-square-plus"></i>
        ) : (
          <i onClick={() => subMenuClose("gallery")} className="fa-solid fa-square-minus"></i>
        )}
        {subMenu === "gallery" && (
          <ul className={Styles.menuList__ul__li__dropdown}>
            <li className={Styles.menuList__ul__li__dropdown__subli}>Gallery 1</li>
            <li className={Styles.menuList__ul__li__dropdown__subli}>Gallery 2</li>

          <i
            onClick={() => subMenuOpen("gallery")}
            className="fa-solid fa-square-plus"
          ></i>
        ) : (
          <i
            onClick={() => subMenuClose("gallery")}
            className="fa-solid fa-square-minus"
          ></i>
        )}
        {subMenu === "gallery" && (
          <ul className={Styles.menuList__ul__li__dropdown}>
            <li className={Styles.menuList__ul__li__dropdown__subli}>
              Gallery 1
            </li>
            <li className={Styles.menuList__ul__li__dropdown__subli}>
              Gallery 2
            </li>

          </ul>
        )}
      </li>
      <li className={Styles.menuList__ul__li}>
        <p className={Styles.menuList__ul__li__name}> contact</p>
        {subMenu !== "contact" ? (
          <i onClick={() => subMenuOpen("contact")} className="fa-solid fa-square-plus"></i>
        ) : (
          <i onClick={() => subMenuClose("contact")} className="fa-solid fa-square-minus"></i>
        )}
        {subMenu === "contact" && (
          <ul className={Styles.menuList__ul__li__dropdown}>
            <li className={Styles.menuList__ul__li__dropdown__subli}>Contact 1</li>
            <li className={Styles.menuList__ul__li__dropdown__subli}>Contact 2</li>

          <i
            onClick={() => subMenuOpen("contact")}
            className="fa-solid fa-square-plus"
          ></i>
        ) : (
          <i
            onClick={() => subMenuClose("contact")}
            className="fa-solid fa-square-minus"
          ></i>
        )}
        {subMenu === "contact" && (
          <ul className={Styles.menuList__ul__li__dropdown}>
            <li className={Styles.menuList__ul__li__dropdown__subli}>
              Contact 1
            </li>
            <li className={Styles.menuList__ul__li__dropdown__subli}>
              Contact 2
            </li>
          </ul>
        )}
      </li>
    </ul>
  );
};

export default MobileMenu;
