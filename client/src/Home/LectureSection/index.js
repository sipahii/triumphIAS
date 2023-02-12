import React from "react";
import LecturerCard from "./LecturerCard";
import Styles from "./index.module.scss";
import ReactOwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import l1 from "../../Assets/l1.webp";
import l2 from "../../Assets/l2.webp";
import l3 from "../../Assets/l3.webp";
import l4 from "../../Assets/l4.webp";
import Container from "../../component/Container";

const LecturerSection = () => {
  const options = {
    margin: 30,
    nav: false,
    navText: [
      '<i class="fa-solid fa-angle-left"></i>',
      '<i class="fa-solid fa-angle-right"></i>',
    ],
    dots: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 6000,
    responsive: {
      0: {
        items: 2,
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
          <h2>Our Skilled Lecturers</h2>
          <div className={Styles.lecturerSection__container__body}>
            <ReactOwlCarousel className="owl-theme" {...options}>
              <div className="item">
                <LecturerCard src={l1} profName="Kazi Fahim" icon1="fa-regular fa-envelope" icon2="fa-brands fa-linkedin-in" icon3="fa-brands fa-twitter" icon4="fa-brands fa-facebook-f" />
              </div>
              <div className="item">
                <LecturerCard src={l2} profName="Rosy Jane" icon1="fa-regular fa-envelope" icon2="fa-brands fa-linkedin-in" icon3="fa-brands fa-twitter" icon4="fa-brands fa-facebook-f" />
              </div>
              <div className="item">
                <LecturerCard src={l3} profName="Mike Hussy" icon1="fa-regular fa-envelope" icon2="fa-brands fa-linkedin-in" icon3="fa-brands fa-twitter" icon4="fa-brands fa-facebook-f" />
              </div>
              <div className="item">
                <LecturerCard src={l4} profName="Daziy Miller" icon1="fa-regular fa-envelope" icon2="fa-brands fa-linkedin-in" icon3="fa-brands fa-twitter" icon4="fa-brands fa-facebook-f" />
              </div>
              <div className="item">
                <LecturerCard src={l1} profName="Kazi Fahim" icon1="fa-regular fa-envelope" icon2="fa-brands fa-linkedin-in" icon3="fa-brands fa-twitter" icon4="fa-brands fa-facebook-f" />
              </div>
              <div className="item">
                <LecturerCard src={l2} profName="Rosy Jane" icon1="fa-regular fa-envelope" icon2="fa-brands fa-linkedin-in" icon3="fa-brands fa-twitter" icon4="fa-brands fa-facebook-f" />
              </div>
              <div className="item">
                <LecturerCard src={l3} profName="Mike Hussy" icon1="fa-regular fa-envelope" icon2="fa-brands fa-linkedin-in" icon3="fa-brands fa-twitter" icon4="fa-brands fa-facebook-f" />
              </div>
              <div className="item">
                <LecturerCard src={l4} profName="Daziy Miller" icon1="fa-regular fa-envelope" icon2="fa-brands fa-linkedin-in" icon3="fa-brands fa-twitter" icon4="fa-brands fa-facebook-f" />
              </div>
            </ReactOwlCarousel>
          </div>
        </Container>
      </div>
    </>
  );
};

export default LecturerSection;
