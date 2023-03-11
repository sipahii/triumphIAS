import React from "react";
import Styles from "./index.module.scss";
import CommanHeading from "../../component/CommanHeading";

const TabArea = () => {
  return (
    <>
      <div className={Styles.courcesPage}>
        <div className={Styles.courcesPage__tabContant}>
          <CommanHeading heading="Course Features" />

          <div className={Styles.courcesPage__tabContant__item1}>
            <ul className={Styles.courcesPage__tabContant__item1__courceFeatures}>
              <li>Start: 01 January, 2017</li>
              <li>Total Classes : 100</li>
              <li>Class: Sunday - Monday</li>
              <li>Total Credits: 150</li>
              <li>Course Duration: 3 Month</li>
              <li>Seats Available: 200</li>
              <li>Lecturer: 03</li>
              <li>Class Time: 10 am - 11.00 am</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default TabArea;
