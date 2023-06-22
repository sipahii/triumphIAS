import React from "react";
import style from "./index.module.scss";

const CourseCard = (props) => {
  return (
    <div style={{ width: `${props.width}`, height: `${props.height}`, backgroundColor: `${props.backgroundcolor}`, color: `${props.color}`, border: `1px solid ${props.backgroundcolor}`, padding: `${props.padding}` }} className={style.courseCard}>
      <h1 className={style.courseCard__h1}>
        {props.first}
        <br />
        {props.last}
      </h1>
      <button className={style.courseCard__btn}>Read More</button>
    </div>
  );
};

export default CourseCard;
