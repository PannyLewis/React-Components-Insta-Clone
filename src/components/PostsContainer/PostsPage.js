//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data
import dummyData from "../../dummy-data";

const PostsPage = () => {
  // set up state for your data
  console.log(dummyData);
  const [data, setData] = useState(dummyData);
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {data.map((item, index) => {
        return <Post key={index} post={item} />;
      })}
    </div>
  );
};

export default PostsPage;

/*
props.comments

Array(2)
0:
comments: (3) [{…}, {…}, {…}]
imageUrl: "https://images.unsplash.com/photo-1477763858572-cda7deaa9bc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1876&q=80"
likes: 400
thumbnailUrl: "https://icon2.cleanpng.com/20180320/sqe/kisspng-twitch-computer-icons-streaming-media-youtube-live-tv-twitch-icon-5ab19172461392.001176751521586546287.jpg"
timestamp: "July 17th 2017, 12:42:40 pm"
username: "philzcoffee"
__proto__: Object
1:
comments: (4) [{…}, {…}, {…}, {…}]
imageUrl: "https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3750&q=80"
likes: 4307
thumbnailUrl: "https://icon2.cleanpng.com/20180320/sqe/kisspng-twitch-computer-icons-streaming-media-youtube-live-tv-twitch-icon-5ab19172461392.001176751521586546287.jpg"
timestamp: "July 15th 2017, 03:12:09 pm"
username: "twitch"
*/
