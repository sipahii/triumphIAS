import React from "react";
import Styles from "./index.module.scss";

const TabList = (props) => {
  return (
    <li
      className={`${Styles.list} ${props.className}`}
      onClick={() => props.showRelatedCourse(props.tabList)}
    >
      {props.tabList}
    </li>
  );
};

export default TabList;
