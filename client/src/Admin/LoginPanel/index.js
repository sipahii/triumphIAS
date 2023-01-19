import React, { useState } from "react";
import Container from "../../component/Container";
import InputField from "../InputField";
import style from "./index.module.scss";

const LoginPanel = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorUsername, setErrorUsername] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const emailInputHandler = (event) => {
    setUsername(event.target.value);
    setErrorUsername(false);
    setFormIsValid(event.target.value.includes("@") && password.trim().length >= 6);
  };
  const passwordInputHandler = (event) => {
    setPassword(event.target.value);
    setErrorPassword(false);
    setFormIsValid(event.target.value.trim().length >= 6 && username.includes("@"));
  };

  const rememberHandler = (event) => {
    if (event.target.checked) {
    }
  };

  const loginHandler = () => {
    if (username.trim() === "" && password.trim().length > 6) {
      setErrorUsername(true);
      setErrorPassword(true);
      return;
    }
    props.onLoggedIn(username, password);
  };

  return (
    <Container>
      <div className={style.loginPanel}>
        <h2 className={style.loginPanel__title}>Login</h2>
        <InputField id="username" type="text" fieldType="Username or Email Address" required="*" onChange={emailInputHandler} />
        {errorUsername && <p>Please Enter A Valid Username!</p>}
        <InputField id="password" type="password" fieldType="Password" required="*" onChange={passwordInputHandler} />
        {errorPassword && <p>Password Length Must Be Greater Than Equal To 6</p>}
        <div className={style.loginPanel__bottom}>
          <div className={style.loginPanel__bottom__checkbox}>
            <input onChange={rememberHandler} className={style.loginPanel__bottom__checkbox__input} type="checkbox" />
            <p className={style.loginPanel__bottom__checkbox__remember}>Remember Me</p>
          </div>
          <div className={style.loginPanel__bottom__buttons}>
            <button onClick={loginHandler} disabled={!formIsValid}>
              Login
            </button>
            <button>Back To Home</button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LoginPanel;
