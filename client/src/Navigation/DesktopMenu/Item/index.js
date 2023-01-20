import React, { useState } from "react";
import Styles from "./index.module.scss";

const Item = (props) => {
  const [addClass, setAddClass] = useState(false);

  const addOnHover = () => {
    setAddClass(true);
  };

  const removeHover = () => {
    setAddClass(false);
  };

  const hide = () => {
    setAddClass(false);
  };

  return (
    <li onMouseOver={addOnHover} onMouseLeave={removeHover} className={`${Styles.list} ${props.class}`}>
      {props.name}
      <ul onClick={hide} className={`${addClass ? Styles.subDropdownHover : Styles.dropdown}`}>
        {props.children}
      </ul>
    </li>
  );
};

export default Item;
