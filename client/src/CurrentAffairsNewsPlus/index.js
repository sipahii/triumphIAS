import React from "react";
import CommanBanner from "../component/CommanBanner";
import Container from "../component/Container";
import CourseCrousel from "../CourceDetails/CourseCrousel";
import Styles from './index.module.scss'
import Img1 from '../../src/Assets/Science-and-Tech.png'
import Img2 from '../../src/Assets/Geo.png'

const CurrentAffairsNewsPlus = () => {
  return (
    <>
      <CommanBanner section="UPSC-CSE MAINS CURRENT AFFAIRS NEWS-PLUS" />
      <div className={Styles.courcesPage}>
        <Container>
          <div className={Styles.courcesPage__rowflex}>
            <div className={Styles.courcesPage__rowflex__couresDetails}>
              <div className={Styles.courcesPage__rowflex__couresDetails__inner}>
                <h2>UPSC-CSE MAINS CURRENT AFFAIRS NEWS-PLUS</h2>
                <div className={Styles.courcesPage__rowflex__couresDetails__inner__artical}>
                  <a href="https://triumphias.com/oss/file-download.php?file-id=20180918_124238_1019768794_533194255.pdf"><img src={Img1} /></a>
                  <a href="https://triumphias.com/oss/file-download.php?file-id=20180918_124239_565045923_198573500.pdf"><img src={Img2} /></a>
                </div>
              </div>

            </div>
          </div>
          <div className={Styles.courcesPage__rowflex__couresDetails__crousalArea}>
            <h3>Related Courses</h3>
          </div>
          <CourseCrousel />
        </Container>
      </div>
    </>
  );
};

export default CurrentAffairsNewsPlus;
