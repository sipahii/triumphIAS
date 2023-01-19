import React from "react";
import Style from "./index.module.scss";
import Container from "../component/Container";
import Tabs from "./Tabs";
import BannerChange from "./BannerChange";
import LoginPanel from "./LoginPanel";

const Admin = () => {
  return (
    <div className={Style.admin}>
      <Container>
        <LoginPanel />
        <Tabs />
        <BannerChange />
      </Container>
    </div>
  );
};

export default Admin;
