import React from "react";
import CommanBanner from "../component/CommanBanner";
import Container from "../component/Container";
import CourseCrousel from "../CourceDetails/CourseCrousel";
import CommonArtical from "../EPWYojnaKurushetra/CommonArtical";
import Styles from '../EPWYojnaKurushetra/index.module.scss'
import Img1 from '../../src/Assets/B1.png'
import Img2 from '../../src/Assets/B2.png'
import Img3 from '../../src/Assets/B3.png'

const ImportantArticles = () => {
  return (
    <>
      <CommanBanner section="UPSC-CSE MAINS IMPORTANT ARTICLES" />
      <div className={Styles.courcesPage}>
        <Container>
          <div className={Styles.courcesPage__rowflex}>
            <div className={Styles.courcesPage__rowflex__couresDetails}>
              <div className={Styles.courcesPage__rowflex__couresDetails__inner}>
                <h2>UPSC-CSE MAINS IMPORTANT ARTICLES</h2>
                <div className={Styles.courcesPage__rowflex__couresDetails__inner__artical}>
                  <CommonArtical link="https://triumphias.com/oss/file-download.php?file-id=20180827_143202_498064119_214849308.pdf"
                    image={Img1} />

                  <CommonArtical link="https://triumphias.com/oss/file-download.php?file-id=20180827_143318_1235730090_1345588244.pdf"
                    image={Img2} />

                  <CommonArtical link="https://triumphias.com/oss/file-download.php?file-id=20180827_143241_1065362396_764900475.pdf"
                    image={Img3} />
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

export default ImportantArticles;
