import React, { useState, useEffect } from "react";
import Style from "./index.module.scss";
import Container from "../component/Container";
import Tabs from "./Tabs";
import BannerChange from "./BannerChange";
import LoginPanel from "./LoginPanel";
import CourseChange from "./CourseChange";
import GalleryChange from "./GalleryChange";

const Admin = () => {
  const [login, setLogIn] = useState(false);
  const [tab, setTab] = useState("banner");

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

  const tabClicked = (tabName) => {
    setTab(tabName);
  };
  return (
    <div className={Style.admin}>
      <Container>
        {!login ? (
          <LoginPanel onLoggedIn={onLoggedIn} />
        ) : (
          <>
            <Tabs onClick={logoutHandler} tabClicked={tabClicked} />
            {tab === "banner" && <BannerChange />}
            {tab === "course" && <CourseChange />}
            {tab === "gallery" && <GalleryChange />}
          </>
        )}
      </Container>
    </div>
  );
};

export default Admin;
