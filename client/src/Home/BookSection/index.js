import React from "react";
import ReactOwlCarousel from "react-owl-carousel";
import BookCard from "../BookSection/BookCard";
import "owl.carousel/dist/assets/owl.carousel.css";
import Styles from "./index.module.scss";
import b1 from "../../Assets/b1.jpg";
import b2 from "../../Assets/b2.jpg";
import b3 from "../../Assets/b3.jpg";
import b4 from "../../Assets/b4.jpg";

const BookSection = () => {
  const options = {
    margin: 30,
    dots: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 6000,
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  };
  return (
    <>
      <div className={Styles.bookSection}>
        <div className={Styles.bookSection__container}>
          <h2>Our Publications</h2>
          <div className={Styles.bookSection__container__body}>
            <ReactOwlCarousel className="owl-theme" {...options}>
              <div className="item">
                <BookCard src={b1} bookName="GMAT" price="$250" />
              </div>
              <div className="item">
                <BookCard src={b2} bookName="Finance Book" price="$430" />
              </div>
              <div className="item">
                <BookCard src={b3} bookName="Service Marketing" price="$190" />
              </div>
              <div className="item">
                <BookCard src={b4} bookName="Robert-Philosphy" price="$330" />
              </div>
              <div className="item">
                <BookCard src={b1} bookName="GMAT" price="$250" />
              </div>
              <div className="item">
                <BookCard src={b2} bookName="Finance Book" price="$430" />
              </div>
              <div className="item">
                <BookCard src={b3} bookName="Service Marketing" price="$190" />
              </div>
              <div className="item">
                <BookCard src={b4} bookName="Robert-Philosphy" price="$330" />
              </div>
            </ReactOwlCarousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookSection;
