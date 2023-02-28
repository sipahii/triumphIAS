import React from "react";
import CommanBanner from "../component/CommanBanner";
import Container from "../component/Container";
import CourseCrousel from "../CourceDetails/CourseCrousel";
import Styles from "../EssayTopics/index.module.scss"
import CommanData from "./CommonData";
import CommonNcert from "./CommonNcert";

const BasicGSMaterial = () => {
  return (
    <>
      <CommanBanner section="UPSC-CSE MAINS IMPORTANT ARTICLES" />
      <div className={Styles.courcesPage}>
        <Container>
          <div className={Styles.courcesPage__rowflex}>
            <div className={Styles.courcesPage__rowflex__couresDetails}>
              <div className={Styles.courcesPage__rowflex__couresDetails__inner}>
                <h2>UPSC-CSE MAINS IMPORTANT ARTICLES</h2>
                <p>The Civil Services Exam Preparation is a prolonged and tedious process. To make this process easy, all that the aspirant needs an effective preparation plan. Planning for Reading Reources is very Crucial. The NCERT books are the Basic Reading Resource as they serve as a strong foundation in the civil services exam preparation. NCERT BOOKS helps one gain a Foundational Knowledge about Concepts, Theories & facts on topics mentioned in the Syllabus. For Understanding Current Affairs, its important to correlate the issues in news with Basic Concepts, Theories and Facts of NCERT. Thus, The NCERT Books and NIOS material play an important role in Prepartions for Civil Services. However many Coachings and Successful IAS Aspirants recommend to read the NCERT Books for UPSC, no one explains which NCERT Books should be given importance. Therefore, here Vikash Ranjan Sir @ Triumph IAS bring to you, the list of NCERT Books that are important for IAS Prelims and Mains examination. You can download NCERT books for IAS exam from the links given below. Happy Reading! All the Best.</p>

                <CommonNcert head="FINE ART">
                  <CommanData
                    data1="11"
                    data2="An Introduction to Indian Art Part-I"
                    data3="https://drive.google.com/file/d/15ZVMlDf9fnhxP1uC6XVIT7DDzxNvq-Nn/view?usp=sharing"
                  />
                </CommonNcert>


                <CommonNcert head="HERITAGE CRAFT">

                  <CommanData
                    data1="11"
                    data2="Living Craft Tradition of India"
                    data3="https://drive.google.com/file/d/1KNo0qE4GynRBG6sSSp-Gb6MFKWhu9SM4/view?usp=sharing"
                  />
                  <CommanData
                    data1="12"
                    data2="Craft Tradition of India"
                    data3="https://drive.google.com/file/d/1kFAWA11hsokyJH1gkNlzOTeXTlgxrLVH/view?usp=sharing"
                  />
                </CommonNcert>

                <CommonNcert head="HISTORY">

                  <CommanData
                    data1="6"
                    data2="History-Our Past Life"
                    data3="https://drive.google.com/file/d/1aBMnPX1X370FMFX3eaX3KaJvecvDdc-9/view?usp=sharing"
                  />
                  <CommanData
                    data1="7"
                    data2="Our Past- I"
                    data3="https://drive.google.com/file/d/1X9eG3wxUDs3Rhvw3_IXR5QDMAYQZ4mPG/view?usp=sharing"
                  />
                  <CommanData
                    data1="8"
                    data2="Our Past- II"
                    data3="https://drive.google.com/file/d/1wwNDxhwExxxD6CTQQ9lHR48OZ5Ots-ox/view?usp=sharing"
                  />
                  <CommanData
                    data1="8"
                    data2="Our Past- III"
                    data3="https://drive.google.com/file/d/1t_nudRqfFcMsLkqYYfroMuOHuyu-wqUI/view?usp=sharing"
                  />
                  <CommanData
                    data1="9"
                    data2="Indian and Contemporary World- I"
                    data3="https://drive.google.com/file/d/1awrwftzhMwKwJgtWhHxZu06DYrSltkOE/view?usp=sharing"
                  />
                  <CommanData
                    data1="10"
                    data2="Indian and Contemporary World- II"
                    data3="https://drive.google.com/file/d/1sNUdPbVWB_evzJkK7Y6vanTZIQEovrow/view?usp=sharing"
                  />
                  <CommanData
                    data1="11"
                    data2="Themes in World History"
                    data3="https://drive.google.com/file/d/19og8lP37siyRm8dPc0pPbg21d0XIoJHg/view?usp=sharing"
                  />
                  <CommanData
                    data1="12"
                    data2="Themes in World History-I"
                    data3="https://drive.google.com/file/d/1Z1BVGKwvRbY-MQ0Mzry0Iza1dbyjgntS/view?usp=sharing"
                  />
                  <CommanData
                    data1="12"
                    data2="Themes in World History-II"
                    data3="https://drive.google.com/file/d/1q7OtKVhzt5SFQ8iRkKxI7ERTKWlsl4Gi/view?usp=sharing"
                  />
                  <CommanData
                    data1="12"
                    data2="Themes in World History-III"
                    data3="https://drive.google.com/file/d/1pjAvdG_ldhChG60U6laKeZDLAhWFjIuP/view?usp=sharing"
                  />

                </CommonNcert>

                <CommonNcert
                  head="GEOGRAPHY">
                  <CommanData
                    data1="6"
                    data2="The Earth Our Habitat"
                    data3="https://drive.google.com/file/d/1AT2-bSZ6U6Ue9OrQTOdVcBqFdKcgOhYa/view?usp=sharing"
                  />
                  <CommanData
                    data1="8"
                    data2="Resource and Development"
                    data3="https://drive.google.com/file/d/1fxbJ-AOK1m6P11fQ1Wcnm-m8Yp7CKb59/view?usp=sharing"
                  />
                  <CommanData
                    data1="9"
                    data2="Contemporary India-I"
                    data3="https://drive.google.com/file/d/12YmRSCcNuYAHr9A1uKHqNhZXvWEOKCiJ/view?usp=sharing"
                  />
                  <CommanData
                    data1="10"
                    data2="Contemporary India-II"
                    data3="https://drive.google.com/file/d/11u1v8IBCGYivD2T6I1ONwSdqDv-6skdL/view?usp=sharing"
                  />
                  <CommanData
                    data1="11"
                    data2="Fundamental of Physical Geography"
                    data3="https://drive.google.com/file/d/1g2Kd8zBxWoBN8WZnJDrKPu1AxPJNqp-v/view?usp=sharing"
                  />
                  <CommanData
                    data1="11"
                    data2="Practical work in Geography-I"
                    data3="https://drive.google.com/file/d/1gRMnGFj6VbjI9MWnxMNsKOxWs5WgeVdR/view?usp=sharing"
                  />
                  <CommanData
                    data1="11"
                    data2="India Physical Environment"
                    data3="https://drive.google.com/file/d/1PUjnnBViuBtseCMRFuT49xy0mGLvs2er/view?usp=sharing"
                  />
                  <CommanData
                    data1="12"
                    data2="Fundamental of Human Geography"
                    data3="https://drive.google.com/file/d/1g2Kd8zBxWoBN8WZnJDrKPu1AxPJNqp-v/view?usp=sharing"
                  />
                  <CommanData
                    data1="12"
                    data2="Practical work in Geography-II"
                    data3="https://drive.google.com/file/d/1wVhUPSd-_8CeQsHwnSZZeowZrd0DxoMr/view?usp=sharing"
                  />
                  <CommanData
                    data1="12"
                    data2="India-People and Economy"
                    data3="https://drive.google.com/file/d/1J8pfptLj-I7CQEmZ1j7bXfGj5Dk8Pz8D/view?usp=sharing"
                  />

                </CommonNcert>

                <CommonNcert head="ECONOMICS">
                  <CommanData
                    data1="9"
                    data2="Economics"
                    data3="https://drive.google.com/file/d/17N5Xf0Pt3OyQonsyDtLB4DnNWV10O4VZ/view?usp=sharing"
                  />
                  <CommanData
                    data1="10"
                    data2="Understanding Economic Development"
                    data3="https://drive.google.com/file/d/1gCtBuehI0NoH6S5zJx5znvWGatXcPklp/view?usp=sharing"
                  />
                  <CommanData
                    data1="11"
                    data2="	India Economic Development"
                    data3="https://drive.google.com/file/d/1llKHkMe31ET61tGQ8InvZ7oKUaEDHVRx/view?usp=sharing"
                  />
                  <CommanData
                    data1="12"
                    data2="	Introductory Microeconomics"
                    data3="https://drive.google.com/file/d/1H9JgM0A6rBS2-XQ2o3e3P8YvdCVrl7Ov/view?usp=sharing"
                  />
                  <CommanData
                    data1="12"
                    data2="Introductory Microeconomics"
                    data3="https://drive.google.com/file/d/1HUaPt6spjRYp8N99Gi_03md6CahopUD2/view?usp=sharing"
                  />
                </CommonNcert>


                <CommonNcert head="ENVIRONMENT">
                  <CommanData
                    data1="5"
                    data2="Looking Around"
                    data3="https://drive.google.com/file/d/1ig-IrPVU4eaMKVQz1NEBcIdIhTnUJ4WZ/view?usp=sharing"
                  />
                  <CommanData
                    data1="7"
                    data2="Our Environment"
                    data3="https://drive.google.com/file/d/16OiP90TecrSZ9GLoyUG5isyMFyumqQ4D/view?usp=sharing"
                  />
                </CommonNcert>

                <CommonNcert head="SCIENCE">
                  <CommanData
                    data1="6"
                    data2="Science"
                    data3="https://drive.google.com/file/d/1vFECiypjI1CFq2f-eGS1WJI7HbMNa1mk/view?usp=sharing"
                  />
                  <CommanData
                    data1="7"
                    data2="Science"
                    data3="https://drive.google.com/file/d/1sPi17MOND51Im2Fsp3lTMo8X1vqrCZ2L/view?usp=sharing"
                  />
                  <CommanData
                    data1="8"
                    data2="Science"
                    data3="https://drive.google.com/file/d/1aEOMUyhMj4NbnSI2OOftJKMTlGhXmI_N/view?usp=sharing"
                  />
                  <CommanData
                    data1="9"
                    data2="Science"
                    data3="https://drive.google.com/file/d/1znDuXH6JpGSL6omuHkHQfvgSMRMKyJUk/view?usp=sharing"
                  />
                  <CommanData
                    data1="10"
                    data2="Science"
                    data3="https://drive.google.com/file/d/1Ef1ZD02WryCZexFsVqxXWSY96INCD_U0/view?usp=sharing"
                  />
                  <CommanData
                    data1="10"
                    data2="Exemplar Problems"
                    data3="https://drive.google.com/file/d/1Ef1ZD02WryCZexFsVqxXWSY96INCD_U0/view?usp=sharing"
                  />

                </CommonNcert>

                <CommonNcert head="MATHEMATICS">
                  <CommanData
                    data1="5"
                    data2="Math-Magic"
                    data3="https://drive.google.com/file/d/1CDwTTPpGxGyhrCW69RTCgU4QQpMEfAFD/view?usp=sharing"
                  />
                  <CommanData
                    data1="6"
                    data2="Mathematics"
                    data3="https://drive.google.com/file/d/1B7KwoFg9kFuugNvQeXk9KbtRZ0G8s5yI/view?usp=sharing"
                  />
                  <CommanData
                    data1="7"
                    data2="Mathematics"
                    data3="https://drive.google.com/file/d/1yHMXUgtURnCZbe6GAFowTLFERVcdP3DE/view?usp=sharing"
                  />
                  <CommanData
                    data1="8"
                    data2="Mathematics"
                    data3="https://drive.google.com/file/d/1Dz-ylj7Z0dLOqu15nsGamwy0ZrXB7X2e/view?usp=sharing"
                  />
                  <CommanData
                    data1="9"
                    data2="Mathematics"
                    data3="https://drive.google.com/file/d/1CxZy3NKk8IpWmgqGVgLbywc5fnlcE7aF/view?usp=sharing"
                  />
                  <CommanData
                    data1="9"
                    data2="Exemplar Problems"
                    data3="https://drive.google.com/file/d/1QBTl1BiVNwddt4PRrm0x0VqZdJPqTYFV/view?usp=sharing"
                  />
                  <CommanData
                    data1="10"
                    data2="Mathematics"
                    data3="https://drive.google.com/file/d/1wiH2f33JGb0dgJqQUJe9D-aVCt-R_F7H/view?usp=sharing"
                  />
                  <CommanData
                    data1="10"
                    data2="Exemplar Problems"
                    data3="https://drive.google.com/file/d/1sW1ua_JzWUO0z-ax9o-4uTdna09EhYWn/view?usp=sharing"
                  />
                  <CommanData
                    data1="11"
                    data2="Mathematics"
                    data3="https://drive.google.com/file/d/1-pveS9-5GUQBcxZ54NRJeabLQ2RWfi0s/view?usp=sharing"
                  />
                  <CommanData
                    data1="11"
                    data2="Exemplar Problems"
                    data3="https://drive.google.com/file/d/1fUgaLDd0Pr7S6a6nRTJ-8jRxD4Sq-mRb/view?usp=sharing"
                  />
                  <CommanData
                    data1="12"
                    data2="Mathematics-I"
                    data3="https://drive.google.com/file/d/1v7J-X-4pBdmKByCHZUrXtW9NWyRjVdlr/view?usp=sharing"
                  />
                  <CommanData
                    data1="12"
                    data2="Mathematics-II"
                    data3="https://drive.google.com/file/d/1aL4YwZ0GXBKZfUQhkVS1LQqJo0zWzGW6/view?usp=sharing"
                  />

                </CommonNcert>

                <CommonNcert head="POLITICAL SCIENCE">
                  <CommanData
                    data1="11"
                    data2="Political Theory"
                    data3="https://drive.google.com/file/d/1MM1-lRKQZiKYToXeWldnGVHAaatT0OVw/view?usp=sharing"
                  />
                  <CommanData
                    data1="11"
                    data2="Indian Constitution at Work"
                    data3="https://drive.google.com/file/d/1HUU_1o-yDTKwXowndGyFvlSZKpI_OpkO/view?usp=sharing"
                  />
                  <CommanData
                    data1="12"
                    data2="Contemporary World Politics"
                    data3="https://drive.google.com/file/d/1CIWNiqb-nQOT2W4MhNMLrGR32X5PzxGT/view?usp=sharing"
                  />
                  <CommanData
                    data1="12"
                    data2="Political Science"
                    data3="https://drive.google.com/file/d/1YUl7Q-v2-8vfHVebjuerK9HoiUu1fTKe/view?usp=sharing"
                  />
                </CommonNcert>

                <CommonNcert head="PHYSICS">
                  <CommanData
                    data1="11"
                    data2="Physics Part-I"
                    data3="https://drive.google.com/file/d/1_U8IN2cP3P2if-MAr0qEj-gl2nWX17ai/view?usp=sharing"
                  />
                  <CommanData
                    data1="11"
                    data2="Physics Part-II"
                    data3="https://drive.google.com/file/d/1NHd5TImRTqfjiewnx5X2nVOOlZcVmLJJ/view?usp=sharing"
                  />
                  <CommanData
                    data1="11"
                    data2="Exemplar Problems"
                    data3="https://drive.google.com/file/d/1-aP5tPweN9M7p_Lzsk-6cUBK3B7GYpFI/view?usp=sharing"
                  />
                  <CommanData
                    data1="12"
                    data2="Physics Part-I"
                    data3="https://drive.google.com/file/d/16Pbi707MV8VJ8djpqfv1namlRZolp-WS/view?usp=sharing"
                  />
                  <CommanData
                    data1="12"
                    data2="Physics Part-II"
                    data3="https://drive.google.com/file/d/1BYuVwpR2ygDiwoUM2lbpD9YDuqSPCxqv/view?usp=sharing"
                  />
                </CommonNcert>

                <CommonNcert head="CHEMISTRY">
                  <CommanData
                    data1="11"
                    data2="Chemistry Part-I"
                    data3="https://drive.google.com/file/d/1CtLzIAZYIS-5cSb_Rq0Bouip7mbtsMjf/view?usp=sharing"
                  />
                  <CommanData
                    data1="11"
                    data2="Chemistry Part-II"
                    data3="https://drive.google.com/file/d/1cOb0JoOZcUvDG2S4wY7FCtiI2xiun56w/view?usp=sharing"
                  />
                  <CommanData
                    data1="12"
                    data2="Chemistry Part-I"
                    data3="https://drive.google.com/file/d/1XTwCv9J8LuDF8CCc-DGmKGGjy5Tl56Jo/view?usp=sharing"
                  />
                  <CommanData
                    data1="12"
                    data2="Chemistry Part-II"
                    data3="https://drive.google.com/file/d/1_JSwsB0S2KnQQMcbsXahvgAD6z_OdXJY/view?usp=sharing"
                  />
                </CommonNcert>

                <CommonNcert head="PSYCHOLOGY">
                  <CommanData
                    data1="11"
                    data2="Introduction to Psychology"
                    data3="https://drive.google.com/file/d/1ei6pKHAjWbEpG3T_Tiu3Zvmjhp50W5XT/view?usp=sharing"
                  />
                  <CommanData
                    data1="12"
                    data2="Psychology"
                    data3="https://drive.google.com/file/d/1JCpnt1fwk8Z-l95Sepj9Cn5qVUTWLhFJ/view?usp=sharing"
                  />
                </CommonNcert>

                <CommonNcert head="SOCIOLOGY">
                  <CommanData
                    data1="11"
                    data2="Introducing Sociology"
                    data3="https://drive.google.com/file/d/12u9E7ldCh3N6Zu95LH9SpL3rw81nPYXZ/view?usp=sharing"
                  />
                  <CommanData
                    data1="11"
                    data2="Understanding Society"
                    data3="https://drive.google.com/file/d/1WXS_1XUgAcCgFyGUKMzbHcnA6IZjDKtJ/view?usp=sharing"
                  />
                  <CommanData
                    data1="12"
                    data2="Indian Society"
                    data3="https://drive.google.com/file/d/1ovPgYbS1QzIQz6GxLouoPELrokwZxfQe/view?usp=sharing"
                  />
                  <CommanData
                    data1="12"
                    data2="Social Change and Development in India"
                    data3="https://drive.google.com/file/d/1IE6TIm1EXlGa4iiINXkitfKZ_J4ALvd7/view?usp=sharing"
                  />
                </CommonNcert>

                <CommonNcert head="BIOLOGY">
                  <CommanData
                    data1="11"
                    data2="Biology"
                    data3="https://drive.google.com/file/d/1YcAYxCUC3Pm79QAV-VkPjdmr4B_uKq_d/view?usp=sharing"
                  />
                  <CommanData
                    data1="11"
                    data2="Exemplar Problems"
                    data3="https://drive.google.com/file/d/14SoWrBoA9O27qvTCT64sE7AFKVG-hujd/view?usp=sharing"
                  />
                  <CommanData
                    data1="12"
                    data2="Biology"
                    data3="https://drive.google.com/file/d/1IslS3SR2-UDO3a7bv_2-VWKzmBT9CyvI/view?usp=sharing"
                  />
                </CommonNcert>

                <CommonNcert head="BUSINESS STUDIES">
                  <CommanData
                    data1="11"
                    data2="Business Studies"
                    data3="https://drive.google.com/file/d/1w1XKVucLY9XcvGH79sx4pTmepx2xt-lf/view?usp=sharing"
                  />
                  <CommanData
                    data1="12"
                    data2="Business Studies-I"
                    data3="https://drive.google.com/file/d/1ncNrcXoqTMZUgZjLOrLGEGNv2nfwyeDQ/view?usp=sharing"
                  />
                  <CommanData
                    data1="12"
                    data2="Business Studies-II"
                    data3="https://drive.google.com/file/d/1UiKAdJ2WFmRP7GgHRfCUzMiKMJr9jWyY/view?usp=sharing"
                  />
                </CommonNcert>

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

export default BasicGSMaterial;
