import React from "react";
import style from "./index.module.scss";
import useImage from "../../../hooks/useImage";

const CourseImg = (props) => {
  const { showError, imageUploadHandler } = useImage(props);

  return (
    <>
      <div className={style.uploadCourseImg}>
        <input onChange={imageUploadHandler} type="file" />
        {showError === true ? <p className={style.uploadBanner__error}>Please Upload Image Less Than Equal To 100KB.</p> : <p className={style.uploadBanner__note}>NOTE:- Supports Only (.webp) Images</p>}
      </div>
    </>
  );
};

export default CourseImg;
