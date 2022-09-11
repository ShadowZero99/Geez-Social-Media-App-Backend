import React from "react";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { followUser, UnfollowUser } from "../../actions/userAction";

const User = ({ person }) => {
  const user = useSelector((state) => state.authReducer.authData);
  const dispatch = useDispatch();
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const [followings, setFollowing] = useState(
    person.followers.includes(user._id)
  );
  const handleFollow = () => {
    followings
      ? dispatch(UnfollowUser(person._id, user))
      : dispatch(followUser(person._id, user));

    setFollowing((prev) => !prev);
  };
  return (
    <div className="follower">
      <div>
        <img
          src={
            person.profilePicture
              ? serverPublic + person.profilePicture
              : serverPublic + "defaultProfile.png"
          }
          alt=""
          className="followerImg"
        />
        <div className="name">
          <span>{person.firstname}</span>
          <span>@{person.username}</span>
        </div>
      </div>

      <button
        className={
          followings ? "button fc-button unfllowButton" : "button fc-button"
        }
        onClick={handleFollow}
      >
        {followings ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
};

export default User;
