import React, { useEffect, useState } from "react";
import axios from "axios";
import Banner from "./Banner";
import AboutArea from "./AboutArea";
import CampusVideo from "./CampusVideo";
import CounterShow from "./CounterShow";
import Feature from "./Feature";
import ToppersCrousel from "./ToppersCrousel";
import style from "./index.module.scss";

const Home = () => {
  const [list, setList] = useState([]);

  const loadData = async () => {
    try {
      const response = await axios.get("http://localhost:500/api/get");
      setList(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <div>
      {/* <table>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>CONTACT</th>
        </tr>
        {list.map(({ ID, NAME, EMAIL, CONTACT }) => {
          return (
            <tr>
              <td>{ID}</td>
              <td>{NAME}</td>
              <td>{EMAIL}</td>
              <td>{CONTACT}</td>
            </tr>
          );
        })}
      </table> */}
      <Banner />
      <AboutArea />
      <Feature />
      <div className={style.crouselArea}>
        <ToppersCrousel title="Our Toppers: Sociology" src1="/images/tas1.jpg" src2="/images/tas2.jpg" src3="/images/tas3.jpg" src4="/images/tas5.jpg" src5="/images/tas6.jpg" src6="/images/tas7.jpg" src7="/images/tas4.jpg" />
        <ToppersCrousel title="Our Toppers: Essay" src1="/images/tae1.jpg" src2="/images/tae2.jpg" src3="/images/tae3.jpg" src7="/images/tae5.jpg" src5="/images/tae6.jpg" src6="/images/tae7.jpg" src4="/images/tae4.jpg" />
      </div>
      <CampusVideo />
      <CounterShow />
    </div>
  );
};
export default Home;
