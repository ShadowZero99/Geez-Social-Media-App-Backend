import React from "react";
import "./Post.css";
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import Heart from "../../img/like.png";
import NotLike from "../../img/notlike.png";

const Post = ({ data }) => {
  return (
    <div className="posts">
      <img src={data.img} alt="" />
      <div className="PostReact">
        <img src={data.liked ? Heart : NotLike} alt="" />
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
      </div>
      <span>{data.likes}Likes</span>
      <div className="detail">
        <span>
          <b>{data.name}</b>
        </span>
        <span> {data.desc}</span>
      </div>
    </div>
  );
};

export default Post;
