import React from "react";
import Styles from "./index.module.scss";

const GallaryImage = (props) => {
  return (
    <>
      <div className={Styles.gallaryImageCard}>
        <img src={props.imageSrc} alt="error"></img>
        <div className={Styles.gallaryImageCard__imageLayer}>
          <span>
            <i className="fa-solid fa-link"></i>
          </span>
        </div>
      </div>
    </>
  );
};
export default GallaryImage;
