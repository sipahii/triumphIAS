import React, { useState } from "react";
import Styles from "./index.module.scss";
import TabList from "./TabItem";

const TabItem = (props) => {
  const [active, setActive] = useState("ALL");
  const showRelatedCourseHandler = (name) => {
    props.relatedCourseChangehandler(name);
    setActive(name);
  };

  return (
    <>
      <div className={Styles.coursesTabArea}>
        <div className={Styles.coursesTabArea__tablistArea}>
          <ul>
            <TabList
              className={active === "ALL" ? Styles.activeTab : Styles.list}
              tabList="ALL"
              showRelatedCourse={showRelatedCourseHandler}
            />
            <TabList
              tabList="DIPLOMA"
              className={active === "DIPLOMA" ? Styles.activeTab : Styles.list}
              showRelatedCourse={showRelatedCourseHandler}
            />
            <TabList
              tabList="CSS"
              showRelatedCourse={showRelatedCourseHandler}
              className={active === "CSS" ? Styles.activeTab : Styles.list}
            />
            <TabList
              tabList="MATHEMATICS"
              showRelatedCourse={showRelatedCourseHandler}
              className={active === "MATHEMATICS" ? Styles.activeTab : Styles.list}
            />
            <TabList
              tabList="ENGLISH"
              showRelatedCourse={showRelatedCourseHandler}
              className={active === "ENGLISH" ? Styles.activeTab : Styles.list}
            />
            <TabList
              tabList="MEDICAL"
              showRelatedCourse={showRelatedCourseHandler}
              className={active === "MEDICAL" ? Styles.activeTab : Styles.list}
            />
          </ul>
        </div>
      </div>
    </>
  );
};
export default TabItem;
