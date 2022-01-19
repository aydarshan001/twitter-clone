import React from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import "./Post.css";
// import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import UploadOutlinedIcon from "@mui/icons-material/UploadOutlined";
import ArrowDownwardOutlined from "@mui/icons-material/ArrowDownwardOutlined";
import FavoriteBorderTwoToneIcon from "@mui/icons-material/FavoriteBorderTwoTone";
function Post(props) {
  return (
    <div>
      <div className="topboxer">
        <div>
          <div className="imger"> </div>
        </div>
        <div className="boxforall">
          <div className="dname">
            <h2>{props.displayname}</h2>
            {props.verified && <VerifiedIcon className="ver"></VerifiedIcon>}
            <h3>{props.atname}</h3>
          </div>
          <p className="text">{props.text}</p>

          {/* <div className="imgdis"></div> */}

          <div className="iconps">
            <ChatBubbleOutlineOutlinedIcon></ChatBubbleOutlineOutlinedIcon>
            <div className="arroer">
              <ArrowUpwardOutlinedIcon className="arro"></ArrowUpwardOutlinedIcon>
              <ArrowDownwardOutlined></ArrowDownwardOutlined>
            </div>
            <FavoriteBorderTwoToneIcon></FavoriteBorderTwoToneIcon>
            <UploadOutlinedIcon></UploadOutlinedIcon>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
