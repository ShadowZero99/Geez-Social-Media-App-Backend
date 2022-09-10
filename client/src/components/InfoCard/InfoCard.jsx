import React from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import { useState } from "react";
import ProfileModel from "../ProfileModel";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import * as UserApi from "../../api/UserRequest.js";
import { logOut } from "../../actions/AuthAction";

const InfoCard = () => {
  const [modelOpened, setModelOpened] = useState(false);
  const Dispatch = useDispatch();
  const params = useParams();

  const [profileUser, setProfileUser] = useState({});
  const profileUserId = params.id;
  const user = useSelector((state) => state.authReducer.authData);
  useEffect(() => {
    const fetchProfileUser = async () => {
      if (profileUserId === user._id) {
        setProfileUser(user);
      } else {
        const profileUser = await UserApi.getUser(profileUserId);
        setProfileUser(profileUser);
      }
    };
    fetchProfileUser();
  }, [user]);

  const handleLogOut = () => {
    Dispatch(logOut());
  };

  return (
    <div className="InfoCard">
      <div className="InfoHead">
        <h4>Profile Info</h4>
        {user._id === profileUserId ? (
          <div>
            <UilPen
              width="2rem"
              height="1.2rem"
              onClick={() => setModelOpened(true)}
            />
            <ProfileModel
              modelOpened={modelOpened}
              setModelOpened={setModelOpened}
              data={user}
            />
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="info">
        <span>
          <b>First Name </b>
        </span>
        <span>{profileUser.firstname} </span>
      </div>
      <div className="info">
        <span>
          <b>Last Name </b>
        </span>
        <span>{profileUser.lastname} </span>
      </div>

      <div className="info">
        <span>
          <b>About </b>
        </span>
        <span>{profileUser.about} </span>
      </div>

      <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span>{profileUser.relationship} </span>
      </div>

      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>{profileUser.livesin}</span>
      </div>
      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>{profileUser.worksAt}</span>
      </div>
      <div className="info">
        <span>
          <b>Country </b>
        </span>
        <span>{profileUser.country} </span>
      </div>

      <button className="button logout-button" onClick={handleLogOut}>
        LogOut
      </button>
    </div>
  );
};

export default InfoCard;
