import React from "react";
import Styles from "./index.module.scss";

const NewsComponent = (props) => {
  return (
    <div className={Styles.newsComponent}>
      <div className={Styles.newsComponent__left}>
        <img src={props.src} alt="" />
      </div>
      <div className={Styles.newsComponent__right}>
        <div className={Styles.newsComponent__right__top}>
          <h6>{props.newsHeading}</h6>
          <p>June 15, 2017</p>
        </div>
        <div className={Styles.newsComponent__right__bottom}>
          <p>
            Pellentese turpis dignissim amet area ducation process facilitating
            Knowledge.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsComponent;
