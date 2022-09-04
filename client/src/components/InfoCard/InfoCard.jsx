import React from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import { useState } from "react";
import ProfileModel from "../ProfileModel";

const InfoCard = () => {
  const [modelOpened, setModelOpened] = useState(false);
  return (
    <div className="InfoCard">
      <div className="InfoHead">
        <h4>Your Info</h4>
        <div>
          <UilPen
            width="2rem"
            height="1.2rem"
            onClick={() => setModelOpened(true)}
          />
          <ProfileModel
            modelOpened={modelOpened}
            setModelOpened={setModelOpened}
          />
        </div>
      </div>
      <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span>in Relationship </span>
      </div>
      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>Colombo</span>
      </div>
      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>Tesla</span>
      </div>

      <button className="button logout-button">LogOut</button>
    </div>
  );
};

export default InfoCard;
