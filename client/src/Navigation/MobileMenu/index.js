import React, { useState } from "react";
import Styles from "./index.module.scss";
import { Link, useLocation } from "react-router-dom";

const MobileMenu = (props) => {
  const [subMenu, setSubMenu] = useState(false);

  const location = useLocation();
  const path = location.pathname;

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

  return (
    <ul className={Styles.menuList__ul}>
      <li className={Styles.menuList__ul__li}>
        <p className={`${Styles.menuList__ul__li__name}  ${path.includes("about") ? Styles.hoverActive : ""}`}>
          About
          {subMenu === "about" ? <i onClick={() => subMenuClose("about")} className="fa-solid fa-square-minus"></i> : <i onClick={() => subMenuOpen("about")} className="fa-solid fa-square-plus"></i>}
        </p>
        {subMenu === "about" && (
          <ul className={Styles.menuList__ul__li__dropdown}>
            <li onClick={props.onClick} className={`${Styles.menuList__ul__li__dropdown__subli} ${path === "/about" ? Styles.hoverSubActive : ""}`}>
              <Link to="/about">About Vikash Ranjan</Link>
            </li>
            <li onClick={props.onClick} className={`${Styles.menuList__ul__li__dropdown__subli} ${path === "/about-upsc" ? Styles.hoverSubActive : ""}`}>
              <Link to="/about-upsc">About UPSC</Link>
            </li>
            <li onClick={props.onClick} className={`${Styles.menuList__ul__li__dropdown__subli} ${path === "/about-civil-services" ? Styles.hoverSubActive : ""}`}>
              <Link to="/about-civil-services">About Civil Services</Link>
            </li>
          </ul>
        )}
      </li>

      <li className={Styles.menuList__ul__li}>
        <p className={`${Styles.menuList__ul__li__name}  ${path.includes("sociology") ? Styles.hoverActive : ""}`}>
          sociology
          {subMenu !== "sociology" ? <i onClick={() => subMenuOpen("sociology")} className="fa-solid fa-square-plus"></i> : <i onClick={() => subMenuClose("sociology")} className="fa-solid fa-square-minus"></i>}
        </p>
        {subMenu === "sociology" && (
          <ul className={Styles.menuList__ul__li__dropdown}>
            <li onClick={props.onClick} className={`${Styles.menuList__ul__li__dropdown__subli} ${path === "/sociology-paper-1" ? Styles.hoverSubActive : ""}`}>
              <Link to="/sociology-paper-1">Sociology Paper 1</Link>
            </li>
            <li onClick={props.onClick} className={`${Styles.menuList__ul__li__dropdown__subli} ${path === "/sociology-paper-2" ? Styles.hoverSubActive : ""}`}>
              <Link to="/sociology-paper-2">Sociology Paper 2</Link>
            </li>
            <li onClick={props.onClick} className={`${Styles.menuList__ul__li__dropdown__subli} ${path === "/sociology-foundation-test" ? Styles.hoverSubActive : ""}`}>
              <Link to="/sociology-foundation-test">Sociology Foundation + Test</Link>
            </li>
            <li onClick={props.onClick} className={`${Styles.menuList__ul__li__dropdown__subli} ${path === "/sociology-online" ? Styles.hoverSubActive : ""}`}>
              <Link to="/sociology-online">Sociology Course Online</Link>
            </li>
            <li onClick={props.onClick} className={`${Styles.menuList__ul__li__dropdown__subli} ${path === "/sociology-offline" ? Styles.hoverSubActive : ""}`}>
              <Link to="/sociology-offline">Sociology Course Offline</Link>
            </li>
            <li onClick={props.onClick} className={`${Styles.menuList__ul__li__dropdown__subli} ${path === "/sociology-test-plus-study" ? Styles.hoverSubActive : ""}`}>
              <Link to="/sociology-test-plus-study">Sociology Test + Study</Link>
            </li>
            <li onClick={props.onClick} className={`${Styles.menuList__ul__li__dropdown__subli} ${path === "/course-details-sociology-freshers-test" ? Styles.hoverSubActive : ""}`}>
              <Link to="/course-details-sociology-freshers-test">Sociology Test Series</Link>
            </li>
            <li onClick={props.onClick} className={`${Styles.menuList__ul__li__dropdown__subli} ${path === "/sociology-ias-syllabus" ? Styles.hoverSubActive : ""}`}>
              <Link to="/sociology-ias-syllabus">Sociology Syllabus</Link>
            </li>
            <li onClick={props.onClick} className={`${Styles.menuList__ul__li__dropdown__subli} ${path === "/sociology-study-material" ? Styles.hoverSubActive : ""}`}>
              <Link to="/sociology-study-material">Sociology Study Material</Link>
            </li>
            <li onClick={props.onClick} className={`${Styles.menuList__ul__li__dropdown__subli} ${path === "/sociology-plannar" ? Styles.hoverSubActive : ""}`}>
              <Link to="/sociology-plannar">Sociology Plannar</Link>
            </li>
            <li onClick={props.onClick} className={`${Styles.menuList__ul__li__dropdown__subli} ${path === "11" ? Styles.hoverSubActive : ""}`}>
              <a href="https://triumphias.com/file-download.php?file-id=Sociology-Brochure.pdf" target="_blank" rel="noreferrer">
                Sociology Brouchure
              </a>
            </li>
            <li onClick={props.onClick} className={`${Styles.menuList__ul__li__dropdown__subli} ${path === "/best-sociology-books-ias-optional-preparation-india" ? Styles.hoverSubActive : ""}`}>
              <Link to="/best-sociology-books-ias-optional-preparation-india">Suggest Books</Link>
            </li>
          </ul>
        )}
      </li>

      <li className={Styles.menuList__ul__li}>
        <p className={`${Styles.menuList__ul__li__name}  ${path.includes("essay") ? Styles.hoverActive : ""}`}>
          essay
          {subMenu !== "essay" ? <i onClick={() => subMenuOpen("essay")} className="fa-solid fa-square-plus"></i> : <i onClick={() => subMenuClose("essay")} className="fa-solid fa-square-minus"></i>}
        </p>
        {subMenu === "essay" && (
          <ul className={Styles.menuList__ul__li__dropdown}>
            <li onClick={props.onClick} className={`${Styles.menuList__ul__li__dropdown__subli} ${path === "/course-details-essay-foundation-plus-test-2019" ? Styles.hoverSubActive : ""}`}>
              <Link to="/course-details-essay-foundation-plus-test-2019">Essay Foundation Course</Link>
            </li>
            <li onClick={props.onClick} className={`${Styles.menuList__ul__li__dropdown__subli} ${path === "/essay-test-series" ? Styles.hoverSubActive : ""}`}>
              <Link to="/essay-test-series">Essay Test Series</Link>
            </li>
            <li onClick={props.onClick} className={`${Styles.menuList__ul__li__dropdown__subli} ${path === "/essay-study-material" ? Styles.hoverSubActive : ""}`}>
              <Link to="/essay-study-material">Essay Study Material</Link>
            </li>
            <li onClick={props.onClick} className={`${Styles.menuList__ul__li__dropdown__subli} ${path === "/essay-planner" ? Styles.hoverSubActive : ""}`}>
              <Link to="/essay-planner">Essay Plannar</Link>
            </li>
            <li onClick={props.onClick} className={`${Styles.menuList__ul__li__dropdown__subli} ${path === "17" ? Styles.hoverSubActive : ""}`}>
              <a href="https://triumphias.com/file-download.php?file-id=Essay-Brochure-Web.pdf" target="_blank" rel="noreferrer">
                Essay Brouchure
              </a>
            </li>
            <li onClick={props.onClick} className={`${Styles.menuList__ul__li__dropdown__subli} ${path === "/essay-exams-topics" ? Styles.hoverSubActive : ""}`}>
              <Link to="/essay-exams-topics">Essay Topics</Link>
            </li>
          </ul>
        )}
      </li>

      <li className={Styles.menuList__ul__li}>
        <p className={`${Styles.menuList__ul__li__name}  ${path.includes("gs") ? Styles.hoverActive : ""}`}>
          general studies
          {subMenu !== "general studies" ? <i onClick={() => subMenuOpen("general studies")} className="fa-solid fa-square-plus"></i> : <i onClick={() => subMenuClose("general studies")} className="fa-solid fa-square-minus"></i>}
        </p>
        {subMenu === "general studies" && (
          <ul className={Styles.menuList__ul__li__dropdown}>
            <li onClick={props.onClick} className={`${Styles.menuList__ul__li__dropdown__subli} ${path === "/gs-prelims-success-general-series" ? Styles.hoverSubActive : ""}`}>
              <Link to="/gs-prelims-success-general-series">GS Practice series</Link>
            </li>
            <li onClick={props.onClick} className={`${Styles.menuList__ul__li__dropdown__subli} ${path === "/gs-paper1" ? Styles.hoverSubActive : ""}`}>
              <Link to="/gs-paper1">General studies paper 1</Link>
            </li>
            <li onClick={props.onClick} className={`${Styles.menuList__ul__li__dropdown__subli} ${path === "/gs-paper2" ? Styles.hoverSubActive : ""}`}>
              <Link to="/gs-paper2">General studies paper 2</Link>
            </li>
            <li onClick={props.onClick} className={`${Styles.menuList__ul__li__dropdown__subli} ${path === "/gs-paper3" ? Styles.hoverSubActive : ""}`}>
              <Link to="/gs-paper3">General studies paper 3</Link>
            </li>
            <li onClick={props.onClick} className={`${Styles.menuList__ul__li__dropdown__subli} ${path === "/gs-paper4" ? Styles.hoverSubActive : ""}`}>
              <Link to="/gs-paper4">General studies paper 4</Link>
            </li>
          </ul>
        )}
      </li>

      <li className={Styles.menuList__ul__li}>
        <p className={`${Styles.menuList__ul__li__name}  ${path.includes("download") ? Styles.hoverActive : ""}`}>
          downloads
          {subMenu !== "downloads" ? <i onClick={() => subMenuOpen("downloads")} className="fa-solid fa-square-plus"></i> : <i onClick={() => subMenuClose("downloads")} className="fa-solid fa-square-minus"></i>}
        </p>
        {subMenu === "downloads" && (
          <ul className={Styles.menuList__ul__li__dropdown}>
            <li onClick={props.onClick} className={`${Styles.menuList__ul__li__dropdown__subli} ${path === "/download-results" ? Styles.hoverSubActive : ""}`}>
              <Link to="/download-results">Results</Link>
            </li>
            <li onClick={props.onClick} className={`${Styles.menuList__ul__li__dropdown__subli} ${path === "25" ? Styles.hoverSubActive : ""}`}>
              <a href="https://drive.google.com/file/d/1KAFeNOHv-GNkGW8lsBQt7gw8Sfpt-aJC/view" rel="noreferrer" target="_blank">
                Union Budget 2022-23
              </a>
            </li>
            <li onClick={props.onClick} className={`${Styles.menuList__ul__li__dropdown__subli} ${path === "26" ? Styles.hoverSubActive : ""}`}>
              <a href="https://triumphias.com/resources/uploads/budget.pdf" rel="noreferrer" target="_blank">
                Interim Budget 2019-20
              </a>
            </li>
            <li onClick={props.onClick} className={`${Styles.menuList__ul__li__dropdown__subli} ${path === "/download-toppers-answer-sheet" ? Styles.hoverSubActive : ""}`}>
              <Link to="/download-toppers-answer-sheet">Toppers Answer Sheet</Link>
            </li>
            <li onClick={props.onClick} className={`${Styles.menuList__ul__li__dropdown__subli} ${path === "/download-epw-yojana-kurushetra" ? Styles.hoverSubActive : ""}`}>
              <Link to="/download-epw-yojana-kurushetra">EPW Yojna Kurushetra</Link>
            </li>
            <li onClick={props.onClick} className={`${Styles.menuList__ul__li__dropdown__subli} ${path === "/download-important-articles" ? Styles.hoverSubActive : ""}`}>
              <Link to="/download-important-articles">Important Articles</Link>
            </li>
            <li onClick={props.onClick} className={`${Styles.menuList__ul__li__dropdown__subli} ${path === "/download-current-affair" ? Styles.hoverSubActive : ""}`}>
              <Link to="/download-current-affair">Current Affairs News Plus</Link>
            </li>
            <li onClick={props.onClick} className={`${Styles.menuList__ul__li__dropdown__subli} ${path === "/download-general-studies-material" ? Styles.hoverSubActive : ""}`}>
              <Link to="/download-general-studies-material">Basic (NCERT) GS Material</Link>
            </li>
            <li onClick={props.onClick} className={`${Styles.menuList__ul__li__dropdown__subli} ${path === "/download-sociology-notes" ? Styles.hoverSubActive : ""}`}>
              <Link to="/download-sociology-notes">Sociology (NOTES)</Link>
            </li>
          </ul>
        )}
      </li>

      <li className={Styles.menuList__ul__li}>
        <p className={`${Styles.menuList__ul__li__name}  ${path.includes("more") ? Styles.hoverActive : ""}`}>
          more
          {subMenu !== "more" ? <i onClick={() => subMenuOpen("more")} className="fa-solid fa-square-plus"></i> : <i onClick={() => subMenuClose("more")} className="fa-solid fa-square-minus"></i>}
        </p>
        {subMenu === "more" && (
          <ul className={Styles.menuList__ul__li__dropdown}>
            <li onClick={props.onClick} className={`${Styles.menuList__ul__li__dropdown__subli} ${path === "/more-blog" ? Styles.hoverSubActive : ""}`}>
              <Link to="/more-blog">Blog</Link>
            </li>
            <li onClick={props.onClick} className={`${Styles.menuList__ul__li__dropdown__subli} ${path === "/more-career" ? Styles.hoverSubActive : ""}`}>
              <Link to="/more-career">Career</Link>
            </li>
            <li onClick={props.onClick} className={`${Styles.menuList__ul__li__dropdown__subli} ${path === "/more-gallery" ? Styles.hoverSubActive : ""}`}>
              <Link to="/more-gallery">gallery</Link>
            </li>
            <li onClick={props.onClick} className={`${Styles.menuList__ul__li__dropdown__subli} ${path === "/more-personality-test" ? Styles.hoverSubActive : ""}`}>
              <Link to="/more-personality-test">Personality Test</Link>
            </li>
          </ul>
        )}
      </li>

      <li className={Styles.menuList__ul__li}>
        <p onClick={props.onClick} className={`${Styles.menuList__ul__li__name} ${path === "/contact-us" ? Styles.hoverActive : ""}`}>
          <Link to="/contact-us">contact us</Link>
        </p>
      </li>
    </ul>
  );
};

export default MobileMenu;
