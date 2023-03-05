import React from "react";
import ReactDOM from "react-dom";
import Styles from "./index.module.scss";

const VideoModalOverlay = (props) => {
  return (
    props.isOpen && (
      <div className={Styles.videoModal}>
        <div className={Styles.videoModal__video}>
          <div onClick={props.closeVideo} className={Styles.videoModal__video__closeBtn}>
            <i className="fa-solid fa-xmark"></i>
          </div>

          <iframe title="ias" src="https://www.youtube.com/embed/iItgZuFPOUw?start=333"></iframe>
        </div>
      </div>
    )
  );
};

const VideoModal = (props) => {
  return <React.Fragment>{ReactDOM.createPortal(<VideoModalOverlay closeVideo={props.closeVideo} isOpen={props.isOpen} />, document.getElementById("videoRoot"))}</React.Fragment>;
};

export default VideoModal;
