import React from "react";
import Styles from "./index.module.scss";

const LecturerCard = (props) => {
  return (
    <div className={Styles.lecturerCard}>
      <div className={Styles.lecturerCard__top}>
        <img src={props.src} alt="" />
      </div>
      <div className={Styles.lecturerCard__middle}>
        <h3>{props.profName}</h3>
        <p>Senior Finance Lecturer</p>
      </div>
      <div className={Styles.lecturerCard__bottom}>
        <ul>
          <li>
            <i className="fa-regular fa-envelope"></i>
          </li>
          <li>
            <i className="fa-brands fa-linkedin-in"></i>
          </li>
          <li>
            <i className="fa-brands fa-twitter"></i>
          </li>
          <li>
            <i className="fa-brands fa-facebook-f"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LecturerCard;
