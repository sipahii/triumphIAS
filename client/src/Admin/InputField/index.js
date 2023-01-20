import React from "react";
import style from "./index.module.scss";

const InputField = (props) => {
  return (
    <div className={style.content}>
      <label htmlFor={props.id}>
        {props.fieldType}
        <p>{props.required}</p>
      </label>
      <input className={style.content__input} onChange={props.onChange} type={props.type} id={props.id} />
    </div>
  );
};

export default InputField;
