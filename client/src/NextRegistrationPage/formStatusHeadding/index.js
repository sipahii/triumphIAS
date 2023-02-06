import React from "react";
import Styles from "./index.module.scss";
const StatusHeadding = (props) => {
  return (
    <>
      <div className={Styles.messageArea}>
        <h3>{props.message}</h3>
      </div>
    </>
  );
};
export default StatusHeadding;
