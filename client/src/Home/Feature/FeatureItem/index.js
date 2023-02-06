import React from "react";
import Styles from "./index.module.scss";
const Item = (props) => {
  return (
    <>
      <div className={Styles.seprateSubjectArea}>
        <div className={Styles.seprateSubjectArea__image}>
          <img src={props.imageSrc} alt="error"></img>
          <div className={Styles.seprateSubjectArea__image__layer}>
            <div className={Styles.seprateSubjectArea__image__layer__icon}>
              <i className="fa-solid fa-share-nodes"></i>
            </div>
          </div>
        </div>
        <div className={Styles.seprateSubjectArea__contant}>
          <h3>{props.hedding}</h3>
          <p>{props.para}</p>
        </div>
      </div>
    </>
  );
};
export default Item;
