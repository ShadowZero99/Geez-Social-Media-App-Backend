import React, { useState } from "react";
import "./RightSide.css";

import { UilHome } from "@iconscout/react-unicons";
import { UilSetting } from "@iconscout/react-unicons";
import { UilHistory } from "@iconscout/react-unicons";
import { UilMessage } from "@iconscout/react-unicons";
import TrendCard from "../TrendCard/TrendCard";
import ShareModel from "../ShareModel/ShareModel";
import { Link } from "react-router-dom";

const RightSide = () => {
  const [modelOpened, setModelOpened] = useState(false);
  return (
    <div className="RightSide">
      <div className="navIcons">
        <Link to="../home">
          {" "}
          <div className="s-icon">
            <UilHome />
          </div>
        </Link>
        <div className="s-icon">
          <UilSetting />
        </div>
        <div className="s-icon">
          <UilHistory />
        </div>
        <div className="s-icon">
          <UilMessage />
        </div>
      </div>
      <TrendCard />
      <button className="button r-button" onClick={() => setModelOpened(true)}>
        Share
      </button>
      <ShareModel modelOpened={modelOpened} setModelOpened={setModelOpened} />
    </div>
  );
};

export default RightSide;
