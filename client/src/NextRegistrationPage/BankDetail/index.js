import React from "react";
import Styles from "./index.module.scss";
const BankDetail = (props) => {
  return (
    <div className={Styles.listsection}>
      <ul>
        <li>
          {props.name}
          <span>{props.detail}</span>
        </li>
      </ul>
    </div>
  );
};
export default BankDetail;
