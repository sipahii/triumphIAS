import React from "react";
import Styles from "./index.module.scss";

const BookCard = (props) => {
  return (
    <div className={Styles.bookCard}>
      <div className={Styles.bookCard__top}>
        <img src={props.src} alt="" />
        <div className={Styles.bookCard__top__button}>
          <button className={Styles.bookCard__top__button__buyBtn}>
            {props.type}
          </button>
        </div>
      </div>
      <div className={Styles.bookCard__middle}>
        <h3 className={Styles.bookCard__middle__bookName}>{props.bookName}</h3>
      </div>
      <div className={Styles.bookCard__bottom}>
        <h4 className={Styles.bookCard__bottom__price}>{props.price}</h4>
      </div>
    </div>
  );
};

export default BookCard;
