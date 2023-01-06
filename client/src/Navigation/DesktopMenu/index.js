import React from "react";
import Styles from "./index.module.scss";

const DesktopMenu = () => {
  return (
    <ul className={Styles.menu}>
      <li className={Styles.menu__list}>
        home
        <ul className={Styles.dropdown}>
          <li className={Styles.dropdown__subList}>home1</li>
          <li className={Styles.dropdown__subList}>home2</li>
          <li className={Styles.dropdown__subList}>home3</li>
          <li className={Styles.dropdown__subList}>home4</li>
        </ul>
      </li>
      <li className={Styles.menu__list}>
        pages
        <ul className={Styles.dropdown}>
          <li className={Styles.dropdown__subList1}>
            <p>about 1</p>
            <p>about 2</p>
            <p>about 3</p>
            <p>about 4</p>
          </li>
        </ul>
      </li>
      <li className={Styles.menu__list}>
        courses
        <ul className={Styles.dropdown}>
          <li className={Styles.dropdown__subList}>courses 1</li>
          <li className={Styles.dropdown__subList}>courses 2</li>
          <li className={Styles.dropdown__subList}>courses 3</li>
          <li className={Styles.dropdown__subList}>course details 1</li>
          <li className={Styles.dropdown__subList}>course details 2</li>
          <li className={Styles.dropdown__subList}>course details 3</li>
        </ul>
      </li>
      <li className={Styles.menu__list}>
        research
        <ul className={Styles.dropdown}>
          <li className={Styles.dropdown__subList}>research 1</li>
          <li className={Styles.dropdown__subList}>research 2</li>
          <li className={Styles.dropdown__subList}>research 3</li>
          <li className={Styles.dropdown__subList}>research deatils</li>
        </ul>
      </li>
      <li className={Styles.menu__list}>
        news
        <ul className={Styles.dropdown}>
          <li className={Styles.dropdown__subList}>
            news <i className="fa-solid fa-chevron-right"></i>
            <ul className={Styles.subDropdown}>
              <li className={Styles.subDropdown__subListDown}>news 1</li>
              <li className={Styles.subDropdown__subListDown}>news 2</li>
              <li className={Styles.subDropdown__subListDown}>news details</li>
            </ul>
          </li>
          <li className={Styles.dropdown__subList}>
            event <i className="fa-solid fa-chevron-right"></i>
            <ul className={Styles.subDropdown}>
              <li className={Styles.subDropdown__subListDown}>event</li>
              <li className={Styles.subDropdown__subListDown}>event details</li>
            </ul>
          </li>
        </ul>
      </li>
      <li className={Styles.menu__list}>
        gallery
        <ul className={Styles.dropdown}>
          <li className={Styles.dropdown__subList}>gallery 1</li>
          <li className={Styles.dropdown__subList}>gallery 2</li>
        </ul>
      </li>
      <li className={Styles.menu__list}>
        contact
        <ul className={Styles.dropdown}>
          <li className={Styles.dropdown__subList}>contact 1</li>
          <li className={Styles.dropdown__subList}>contact 2</li>
        </ul>
      </li>
    </ul>
  );
};

export default DesktopMenu;
