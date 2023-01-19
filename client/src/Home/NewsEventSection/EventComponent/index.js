import React from "react";
import Styles from "./index.module.scss";

const EventComponent = (props) => {
  return (
    <div className={Styles.eventComponent}>
      <div className={Styles.eventComponent__left}>
        <div className={Styles.eventComponent__left__box}>
          <div className={Styles.eventComponent__left__box__top}>
            <h3>26</h3>
            <p>JAN</p>
          </div>
          <div className={Styles.eventComponent__left__box__bottom}>
            <p>2017</p>
          </div>
        </div>
      </div>
      <div className={Styles.eventComponent__right}>
        <div className={Styles.eventComponent__right__top}>
          <h4>{props.heading}</h4>
          <p>Pellentese turpis dignissim amet area ducation process facilitating Knowledge. Pellentese turpis dignissim amet area ducation process facilitating Knowledge. Pellentese turpis dignissim amet area ducation.</p>
        </div>
        <div className={Styles.eventComponent__right__bottom}>
          <h3>04:00 PM - 06:00 PM</h3>
          <h5>Australia , Melborn</h5>
        </div>
      </div>
    </div>
  );
};

export default EventComponent;
