import React from "react";
import Style from "./index.module.scss";
import Container from "../component/Container";
import Tabs from "./Tabs";
import BannerChange from "./BannerChange";

const Admin = () => {
  return (
    <div className={Style.admin}>
      <Container>
        <Tabs />
        <BannerChange />
      </Container>
    </div>
  );
};

export default Admin;
