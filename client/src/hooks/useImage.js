import { useState } from "react";

const useImage = (props) => {
  const [showError, setShowError] = useState(false);
  const [show, setShow] = useState(false);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [startDate, setStartDate] = useState("");
  const imageUploadHandler = (event) => {
    if (event.target.files[0].size >= 100000) {
      setShowError(true);
      return;
    }
    setShowError(false);
    let banner = URL.createObjectURL(event.target.files[0]);
    props.imageShowHandler(banner);
  };

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const descChangeHandler = (event) => {
    setDesc(event.target.value);
  };
  const startDateChangeHandler = (event) => {
    setStartDate(event.target.value);
  };

  const imageShowHandler = (image) => {
    setShow(true);
    setImage(image);
  };

  return {
    showError,
    imageUploadHandler,
    titleChangeHandler,
    descChangeHandler,
    startDateChangeHandler,
    imageShowHandler,
    show,
    image,
    title,
    desc,
    startDate,
  };
};

export default useImage;
