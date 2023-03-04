import React from "react";
import Styles from "./index.module.scss";

const GallaryImage = (props) => {
  return (
    <>
      <div className={Styles.GallaryImageItem}>
        <div className={Styles.GallaryImageItem__gallaryImageCard}>
          <img src={props.imageSrc} alt="error"></img>
          <div className={Styles.GallaryImageItem__gallaryImageCard__imageLayer}>
            <span>
              <i className="fa-solid fa-link"></i>
            </span>
          </div>
        </div>
        <div className={Styles.GallaryImageItem__GallaryItemDetail}>
          <p>
            Name : <span>{props.name}</span>
          </p>
          <p>
            Year : <span>{props.year}</span>
          </p>
          <p>
            Catagory : <span>{props.catagory}</span>
          </p>
        </div>
      </div>
    </>
  );
};
export default GallaryImage;
