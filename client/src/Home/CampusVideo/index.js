import React, { useState } from "react";
import VideoModal from "../../component/VideoModal";
import Styles from "./index.module.scss";

const CampusVideo = () => {
  const [videoModal, setVideoModal] = useState(false);
  const videoPlay = () => {
    setVideoModal(true);
  };

  const clickedCloseVideo = () => {
    setVideoModal(false);
  };

  return (
    <>
      <VideoModal closeVideo={clickedCloseVideo} isOpen={videoModal} />
      <div className={Styles.campusVideo}>
        <div className={Styles.campusVideo__container}>
          <h3>Watch Campus Life Video Tour</h3>
          <p>
            Vmply dummy text of the printing and typesetting industryorem Ipsum
            industry's standard dum an unknowramble.
          </p>

          <div
            onClick={videoPlay}
            className={Styles.campusVideo__container__videoPlayBtn}
          >
            <i className="fa-solid fa-play"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default CampusVideo;
