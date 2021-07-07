// You will add code in this file
import React, { useState } from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

// pass props in this file to
const Post = (props) => {
  // set up state for the likes
  const [changeLikes, setChangeLikes] = useState(false);
  const [countLikes, setCountLikes] = useState(props.likes);
  const [totalLikes, setTotalLikes] = useState(props.post.likes);
  const [colorchange, setColorChange] = useState("black");

  function updateLikes() {
    console.log("updateLikes");

    if (!changeLikes) {
      setTotalLikes(totalLikes + 1);
      setChangeLikes(true);
      setColorChange("red");
    }
  }

  return (
    <div className="post-border">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
      </div>
      <LikeSection
        likes={totalLikes}
        setChangeLikes={setChangeLikes}
        setCountLikes={() => updateLikes()}
        changeLikes={changeLikes}
        countlikes={countLikes}
      />

      <CommentSection
        postId={props.post.imageUrl}
        comments={props.post.comments}
      />
    </div>
  );
};

export default Post;
