import React from "react";

import LogoSerach from "../LogoSearch/LogoSerach";
import InfoCard from "../InfoCard/InfoCard";
import FollowersCard from "../FollowersCard/FollowersCard";

const ProfileLeft = () => {
  return (
    <div className="ProfileSide">
      <LogoSerach />
      <InfoCard />
      <FollowersCard />
    </div>
  );
};

export default ProfileLeft;
