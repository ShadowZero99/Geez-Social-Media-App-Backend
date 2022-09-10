import React from "react";
import LogoSerach from "./LogoSearch/LogoSerach";
import ProfileCard from "./ProfileCard/ProfileCard";
import "./Profile.css";
import FollowersCard from "./FollowersCard/FollowersCard";

const Profile = () => {
  return (
    <div className="ProfileSide">
      <LogoSerach />
      <ProfileCard location="homepage" />
      <FollowersCard />
    </div>
  );
};

export default Profile;
