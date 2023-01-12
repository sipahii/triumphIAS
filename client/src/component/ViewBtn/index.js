import React from "react";
import Styles from "./index.module.scss";

const ViewBtn = () => {
  return (
    <div className={Styles.viewBtn}>
      <button className={Styles.viewBtn__btn}>View all</button>
    </div>
  );
};

export default ViewBtn;
