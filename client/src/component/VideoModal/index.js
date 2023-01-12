import React from "react";
import ReactDOM from "react-dom";
import Styles from "./index.module.scss";
import CourseVideo from "../../Assets/campusVideo.mp4";
import Container from "../Container";

const VideoModalOverlay = (props) => {
  return (
    props.isOpen && (
      <div className={Styles.videoModal}>
        <div onClick={props.closeVideo} className={Styles.videoModal__closeBtn}>
          <i className="fa-solid fa-xmark"></i>
        </div>
        <Container>
          <video controls>
            <source src={CourseVideo} type="video/mp4" />
          </video>
        </Container>
      </div>
    )
  );
};

const VideoModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <VideoModalOverlay
          closeVideo={props.closeVideo}
          isOpen={props.isOpen}
        />,
        document.getElementById("videoRoot")
      )}
    </React.Fragment>
  );
};

export default VideoModal;
