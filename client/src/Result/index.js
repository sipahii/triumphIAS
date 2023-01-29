import React, { useState } from "react";
import Styles from './index.module.scss'
import Image1 from "../Assets/result-2011-15.jpeg"
import Image2 from "../Assets/result-2016.jpeg";
import Image3 from "../Assets/result-2017.jpeg";
import Image4 from "../Assets/result-2018.jpeg";
import Image5 from "../Assets/result-2019.jpeg";
import Image6 from "../Assets/result-2020.jpeg";
import Image7 from "../Assets/result-2021(1).jpeg";
import Image8 from "../Assets/result-2021(1).jpeg";


import Container from "../component/Container";


const Result = () => {
  const [show, setShow] = useState("Result 2011-12");
  const [active, setActive] = useState("Result 2011-12");
  const menuChangeHandler = (name) => {
    setShow(name);
    setActive(name);
  };
  return (
    <>
      <Container>
        <div className={Styles.courcesPage}>
          <div className={Styles.courcesPage__tabArea}>
            <div className={Styles.courcesPage__tabArea__wrap}>
              <ul className={Styles.courcesPage__tabArea__wrap__tabNav}>
                <li
                  className={`${Styles.list} ${active === "Result 2011-12" ? Styles.active : ""
                    }`}
                  onClick={() => menuChangeHandler("Result 2011-12")}>
                  Result 2011-12
                </li>
                <li
                  className={`${Styles.list} ${active === "Result 2016" ? Styles.active : ""
                    }`}
                  onClick={() => menuChangeHandler("Result 2016")}>
                  Result 2016
                </li>
                <li
                  className={`${Styles.list} ${active === "Result 2017" ? Styles.active : ""
                    }`}
                  onClick={() => menuChangeHandler("Result 2017")}>
                  Result 2017

                </li>
                <li
                  className={`${Styles.list} ${active === "Result 2018" ? Styles.active : ""
                    }`}
                  onClick={() => menuChangeHandler("Result 2018")}>
                  Result 2018

                </li>
                <li
                  className={`${Styles.list} ${active === "Result 2019" ? Styles.active : ""
                    }`}
                  onClick={() => menuChangeHandler("Result 2019")}>
                  Result 2019

                </li>
                <li
                  className={`${Styles.list} ${active === "Result 2020" ? Styles.active : ""
                    }`}
                  onClick={() => menuChangeHandler("Result 2020")}>
                  Result 2020

                </li>
                <li
                  className={`${Styles.list} ${active === "Result 2021" ? Styles.active : ""
                    }`}
                  onClick={() => menuChangeHandler("Result 2021")}>
                  Result 2021

                </li>
                <li
                  className={`${Styles.list} ${active === "Result 2022" ? Styles.active : ""
                    }`}
                  onClick={() => menuChangeHandler("Result 2022")}>
                  Result 2022

                </li>
              </ul>
            </div>
          </div>
          <div className={Styles.courcesPage__tabContant}>
            {show === "Result 2011-12" && (
              <div className={Styles.courcesPage__tabContant__item2}>
                <img src={Image1} />
              </div>
            )}
            {show === "Result 2016" && (
              <div className={Styles.courcesPage__tabContant__item2}>
                <img src={Image2} />
              </div>
            )}
            {show === "Result 2017" && (
              <div className={Styles.courcesPage__tabContant__item2}>
                <img src={Image3} />
              </div>
            )}
            {show === "Result 2018" && (
              <div className={Styles.courcesPage__tabContant__item2}>
                <img src={Image4} />
              </div>
            )}
            {show === "Result 2019" && (
              <div className={Styles.courcesPage__tabContant__item2}>
                <img src={Image5} />
              </div>
            )}
            {show === "Result 2020" && (
              <div className={Styles.courcesPage__tabContant__item2}>
                <img src={Image6} />
              </div>
            )}
            {show === "Result 2021" && (
              <div className={Styles.courcesPage__tabContant__item2}>
                <img src={Image7} />
              </div>
            )}
            {show === "Result 2022" && (
              <div className={Styles.courcesPage__tabContant__item2}>
                <img src={Image8} />
              </div>
            )}
          </div>
        </div>
      </Container>

    </>

  )

}

export default Result;
