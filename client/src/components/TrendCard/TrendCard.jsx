import "./TrendCard.css";
import { TrendData } from "../../Data/TrendData";

import React from "react";

const TrendCard = () => {
  return (
    <div className="TrendCard">
      <h3>trends for you</h3>
      {TrendData.map((trend) => {
        return (
          <div className="trend">
            <span>#{trend.name}</span>
            <span>{trend.shares}K shares</span>
          </div>
        );
      })}
    </div>
  );
};

export default TrendCard;
