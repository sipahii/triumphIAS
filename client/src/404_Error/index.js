import React from "react";
import CommanBanner from "../component/CommanBanner";
import Container from "../component/Container";
import style from "./index.module.scss";
import error from "../Assets/404.png";

const Error = () => {
  return (
    <div className={style.error_404}>
      <CommanBanner section="404 Error" />
      <Container>
        <img className={style.error_404__img} src={error} alt="" />
        <h1 className={style.error_404__h1}>Sorry!!! Page Was Not Found</h1>
        <p className={style.error_404__p}>The page you are looking is not available or has been removed. Try going to Home Page by using the button below.</p>
        <button className={style.error_404__btn}>Go To Home Page</button>
      </Container>
    </div>
  );
};

export default Error;
