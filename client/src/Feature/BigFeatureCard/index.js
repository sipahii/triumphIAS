import React from "react";
import Styles from "./index.module.scss";

const BigFeatureCard = () => {
  return (
    <div className={Styles.basicSubject}>
      <div className={Styles.basicSubject__image}>
        <img src="felosphy.jpg" alt="error"></img>
        <div className={Styles.basicSubject__image__imageLayer}>
          <div className={Styles.basicSubject__image__imageLayer__icon}>
            <i className="fa-solid fa-share-nodes"></i>
          </div>
        </div>
      </div>
      <div className={Styles.basicSubject__containt}>
        <h3>Basic Philosopphy</h3>
        <p>
          Rimply dummy text of the printing and typesetting industry when an
          unknown printer took a galley scrambled.
        </p>
      </div>
    </div>
  );
};

export default BigFeatureCard;
