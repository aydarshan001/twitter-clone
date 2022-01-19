import React from "react";
import "./Feed.css";
import TweetBox from "./TweetBox.js";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import Post from "./Post";

function Feed(props) {
  return (
    <div>
      <div className="feed">
        <div className="feed_header">
          <h2 className="home"> Home </h2> <AutoAwesomeIcon> </AutoAwesomeIcon>{" "}
        </div>{" "}
        <TweetBox> </TweetBox>
        <Post
          displayname="Darshan"
          verified={true}
          text="yooo its working"
          atname="@darshan"
        >
          {" "}
        </Post>
      </div>{" "}
    </div>
  );
}

export default Feed;
