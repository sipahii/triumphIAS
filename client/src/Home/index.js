import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Header";
import Navigation from "../Navigation";
import Banner from "./Banner";
import Feature from "../Feature";

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
      <Header />
      <Navigation />
      <Banner />
      <Feature />
    </div>
  );
};
export default Home;
