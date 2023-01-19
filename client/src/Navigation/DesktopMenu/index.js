import React from "react";
import Styles from "./index.module.scss";
import { Link, useLocation } from "react-router-dom";
import Item from "./Item";

const DesktopMenu = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <ul className={Styles.menu}>
      <Item name="About" class={path.includes("about") ? Styles.hoverActive : ""}>
        <li className={`${Styles.subList} ${path === "/about" ? Styles.hoverSubActive : ""}`}>
          <Link to="/about">About Vikash Ranjan</Link>
        </li>
        <li className={`${Styles.subList} ${path === "/about-upsc" ? Styles.hoverSubActive : ""}`}>
          <Link to="/about-upsc">About UPSC</Link>
        </li>
        <li className={`${Styles.subList} ${path === "/about-civil-services" ? Styles.hoverSubActive : ""}`}>
          <Link to="/about-civil-services">About Civil Services</Link>
        </li>
      </Item>

      <Item name="Sociology" class={path.includes("sociology") ? Styles.hoverActive : ""}>
        <li className={`${Styles.subList} ${path === "/sociology-paper-1" ? Styles.hoverSubActive : ""}`}>
          <Link to="/sociology-paper-1">Sociology Paper 1</Link>
        </li>
        <li className={`${Styles.subList} ${path === "/sociology-paper-2" ? Styles.hoverSubActive : ""}`}>
          <Link to="/sociology-paper-2">Sociology Paper 2</Link>
        </li>
        <li className={`${Styles.subList} ${path === "/sociology-foundation-test" ? Styles.hoverSubActive : ""}`}>
          <Link to="/sociology-foundation-test">Sociology Foundation + Test</Link>
        </li>
        <li className={`${Styles.subList} ${path === "/sociology-online" ? Styles.hoverSubActive : ""}`}>
          <Link to="/sociology-online">Sociology Course Online</Link>
        </li>
        <li className={`${Styles.subList} ${path === "/sociology-offline" ? Styles.hoverSubActive : ""}`}>
          <Link to="/sociology-offline">Sociology Course Offline</Link>
        </li>
        <li className={`${Styles.subList} ${path === "/sociology-test-plus-study" ? Styles.hoverSubActive : ""}`}>
          <Link to="/sociology-test-plus-study">Sociology Test + Study</Link>
        </li>
        <li className={`${Styles.subList} ${path === "/course-details-sociology-freshers-test" ? Styles.hoverSubActive : ""}`}>
          <Link to="/course-details-sociology-freshers-test">Sociology Test Series</Link>
        </li>
        <li className={`${Styles.subList} ${path === "/sociology-ias-syllabus" ? Styles.hoverSubActive : ""}`}>
          <Link to="/sociology-ias-syllabus">Sociology Syllabus</Link>
        </li>
        <li className={`${Styles.subList} ${path === "/sociology-study-material" ? Styles.hoverSubActive : ""}`}>
          <Link to="/sociology-study-material">Sociology Study Material</Link>
        </li>
        <li className={`${Styles.subList} ${path === "/sociology-plannar" ? Styles.hoverSubActive : ""}`}>
          <Link to="/sociology-plannar">Sociology Plannar</Link>
        </li>
        <li className={`${Styles.subList} ${path === "11" ? Styles.hoverSubActive : ""}`}>
          <a href="https://triumphias.com/file-download.php?file-id=Sociology-Brochure.pdf" rel="noreferrer" target="_blank">
            Sociology Brouchure
          </a>
        </li>
        <li className={`${Styles.subList} ${path === "/best-sociology-books-ias-optional-preparation-india" ? Styles.hoverSubActive : ""}`}>
          <Link to="/best-sociology-books-ias-optional-preparation-india">Suggest Books</Link>
        </li>
      </Item>

      <Item name="Essay" class={path.includes("essay") ? Styles.hoverActive : ""}>
        <li className={`${Styles.subList} ${path === "/course-details-essay-foundation-plus-test-2019" ? Styles.hoverSubActive : ""}`}>
          <Link to="/course-details-essay-foundation-plus-test-2019">Essay Foundation Course</Link>
        </li>
        <li className={`${Styles.subList} ${path === "/essay-test-series" ? Styles.hoverSubActive : ""}`}>
          <Link to="/essay-test-series">Essay Test Series</Link>
        </li>
        <li className={`${Styles.subList} ${path === "/essay-study-material" ? Styles.hoverSubActive : ""}`}>
          <Link to="/essay-study-material">Essay Study Material</Link>
        </li>
        <li className={`${Styles.subList} ${path === "/essay-planner" ? Styles.hoverSubActive : ""}`}>
          <Link to="/essay-planner">Essay Plannar</Link>
        </li>
        <li className={`${Styles.subList} ${path === "17" ? Styles.hoverSubActive : ""}`}>
          <a href="https://triumphias.com/file-download.php?file-id=Essay-Brochure-Web.pdf" rel="noreferrer" target="_blank">
            Essay Brouchure
          </a>
        </li>
        <li className={`${Styles.subList} ${path === "/essay-exams-topics" ? Styles.hoverSubActive : ""}`}>
          <Link to="/essay-exams-topics">Essay Topics</Link>
        </li>
      </Item>

      <Item name="General Studies" class={path.includes("gs") ? Styles.hoverActive : ""}>
        <li className={`${Styles.subList} ${path === "/gs-prelims-success-general-series" ? Styles.hoverSubActive : ""}`}>
          <Link to="/gs-prelims-success-general-series">GS Practice series</Link>
        </li>
        <li className={`${Styles.subList} ${path === "/gs-paper1" ? Styles.hoverSubActive : ""}`}>
          <Link to="/gs-paper1">General studies paper 1</Link>
        </li>
        <li className={`${Styles.subList} ${path === "/gs-paper2" ? Styles.hoverSubActive : ""}`}>
          <Link to="/gs-paper2">General studies paper 2</Link>
        </li>
        <li className={`${Styles.subList} ${path === "/gs-paper3" ? Styles.hoverSubActive : ""}`}>
          <Link to="/gs-paper3">General studies paper 3</Link>
        </li>
        <li className={`${Styles.subList} ${path === "/gs-paper4" ? Styles.hoverSubActive : ""}`}>
          <Link to="/gs-paper4">General studies paper 4</Link>
        </li>
      </Item>

      <Item name="Downloads" class={path.includes("download") ? Styles.hoverActive : ""}>
        <li className={`${Styles.subList} ${path === "/download-results" ? Styles.hoverSubActive : ""}`}>
          <Link to="/download-results">Results</Link>
        </li>
        <li className={`${Styles.subList} ${path === "25" ? Styles.hoverSubActive : ""}`}>
          <a href="https://drive.google.com/file/d/1KAFeNOHv-GNkGW8lsBQt7gw8Sfpt-aJC/view" rel="noreferrer" target="_blank">
            Union Budget 2022-23
          </a>
        </li>
        <li className={`${Styles.subList} ${path === "26" ? Styles.hoverSubActive : ""}`}>
          <a href="https://triumphias.com/resources/uploads/budget.pdf" rel="noreferrer" target="_blank">
            Interim Budget 2019-20
          </a>
        </li>
        <li className={`${Styles.subList} ${path === "/download-toppers-answer-sheet" ? Styles.hoverSubActive : ""}`}>
          <Link to="/download-toppers-answer-sheet">Toppers Answer Sheet</Link>
        </li>
        <li className={`${Styles.subList} ${path === "/download-epw-yojana-kurushetra" ? Styles.hoverSubActive : ""}`}>
          <Link to="/download-epw-yojana-kurushetra">EPW Yojna Kurushetra</Link>
        </li>
        <li className={`${Styles.subList} ${path === "/download-important-articles" ? Styles.hoverSubActive : ""}`}>
          <Link to="/download-important-articles">Important Articles</Link>
        </li>
        <li className={`${Styles.subList} ${path === "/download-current-affair" ? Styles.hoverSubActive : ""}`}>
          <Link to="/download-current-affair">Current Affairs News Plus</Link>
        </li>
        <li className={`${Styles.subList} ${path === "/download-general-studies-material" ? Styles.hoverSubActive : ""}`}>
          <Link to="/download-general-studies-material">Basic (NCERT) GS Material</Link>
        </li>
        <li className={`${Styles.subList} ${path === "/download-sociology-notes" ? Styles.hoverSubActive : ""}`}>
          <Link to="/download-sociology-notes">Sociology (NOTES)</Link>
        </li>
      </Item>

      <li className={`${Styles.menu__list} ${path === "/gallery" ? Styles.hoverActive : ""}`}>
        <Link to="/gallery">gallery</Link>
      </li>

      <li className={`${Styles.menu__list} ${path === "/contact-us" ? Styles.hoverActive : ""}`}>
        <Link to="/contact-us">contact us</Link>
      </li>
    </ul>
  );
};

export default DesktopMenu;
