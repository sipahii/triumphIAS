import React from "react";
import Container from "../../component/Container";
import InputField from "../InputField";
import style from "./index.module.scss";

const LoginPanel = () => {
  const emailInputHandler = () => {};
  const passwordInputHandler = () => {};
  return (
    <Container>
      <div className={style.loginPanel}>
        <h2 className={style.loginPanel__title}>Login</h2>
        <InputField type="text" fieldType="Username or Email Address" required="*" onChange={emailInputHandler} />
        <InputField type="password" fieldType="Password" required="*" onChange={passwordInputHandler} />
        <h4 className={style.loginPanel__lost}>Lost Your Password?</h4>
        <div className={style.loginPanel__bottom}>
          <div className={style.loginPanel__bottom__checkbox}>
            <input className={style.loginPanel__bottom__checkbox__input} type="checkbox" />
            <p className={style.loginPanel__bottom__checkbox__remember}>Remember Me</p>
          </div>
          <div className={style.loginPanel__bottom__buttons}>
            <button>Login</button>
            <button>Cancel</button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LoginPanel;
