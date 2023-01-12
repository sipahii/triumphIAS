import React from "react";
import Styles from "./index.module.scss";
import ReactOwlCrousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import Image from "../../Assets/videoBg.webp";
import Image1 from "../../Assets/videoBg.webp";
import Image2 from "../../Assets/videoBg.webp";
import Image3 from "../../Assets/videoBg.webp";
import Image4 from "../../Assets/videoBg.webp";

const Banner = () => {
  const options = {
    margin: 30,
    nav: false,
    dots: false,
    loop: true,
    fade: 100,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 1500,
    responsive: {
      0: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };
  return (
    <>
      <div className={Styles.mainBanner}>
        <ReactOwlCrousel className="owl-theme slider" {...options}>
          <div className="item">
            <div className={Styles.mainBanner__bannerImages}>
              <img src={Image} alt="" />
              <div className={Styles.mainBanner__bannerImages__content}>
                <h1 className={Styles.mainBanner__title} id="title1">
                  Best Education For UI Design
                </h1>

                <p className={Styles.mainBanner__desc} id="desc1">
                  Emply dummy text of the printing and typesetting industry orem
                  Ipsum has been the industry's standard dummy text ever
                  sinceprinting and typesetting industry.
                </p>

                <button id="button1" className={Styles.mainBanner__startBtn}>
                  start a course
                </button>
              </div>
            </div>
          </div>

          <div className="item">
            <div className={Styles.mainBanner__bannerImages}>
              <img src={Image1} alt="" />
              <div className={Styles.mainBanner__bannerImages__content}>
                <h1 className={Styles.mainBanner__title} id="title2">
                  Best Education For HTML Templates
                </h1>

                <p className={Styles.mainBanner__desc} id="desc2">
                  Emply dummy text of the printing and typesetting industry orem
                  Ipsum has been the industry's standard dummy text ever
                  sinceprinting and typesetting industry.
                </p>

                <button id="button2" className={Styles.mainBanner__startBtn}>
                  start a course
                </button>
              </div>
            </div>
          </div>
          <div className="item">
            <div className={Styles.mainBanner__bannerImages}>
              <img src={Image2} alt="" />
              <div className={Styles.mainBanner__bannerImages__content}>
                <h1 className={Styles.mainBanner__title} id="title3">
                  Best Education For PHP
                </h1>

                <p className={Styles.mainBanner__desc} id="desc3">
                  Emply dummy text of the printing and typesetting industry orem
                  Ipsum has been the industry's standard dummy text ever
                  sinceprinting and typesetting industry.
                </p>

                <button id="button3" className={Styles.mainBanner__startBtn}>
                  start a course
                </button>
              </div>
            </div>
          </div>

          <div className="item">
            <div className={Styles.mainBanner__bannerImages}>
              <img src={Image3} alt="" />
              <div className={Styles.mainBanner__bannerImages__content}>
                <h1 className={Styles.mainBanner__title} id="title4">
                  Best Education For PHP
                </h1>

                <p className={Styles.mainBanner__desc} id="desc4">
                  Emply dummy text of the printing and typesetting industry orem
                  Ipsum has been the industry's standard dummy text ever
                  sinceprinting and typesetting industry.
                </p>

                <button id="button4" className={Styles.mainBanner__startBtn}>
                  start a course
                </button>
              </div>
            </div>
          </div>

          <div className="item">
            <div className={Styles.mainBanner__bannerImages}>
              <img src={Image4} alt="" />
              <div className={Styles.mainBanner__bannerImages__content}>
                <h1 className={Styles.mainBanner__title} id="title5">
                  Best Education For PHP
                </h1>

                <p className={Styles.mainBanner__desc} id="desc5">
                  Emply dummy text of the printing and typesetting industry orem
                  Ipsum has been the industry's standard dummy text ever
                  sinceprinting and typesetting industry.
                </p>

                <button id="button5" className={Styles.mainBanner__startBtn}>
                  start a course
                </button>
              </div>
            </div>
          </div>
        </ReactOwlCrousel>
      </div>
    </>
  );
};

export default Banner;
