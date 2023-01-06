import React from "react";
import styles from "./index.module.scss";

const QuotesArea = (props) => {
  return (
    <div className={styles.quotesArea}>
      <div className={styles.quotesArea__name}>{props.name}</div>
      <div className={styles.quotesArea__occupation}>{props.occupation}</div>
      <div className={styles.quotesArea__quotesWrapper}>
        <p className={styles.quotesArea__quotesWrapper__quotes}>
          {props.quotes}
        </p>
        <div className={styles.quotesArea__quotesWrapper__userImg}>
          <img src={props.user} alt="user_image" />
        </div>
      </div>
    </div>
  );
};

export default QuotesArea;
