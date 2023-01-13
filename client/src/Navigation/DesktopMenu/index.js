import React from "react";
import Styles from "./index.module.scss";
import { Link } from "react-router-dom";

const DesktopMenu = () => {
  return (
    <ul className={Styles.menu}>
      <li className={Styles.menu__list}>
        About
        <ul className={Styles.dropdown}>
          <li className={Styles.dropdown__subList}>
            <Link to="/about">About Vikash Ranjan</Link>
          </li>
          <li className={Styles.dropdown__subList}>
            <Link to="/about-upsc">About UPSC</Link>
          </li>
          <li className={Styles.dropdown__subList}>
            <Link to="/about-civil-services">About Civil Services</Link>
          </li>
        </ul>
      </li>
      <li className={Styles.menu__list}>
        Sociology
        <ul className={Styles.dropdown}>
          <li className={Styles.dropdown__subList}>
            <Link to="/sociology-paper-1">Sociology Paper 1</Link>
          </li>
          <li className={Styles.dropdown__subList}>
            <Link to="/sociology-paper-2">Sociology Paper 2</Link>
          </li>
          <li className={Styles.dropdown__subList}>
            <Link to="/sociology-foundation-test">Sociology Foundation + Test</Link>
          </li>
          <li className={Styles.dropdown__subList}>
            <Link to="/sociology-online">Sociology Course Online</Link>
          </li>
          <li className={Styles.dropdown__subList}>
            <Link to="/sociology-offline">Sociology Course Offline</Link>
          </li>
          <li className={Styles.dropdown__subList}>
            <Link to="/sociology-test-plus-study">Sociology Test + Study</Link>
          </li>
          <li className={Styles.dropdown__subList}>
            <Link to="/course-details-sociology-freshers-test">Sociology Test Series</Link>
          </li>
          <li className={Styles.dropdown__subList}>
            <Link to="/sociology-ias-syllabus">Sociology Syllabus</Link>
          </li>
          <li className={Styles.dropdown__subList}>
            <Link to="/sociology-study-material">Sociology Study Material</Link>
          </li>
          <li className={Styles.dropdown__subList}>
            <Link to="/sociology-plannar">Sociology Plannar</Link>
          </li>
          <li className={Styles.dropdown__subList}>
            <Link to="/sociology-brouchure.pdf">Sociology Brouchure</Link>
          </li>
          <li className={Styles.dropdown__subList}>
            <Link to="/best-sociology-books-ias-optional-preparation-india">Suggest Books</Link>
          </li>
        </ul>
      </li>
      <li className={Styles.menu__list}>
        Essay
        <ul className={Styles.dropdown}>
          <li className={Styles.dropdown__subList}>
            <Link to="/course-details-essay-foundation-plus-test-2019">Essay Foundation Course</Link>
          </li>
          <li className={Styles.dropdown__subList}>
            <Link to="/essay-test-series">Essay Test Series</Link>
          </li>
          <li className={Styles.dropdown__subList}>
            <Link to="/essay-study-material">Essay Study Material</Link>
          </li>
          <li className={Styles.dropdown__subList}>
            <Link to="/essay-planner">Essay Plannar</Link>
          </li>
          <li className={Styles.dropdown__subList}>
            <Link to="/essay-brouchure.pdf">Essay Brouchure</Link>
          </li>
          <li className={Styles.dropdown__subList}>
            <Link to="/essay-exams-topics">Essay Topics</Link>
          </li>
        </ul>
      </li>
      <li className={Styles.menu__list}>
        General Studies
        <ul className={Styles.dropdown}>
          <li className={Styles.dropdown__subList}>
            <Link to="/prelims-success-general-series">GS Practice series</Link>
          </li>
          <li className={Styles.dropdown__subList}>
            <Link to="/gs-paper1">General studies paper 1</Link>
          </li>
          <li className={Styles.dropdown__subList}>
            <Link to="/gs-paper2">General studies paper 2</Link>
          </li>
          <li className={Styles.dropdown__subList}>
            <Link to="/gs-paper3">General studies paper 3</Link>
          </li>
          <li className={Styles.dropdown__subList}>
            <Link to="/gs-paper4">General studies paper 4</Link>
          </li>
        </ul>
      </li>
      {/* <li className={Styles.menu__list}>
        <Link to="">Personality Test</Link>
      </li> */}
      <li className={Styles.menu__list}>
        Downloads
        <ul className={Styles.dropdown}>
          <li className={Styles.dropdown__subList}>
            <Link to="/results">Results</Link>
          </li>
          <li className={Styles.dropdown__subList}>
            <Link to="/union-budget-2022-23">Union Budget 2022-23</Link>
          </li>
          <li className={Styles.dropdown__subList}>
            <Link to="/interim-budget-2019-20.pdf">Interim Budget 2019-20</Link>
          </li>
          <li className={Styles.dropdown__subList}>
            <Link to="/toppers-answer-sheet">Toppers Answer Sheet</Link>
          </li>
          <li className={Styles.dropdown__subList}>
            <Link to="/epw-yojana-kurushetra">EPW Yojna Kurushetra</Link>
          </li>
          <li className={Styles.dropdown__subList}>
            <Link to="/important-articles">Important Articles</Link>
          </li>
          <li className={Styles.dropdown__subList}>
            <Link to="/current-affair">Current Affairs News Plus</Link>
          </li>
          <li className={Styles.dropdown__subList}>
            <Link to="/general-studies-material">Basic (NCERT) GS Material</Link>
          </li>
          <li className={Styles.dropdown__subList}>
            <Link to="/sociology-notes">Sociology (NOTES)</Link>
          </li>
        </ul>
      </li>
      {/* <li className={Styles.menu__list}>
        <Link to="">career</Link>
      </li> */}
      <li className={Styles.menu__list}>
        <Link to="/gallery">gallery</Link>
      </li>
      <li className={Styles.menu__list}>
        <Link to="/contact-us">contact us</Link>
      </li>
    </ul>
  );
};

export default DesktopMenu;
