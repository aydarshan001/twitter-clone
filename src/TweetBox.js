import React, { useState } from "react";
import "./TweetBox.css";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import GifBoxIcon from "@mui/icons-material/GifBox";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import EventIcon from "@mui/icons-material/Event";

function TweetBox(props) {
  const [inputervv, setinputervv] = useState("");
  const sendTweet = (e) => {
    e.preventDefault();

    // <Ttbox ttbox={inputervv}></Ttbox>;
  };
  return (
    <div>
      <form action="#">
        <div className="topbox">
          <div className="img"> </div>{" "}
          <div className="tweetbox-inp">
            <input
              onChange={(e) => setinputervv(e.target.value)}
              value={inputervv}
              className="inputer"
              type="text"
              placeholder="What's happening?"
            />
          </div>{" "}
        </div>{" "}
        <div className="butbox">
          <div className="pht">
            <InsertPhotoIcon> </InsertPhotoIcon> <div className="space"> </div>{" "}
            <GifBoxIcon> </GifBoxIcon> <div className="space"> </div>{" "}
            <InsertEmoticonIcon> </InsertEmoticonIcon>{" "}
            <div className="space"> </div> <EventIcon> </EventIcon>{" "}
            <div className="space"> </div> <LocationOnIcon> </LocationOnIcon>{" "}
          </div>{" "}
          <button className="btner" type="submit" onClick={sendTweet}>
            {" "}
            Tweet{" "}
          </button>{" "}
        </div>{" "}
      </form>{" "}
    </div>
  );
}

export default TweetBox;
