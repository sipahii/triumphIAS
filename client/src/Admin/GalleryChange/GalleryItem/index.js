import React from "react";
import style from "./index.module.scss";
import useImage from "../../../hooks/useImage";

const GalleryItem = () => {
  const { showError, imageUploadHandler } = useImage(props);

  return (
    <>
      <div className={style.galleryItem}>
        <input onChange={imageUploadHandler} type="file" />
        {showError === true ? <p className={style.galleryItem__error}>Please Upload Image Less Than Equal To 100KB.</p> : <p className={style.galleryItem__note}>NOTE:- Supports Only (.webp) Images</p>}
      </div>
    </>
  );
};

export default GalleryItem;
