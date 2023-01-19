import React from "react";
import Styles from "./index.module.scss";
import Container from "../../component/Container";
import GallaryImage from "./gallaryImage";

const GallaryAlbume = () => {
  const images = [
    "course1.jpg",
    "course2.jpg",
    "course3.jpg",
    "course4.jpg",
    "course5.jpg",
    "course6.jpg",
    "course7.jpg",
    "course8.jpg",
    "course4.jpg",
    "course1.jpg",
  ];

  return (
    <Container>
      <div className={Styles.gallaryAlbumArea}>
        <div className={Styles.gallaryAlbumArea__gallaryCard}>
          {images.map((img) => {
            return <GallaryImage imageSrc={img} />;
          })}
        </div>
      </div>
    </Container>
  );
};
export default GallaryAlbume;
