import React, { useState } from "react";
import Styles from "./index.module.scss";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  const [subMenu, setSubMenu] = useState(false);
  // const [dropMenu, setDropMenu] = useState(false);

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

  // const subDropMenuOpen = (subMenu) => {
  //   setDropMenu(subMenu);
  // };

  // const subDropMenuClose = (subMenu) => {
  //   setDropMenu(false);
  // };
  return (
    <ul className={Styles.menuList__ul}>
      <li className={Styles.menuList__ul__li}>
        <p className={Styles.menuList__ul__li__name}>About</p>

        {subMenu === "about" ? (
          <i onClick={() => subMenuClose("about")} className="fa-solid fa-square-minus"></i>
        ) : (
          <i onClick={() => subMenuOpen("about")} className="fa-solid fa-square-plus"></i>
        )}

        {subMenu === "about" && (
          <ul className={Styles.menuList__ul__li__dropdown}>
            <li className={Styles.menuList__ul__li__dropdown__subli}>
              <Link to="/about">About Vikash Ranjan</Link>
            </li>
            <li className={Styles.menuList__ul__li__dropdown__subli}>
              <Link to="/about-upsc">About UPSC</Link>
            </li>
            <li className={Styles.menuList__ul__li__dropdown__subli}>
              <Link to="/about-civil-services">About Civil Services</Link>
            </li>
          </ul>
        )}
      </li>

      <li className={Styles.menuList__ul__li}>
        <p className={Styles.menuList__ul__li__name}>sociology</p>

        {subMenu !== "sociology" ? (
          <i onClick={() => subMenuOpen("sociology")} className="fa-solid fa-square-plus"></i>
        ) : (
          <i onClick={() => subMenuClose("sociology")} className="fa-solid fa-square-minus"></i>
        )}

        {subMenu === "sociology" && (
          <ul className={Styles.menuList__ul__li__dropdown__subli}>
            <li className={Styles.dropdown__subList}>
              <Link to="/sociology-paper-1">Sociology Paper 1</Link>
            </li>
            <li className={Styles.menuList__ul__li__dropdown__subli}>
              <Link to="/sociology-paper-2">Sociology Paper 2</Link>
            </li>
            <li className={Styles.menuList__ul__li__dropdown__subli}>
              <Link to="/sociology-foundation-test">Sociology Foundation + Test</Link>
            </li>
            <li className={Styles.menuList__ul__li__dropdown__subli}>
              <Link to="/sociology-online">Sociology Course Online</Link>
            </li>
            <li className={Styles.menuList__ul__li__dropdown__subli}>
              <Link to="/sociology-offline">Sociology Course Offline</Link>
            </li>
            <li className={Styles.menuList__ul__li__dropdown__subli}>
              <Link to="/sociology-test-plus-study">Sociology Test + Study</Link>
            </li>
            <li className={Styles.menuList__ul__li__dropdown__subli}>
              <Link to="/course-details-sociology-freshers-test">Sociology Test Series</Link>
            </li>
            <li className={Styles.menuList__ul__li__dropdown__subli}>
              <Link to="/sociology-ias-syllabus">Sociology Syllabus</Link>
            </li>
            <li className={Styles.menuList__ul__li__dropdown__subli}>
              <Link to="/sociology-study-material">Sociology Study Material</Link>
            </li>
            <li className={Styles.menuList__ul__li__dropdown__subli}>
              <Link to="/sociology-plannar">Sociology Plannar</Link>
            </li>
            <li className={Styles.menuList__ul__li__dropdown__subli}>
              <Link to="/sociology-brouchure.pdf">Sociology Brouchure</Link>
            </li>
            <li className={Styles.menuList__ul__li__dropdown__subli}>
              <Link to="/best-sociology-books-ias-optional-preparation-india">Suggest Books</Link>
            </li>
          </ul>
        )}
      </li>

      <li className={Styles.menuList__ul__li}>
        <p className={Styles.menuList__ul__li__name}>essay</p>

        {subMenu !== "essay" ? (
          <i onClick={() => subMenuOpen("essay")} className="fa-solid fa-square-plus"></i>
        ) : (
          <i onClick={() => subMenuClose("essay")} className="fa-solid fa-square-minus"></i>
        )}

        {subMenu === "essay" && (
          <ul className={Styles.menuList__ul__li__dropdown}>
            <li className={Styles.menuList__ul__li__dropdown__subli}>
              <Link to="/course-details-essay-foundation-plus-test-2019">Essay Foundation Course</Link>
            </li>
            <li className={Styles.menuList__ul__li__dropdown__subli}>
              <Link to="/essay-test-series">Essay Test Series</Link>
            </li>
            <li className={Styles.menuList__ul__li__dropdown__subli}>
              <Link to="/essay-study-material">Essay Study Material</Link>
            </li>
            <li className={Styles.menuList__ul__li__dropdown__subli}>
              <Link to="/essay-planner">Essay Plannar</Link>
            </li>
            <li className={Styles.menuList__ul__li__dropdown__subli}>
              <Link to="/essay-brouchure.pdf">Essay Brouchure</Link>
            </li>
            <li className={Styles.menuList__ul__li__dropdown__subli}>
              <Link to="/essay-exams-topics">Essay Topics</Link>
            </li>
          </ul>
        )}
      </li>

      <li className={Styles.menuList__ul__li}>
        <p className={Styles.menuList__ul__li__name}>general studies</p>

        {subMenu !== "general studies" ? (
          <i onClick={() => subMenuOpen("general studies")} className="fa-solid fa-square-plus"></i>
        ) : (
          <i onClick={() => subMenuClose("general studies")} className="fa-solid fa-square-minus"></i>
        )}

        {subMenu === "general studies" && (
          <ul className={Styles.menuList__ul__li__dropdown}>
            <li className={Styles.menuList__ul__li__dropdown__subli}>
              <Link to="/prelims-success-general-series">GS Practice series</Link>
            </li>
            <li className={Styles.menuList__ul__li__dropdown__subli}>
              <Link to="/gs-paper1">General studies paper 1</Link>
            </li>
            <li className={Styles.menuList__ul__li__dropdown__subli}>
              <Link to="/gs-paper2">General studies paper 2</Link>
            </li>
            <li className={Styles.menuList__ul__li__dropdown__subli}>
              <Link to="/gs-paper3">General studies paper 3</Link>
            </li>
            <li className={Styles.menuList__ul__li__dropdown__subli}>
              <Link to="/gs-paper4">General studies paper 4</Link>
            </li>
          </ul>
        )}
      </li>

      {/* <li className={Styles.menuList__ul__li}>
        <p className={Styles.menuList__ul__li__name}> News</p>

        {subMenu !== "news" ? (
          <i onClick={() => subMenuOpen("news")} className="fa-solid fa-square-plus"></i>
        ) : (
          <i onClick={() => subMenuClose("news")} className="fa-solid fa-square-minus"></i>
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
                </ul>
              )}
            </li>
          </ul>
        )}
      </li> */}

      <li className={Styles.menuList__ul__li}>
        <p className={Styles.menuList__ul__li__name}>downloads</p>
        {subMenu !== "downloads" ? (
          <i onClick={() => subMenuOpen("downloads")} className="fa-solid fa-square-plus"></i>
        ) : (
          <i onClick={() => subMenuClose("downloads")} className="fa-solid fa-square-minus"></i>
        )}
        {subMenu === "downloads" && (
          <ul className={Styles.menuList__ul__li__dropdown}>
            <li className={Styles.menuList__ul__li__dropdown__subli}>
              <Link to="/results">Results</Link>
            </li>
            <li className={Styles.menuList__ul__li__dropdown__subli}>
              <Link to="/union-budget-2022-23">Union Budget 2022-23</Link>
            </li>
            <li className={Styles.menuList__ul__li__dropdown__subli}>
              <Link to="/interim-budget-2019-20.pdf">Interim Budget 2019-20</Link>
            </li>
            <li className={Styles.menuList__ul__li__dropdown__subli}>
              <Link to="/toppers-answer-sheet">Toppers Answer Sheet</Link>
            </li>
            <li className={Styles.menuList__ul__li__dropdown__subli}>
              <Link to="/epw-yojana-kurushetra">EPW Yojna Kurushetra</Link>
            </li>
            <li className={Styles.menuList__ul__li__dropdown__subli}>
              <Link to="/important-articles">Important Articles</Link>
            </li>
            <li className={Styles.menuList__ul__li__dropdown__subli}>
              <Link to="/current-affair">Current Affairs News Plus</Link>
            </li>
            <li className={Styles.menuList__ul__li__dropdown__subli}>
              <Link to="/general-studies-material">Basic (NCERT) GS Material</Link>
            </li>
            <li className={Styles.menuList__ul__li__dropdown__subli}>
              <Link to="/sociology-notes">Sociology (NOTES)</Link>
            </li>
          </ul>
        )}
      </li>

      <li className={Styles.menuList__ul__li}>
        <p className={Styles.menuList__ul__li__name}>
          <Link to="/gallery">gallery</Link>
        </p>
      </li>
      <li className={Styles.menuList__ul__li}>
        <p className={Styles.menuList__ul__li__name}>
          <Link to="/contact-us">contact us</Link>
        </p>
      </li>
    </ul>
  );
};

export default MobileMenu;
