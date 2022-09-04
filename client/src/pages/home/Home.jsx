import React from "react";
import Profile from "../../components/Profile";
import Postside from "../../components/Postside/Postside";
import "./Home.css";
import RightSide from "../../components/RightSide/RightSide";

const Home = () => {
  return (
    <div className="Home">
      <Profile />
      <Postside />
      <RightSide />

      <div className="rightSide">Right</div>
    </div>
  );
};

export default Home;
