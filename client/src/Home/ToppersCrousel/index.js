import React from "react";
import ToppersCard from "./ToppersCard";
import Styles from "./index.module.scss";
import ReactOwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Container from "../../component/Container";

const ToppersCrousel = (props) => {
  const options = {
    margin: 30,
    nav: false,
    navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
    dots: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 6000,
    smartSpeed: 1500,
    responsive: {
      0: {
        items: 1,
      },
      525: {
        items: 3,
      },
      767: {
        items: 4,
      },
      1200: {
        items: 5,
      },
    },
  };
  return (
    <>
      <div className={Styles.lecturerSection}>
        <Container>
          <h2>{props.title}</h2>
          <div className={Styles.lecturerSection__container__body}>
            <ReactOwlCarousel className="owl-theme" {...options}>
              <div className="item">
                <ToppersCard src={props.src1} profName="Kazi Fahim" icon1="fa-regular fa-envelope" icon2="fa-brands fa-linkedin-in" icon3="fa-brands fa-twitter" icon4="fa-brands fa-facebook-f" />
              </div>
              <div className="item">
                <ToppersCard src={props.src2} profName="Rosy Jane" icon1="fa-regular fa-envelope" icon2="fa-brands fa-linkedin-in" icon3="fa-brands fa-twitter" icon4="fa-brands fa-facebook-f" />
              </div>
              <div className="item">
                <ToppersCard src={props.src3} profName="Mike Hussy" icon1="fa-regular fa-envelope" icon2="fa-brands fa-linkedin-in" icon3="fa-brands fa-twitter" icon4="fa-brands fa-facebook-f" />
              </div>
              <div className="item">
                <ToppersCard src={props.src4} profName="Daziy Miller" icon1="fa-regular fa-envelope" icon2="fa-brands fa-linkedin-in" icon3="fa-brands fa-twitter" icon4="fa-brands fa-facebook-f" />
              </div>
              <div className="item">
                <ToppersCard src={props.src5} profName="Kazi Fahim" icon1="fa-regular fa-envelope" icon2="fa-brands fa-linkedin-in" icon3="fa-brands fa-twitter" icon4="fa-brands fa-facebook-f" />
              </div>
              <div className="item">
                <ToppersCard src={props.src6} profName="Rosy Jane" icon1="fa-regular fa-envelope" icon2="fa-brands fa-linkedin-in" icon3="fa-brands fa-twitter" icon4="fa-brands fa-facebook-f" />
              </div>
              <div className="item">
                <ToppersCard src={props.src7} profName="Mike Hussy" icon1="fa-regular fa-envelope" icon2="fa-brands fa-linkedin-in" icon3="fa-brands fa-twitter" icon4="fa-brands fa-facebook-f" />
              </div>
            </ReactOwlCarousel>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ToppersCrousel;
