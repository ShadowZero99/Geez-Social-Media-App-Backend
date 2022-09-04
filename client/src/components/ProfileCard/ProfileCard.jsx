import React from "react";
import Cover from "../../img/cover.jpeg";
import Profile from "../../img/profile.jpg";
import "./ProfileCard.css";

const ProfileCard = () => {
  const ProfilePage = true;

  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
      </div>

      <div className="ProfileName">
        <span>Lisa Helenski</span>
        <span>Executive Product Manager</span>
      </div>

      <div className="FollowStatus">
        <hr />
        <div>
          <div className="follow">
            <span>4586</span>
            <span>Followers</span>
          </div>
          {ProfilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
          <div className="vl"></div>
          <div className="follow">
            <span>25</span>
            <span>Following</span>
          </div>
        </div>
        <hr />
      </div>
      {ProfilePage ? "" : <span>My Profile</span>}
    </div>
  );
};

export default ProfileCard;
