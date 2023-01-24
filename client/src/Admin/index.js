import React, { useState, useEffect } from "react";
import Style from "./index.module.scss";
import Container from "../component/Container";
import Tabs from "./Tabs";
import BannerChange from "./BannerChange";
import LoginPanel from "./LoginPanel";

const Admin = () => {
  const [login, setLogIn] = useState(false);

  const onLoggedIn = (username, password) => {
    localStorage.setItem(username, password);
    setLogIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("mustafa@gmail.com");
    setLogIn(false);
  };

  useEffect(() => {
    const userLoggedIn = localStorage.getItem("mustafa@gmail.com");

    if (userLoggedIn === "123456") {
      setLogIn(true);
    }
  }, []);
  return (
    <div className={Style.admin}>
      <Container>
        {!login ? (
          <LoginPanel onLoggedIn={onLoggedIn} />
        ) : (
          <>
            <Tabs onClick={logoutHandler} />
            <BannerChange />
          </>
        )}
      </Container>
    </div>
  );
};

export default Admin;
