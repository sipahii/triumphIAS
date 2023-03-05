import React from "react";
import Styles from "./index.module.scss";
import Image3 from "../../Assets/sideBar.jpg";
const ApplyNow = () => {
  return (
    <div className={Styles.courcesPage}>
      <div className={Styles.courcesPage__sideBarBox}>
        <div className={Styles.courcesPage__sideBarBox__image}>
          <img src={Image3} alt="nature" />
          <span>Apply Now</span>
        </div>
      </div>
    </div>
  );
};
export default ApplyNow;
