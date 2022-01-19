import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SidebarOpt from "./SidebarOpt";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import NumbersIcon from "@mui/icons-material/Numbers";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="ticon"></TwitterIcon>
      <SidebarOpt active Text="Home" Icon={HomeIcon}></SidebarOpt>
      <SidebarOpt Text="Explore" Icon={SearchIcon}></SidebarOpt>
      <SidebarOpt Text="Trending" Icon={NumbersIcon}></SidebarOpt>
      <SidebarOpt
        Text="Notifications"
        Icon={NotificationsActiveIcon}
      ></SidebarOpt>
      <SidebarOpt Text="Messages" Icon={MailOutlineIcon}></SidebarOpt>
      <SidebarOpt Text="Bookmarks" Icon={BookmarkBorderIcon}></SidebarOpt>
      <SidebarOpt Text="Lists" Icon={ListAltIcon}></SidebarOpt>
      <SidebarOpt Text="Profile" Icon={PermIdentityIcon}></SidebarOpt>
      <SidebarOpt Text="More" Icon={MoreHorizIcon}></SidebarOpt>
      <div>
        <button className="btn">Tweet</button>
      </div>
    </div>
  );
}

export default Sidebar;
