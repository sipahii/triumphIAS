import React from "react";
import style from "./index.module.scss";

const RequestCallback = () => {
  return (
    <div className={style.requestCallback}>
      <h1 className={style.requestCallback__title}>
        Join <span>Triumph</span> IAS
      </h1>
      <div className={style.requestCallback__form}>
        <input className={style.requestCallback__form__input} type="text" placeholder="Your Name" />
        <input className={style.requestCallback__form__input} type="phone" placeholder="Your Phone" />
        <input className={style.requestCallback__form__input} type="email" placeholder="Your Email" />
        <input className={style.requestCallback__form__input} type="text" placeholder="Any Question? Write Here" />
      </div>
      <button className={style.requestCallback__btn}>Register Now</button>
    </div>
  );
};

export default RequestCallback;
