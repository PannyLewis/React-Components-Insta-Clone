// look at the likes on this component. Right now it is hard coded on line 20.
// console.log your props and see how to add likes to this component so that it will update when you click the icon.
// HINT: You will need to add an onClick event pass through your props and update the hard coded Likes
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";

const LikeSection = (props) => {
  return (
    <div>
      <div className="like-section" key="likes-icons-container">
        <div className="like-section-wrapper">
          <FontAwesomeIcon
            icon={faHeart}
            style={colorchange}
            // onClick={() => props.setChangeLikes(!props.changeLikes)}
            onClick={() => props.setCountLikes()}
          />
        </div>
        <div className="like-section-wrapper">
          <FontAwesomeIcon icon={faComment} />
        </div>
      </div>
      <p className="like-number">{props.likes}</p>
    </div>
  );
};

export default LikeSection;

/*

onClick={() => {
        setState(previousState => !previousState);
        props.onChange(!state);
      }}



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
__proto__: Object
length: 2
__proto__: Array(0)


*/
